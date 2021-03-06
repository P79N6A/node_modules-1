"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_common_1 = require("googleapis-common");
// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace
var pagespeedonline_v1;
(function (pagespeedonline_v1) {
    /**
     * PageSpeed Insights API
     *
     * Analyzes the performance of a web page and provides tailored suggestions to
     * make that page faster.
     *
     * @example
     * const {google} = require('googleapis');
     * const pagespeedonline = google.pagespeedonline('v1');
     *
     * @namespace pagespeedonline
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Pagespeedonline
     */
    class Pagespeedonline {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.pagespeedapi = new Resource$Pagespeedapi(this);
        }
        getRoot() {
            return this.root;
        }
    }
    pagespeedonline_v1.Pagespeedonline = Pagespeedonline;
    class Resource$Pagespeedapi {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        runpagespeed(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/pagespeedonline/v1/runPagespeed')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['url'],
                pathParams: [],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    pagespeedonline_v1.Resource$Pagespeedapi = Resource$Pagespeedapi;
})(pagespeedonline_v1 = exports.pagespeedonline_v1 || (exports.pagespeedonline_v1 = {}));
//# sourceMappingURL=v1.js.map