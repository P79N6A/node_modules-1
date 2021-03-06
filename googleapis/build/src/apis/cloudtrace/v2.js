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
var cloudtrace_v2;
(function (cloudtrace_v2) {
    /**
     * Stackdriver Trace API
     *
     * Sends application trace data to Stackdriver Trace for viewing. Trace data
     * is collected for all App Engine applications by default. Trace data from
     * other applications can be provided using this API.
     *
     * @example
     * const {google} = require('googleapis');
     * const cloudtrace = google.cloudtrace('v2');
     *
     * @namespace cloudtrace
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Cloudtrace
     */
    class Cloudtrace {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.projects = new Resource$Projects(this);
        }
        getRoot() {
            return this.root;
        }
    }
    cloudtrace_v2.Cloudtrace = Cloudtrace;
    class Resource$Projects {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.traces = new Resource$Projects$Traces(root);
        }
        getRoot() {
            return this.root;
        }
    }
    cloudtrace_v2.Resource$Projects = Resource$Projects;
    class Resource$Projects$Traces {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.spans = new Resource$Projects$Traces$Spans(root);
        }
        getRoot() {
            return this.root;
        }
        batchWrite(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/{+name}/traces:batchWrite')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    cloudtrace_v2.Resource$Projects$Traces = Resource$Projects$Traces;
    class Resource$Projects$Traces$Spans {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        createSpan(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    cloudtrace_v2.Resource$Projects$Traces$Spans = Resource$Projects$Traces$Spans;
})(cloudtrace_v2 = exports.cloudtrace_v2 || (exports.cloudtrace_v2 = {}));
//# sourceMappingURL=v2.js.map