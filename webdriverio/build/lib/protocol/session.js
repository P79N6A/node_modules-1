'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = session;

var _ErrorHandler = require('../utils/ErrorHandler');

function session() {
    var _this = this;

    var doWhat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
    var sessionId = arguments[1];

    /*!
     * parameter check
     */
    if (typeof sessionId !== 'string') {
        /*!
         * if session was already closed return `undefined`
         * ToDo or maybe throw an error
         */
        if (!this.requestHandler.sessionID) {
            return null;
        }

        sessionId = this.requestHandler.sessionID;
    }

    doWhat = doWhat.toUpperCase();

    /*!
     * get session
     */
    if (doWhat === 'GET') {
        return this.requestHandler.create({
            path: `/session/${sessionId}`,
            method: 'GET',
            requiresSession: false
        });
    }

    var lastCommand = this.commandList.slice(-3, -2);
    var isInternalCall = lastCommand.length && lastCommand[0].name === 'reload';

    /*!
     * delete session
     */
    if (doWhat === 'DELETE') {
        /**
         * make sure we don't run this command within wdio test run
         */
        if (this.options.isWDIO && !isInternalCall) {
            throw new _ErrorHandler.CommandError('Don\'t end the session manually. This will be done automatically.');
        }

        this.emit('end', {
            sessionId: this.requestHandler.sessionID
        });

        return this.requestHandler.create({
            path: '/session/' + sessionId,
            method: 'DELETE',
            requiresSession: false
        }).then(function (res) {
            /*!
             * delete sessionID in RequestHandler
             */
            _this.requestHandler.sessionID = null;
            return res;
        });
    }

    throw new _ErrorHandler.ProtocolError('The session command need either a \'delete\' or \'get\'attribute to know what to do. example: client.session(\'get\').then(callback) to get the capabilities of the session.');
} /**
   *
   * Protocol bindings for all session operations. In case you are looking for
   * `[POST] session` to initialise a session on the server, take a look at `/lib/protocol/init`.
   *
   * <example>
      :session.js
      it('should get/delete current session using the protocol command', function () {
          // retrieve the resolved capabilities of the specified session
          var caps = browser.session();
          console.log(caps); // outputs: { browserName: "...", ... }
  
          // you can also just call (see http://webdriver.io/guide/testrunner/browserobject.html)
          console.log(browser.desiredCapabilities);
  
          // delete the session (equivalent to `end` action command)
          // Note: the wdio testrunner doesn't allow to call this command manually. It will close the session
          // when the test has ended.
          browser.session('delete'); // throws an error
      });
   * </example>
   *
   * @param {String=} doWhat     session operation (`get` (default), `delete`)
   * @param {String}  sessionId  session id to operate on
   *
   * @see  https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-session
   * @type protocol
   *
   */

module.exports = exports['default'];