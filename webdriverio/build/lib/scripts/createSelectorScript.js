'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.getFn = getFn;
exports.getArgs = getArgs;

var _findElementStrategy = require('../helpers/findElementStrategy');

var _findElementStrategy2 = _interopRequireDefault(_findElementStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transforms function into string if necessaty
 * @param  {Function} fn                         function to execute on client side
 * @param  {Boolean}  [inMultibrowserMode=false] flag that is true if using multibrowser (multiremote)
 * @return {String}                              stringified function
 */
function getFn(fn) {
    var inMultibrowserMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof fn === 'function' || inMultibrowserMode && fn.indexOf('function (') === 0) {
        // Handle function script
        return fn.toString();
    }

    return `function(){${fn}}`;
}

/**
 * Transform command args into list of arguments
 * @param  {Array}   [args=[]]                  argument passed to the command
 * @param  {Boolean} [inMultibrowserMode=false] flag that is true if using multibrowser (multiremote)
 * @return {String}                             list of args
 */
function getArgs() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var inMultibrowserMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var strArgs = [];

    args.forEach(function (arg) {
        if (typeof arg === 'function' || inMultibrowserMode && typeof arg === 'string' && arg.indexOf('function (') === 0) {
            return strArgs.push(arg.toString());
        }

        strArgs.push((0, _stringify2.default)(arg));
    });

    return `[${strArgs.join(',')}]`;
}

/**
 * Returns the script to execute in the browser, in string format.
 * @param {Function|String} fn - function to execute in the browser
 * @param {Array.<String>} selectors - the selectors to resolve and pass to fn, each in its own array
 * @param {Array} args - the arguments to pass to fn (after resolved selectors)
 * @param {Function} callback
 * @return {String} The script to execute in the browser, as a string.
 */
var createSelectorScript = function createSelectorScript(fn, selectors, args) {
    var strArgs = [];
    var foundSel = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(selectors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var selector = _step.value;

            var val = (0, _findElementStrategy2.default)(selector);
            foundSel.push(val.using, val.value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    strArgs.push(getFn(fn, this.inMultibrowserMode));
    strArgs.push((0, _stringify2.default)(foundSel));
    strArgs.push(getArgs(args, this.inMultibrowserMode));

    return `return (${executeClientSide})(${strArgs.join(',')}, arguments[arguments.length - 1]);`.replace(/( {4}|\t)+/g, ' ');
};

/**
 * Helper that resolves selectors client side and returns the result in the given fn.
 * Every resolved selector is prepended to the function's arguments.
 * Each resolved selector yields a single array.
 *
 * @param {Function} fn - the function to execute client side that will receive the resolved selectors
 * @param {Array.<String>} sArr - a series of usage, value pairs from find-element-strategy
 * @param {Array} args - any other arguments to pass to fn
 * @return {*} the return value of fn
 * @example
 * var helper = require('./executeClientSideSelector');
 * // Execute in the browser
 * helper(fn, ['xpath', '//body', 'css', '[id="what"]'], [1, 2, 3]);
 * // Assuming fn is...
 * fn = function(xpathResult, cssResult, one, two, three) {
 *     console.log(xpathResult.length); // 1
 *     console.log(xpathResult[0]);     // <body.../>
 *     console.log(cssResult.length);   // 0
 *     console.log(one, two, three);    // 1 2 3
 * }
 */
var executeClientSide = function executeClientSide(fn, sArr, args) {
    var cb = arguments[arguments.length - 1];
    var i = 0;
    var sArgs = [];
    var use, value, xp, cs, tn, res, j, arg;

    if (typeof document.querySelectorAll === 'undefined') {
        document.querySelectorAll = function (selector) {
            var doc = document;
            var head = doc.documentElement.firstChild;
            var styleTag = doc.createElement('STYLE');

            head.appendChild(styleTag);
            doc.__qsaels = [];

            styleTag.styleSheet.cssText = selector + '{x:expression(document.__qsaels.push(this))}';
            window.scrollBy(0, 0);

            return doc.__qsaels;
        };
    }

    while ((use = sArr[i++]) && (value = sArr[i++])) {
        arg = [];
        xp = cs = tn = null;
        switch (use) {
            case 'partial link text':
                xp = '//a[contains(text(),"' + value + '")]';
                break;
            case 'link text':
                xp = '//a[text()="' + value + '"]';
                break;
            case 'xpath':
                xp = value;
                break;
            case 'id':
                cs = '#' + value;
                break;
            case 'name':
                cs = '[name="' + value + '"]';
                break;
            case 'tag name':
                tn = value;
                break;
            case 'css selector':
                cs = value;
                break;
            default:
                throw new Error('Could not evaluate selector: Invalid strategy ' + use);
        }

        if (xp) {
            res = document.evaluate(xp, document, null, 0, null);

            value = res.iterateNext();
            while (value) {
                arg.push(value);
                value = res.iterateNext();
            }
        } else if (tn || cs) {
            res = tn ? document.getElementsByTagName(tn) : document.querySelectorAll(cs);
            for (j = 0; j < res.length; ++j) {
                arg.push(res[j]);
            }
        }
        sArgs.push(arg);
    }

    var parameter = args && sArgs.concat(args) || sArgs;
    if (parameter.length === 0 || parameter.length === 1 && parameter[0].length === 0) {
        if (typeof cb === 'function') {
            return cb('NoSuchElement') && new Error('NoSuchElement');
        }
        throw new Error('NoSuchElement');
    }

    parameter.push(arguments[arguments.length - 1]);

    return fn.apply(window, parameter);
};

exports.default = createSelectorScript;