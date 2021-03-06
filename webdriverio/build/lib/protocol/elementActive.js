'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = elementActive;

var _utilities = require('../helpers/utilities');

function elementActive() {
    var _this = this;

    var requestOptions = {
        path: '/session/:sessionId/element/active',
        method: 'POST'
    };

    return this.requestHandler.create(requestOptions).catch(function (err) {
        /**
         * jsonwire command not supported try webdriver endpoint
         */
        if ((0, _utilities.isUnknownCommand)(err)) {
            requestOptions.method = 'GET';
            return _this.requestHandler.create(requestOptions);
        }

        throw err;
    });
} /**
   *
   * Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.
   *
   * @return {String} A WebElement JSON object for the active element.
   *
   * @see  https://w3c.github.io/webdriver/webdriver-spec.html#get-active-element
   * @type protocol
   *
   */

module.exports = exports['default'];