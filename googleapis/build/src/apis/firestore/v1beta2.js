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
var firestore_v1beta2;
(function (firestore_v1beta2) {
    /**
     * Cloud Firestore API
     *
     *
     *
     * @example
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta2');
     *
     * @namespace firestore
     * @type {Function}
     * @version v1beta2
     * @variation v1beta2
     * @param {object=} options Options for Firestore
     */
    class Firestore {
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
    firestore_v1beta2.Firestore = Firestore;
    class Resource$Projects {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.databases = new Resource$Projects$Databases(root);
        }
        getRoot() {
            return this.root;
        }
    }
    firestore_v1beta2.Resource$Projects = Resource$Projects;
    class Resource$Projects$Databases {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.collectionGroups =
                new Resource$Projects$Databases$Collectiongroups(root);
        }
        getRoot() {
            return this.root;
        }
    }
    firestore_v1beta2.Resource$Projects$Databases = Resource$Projects$Databases;
    class Resource$Projects$Databases$Collectiongroups {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.fields =
                new Resource$Projects$Databases$Collectiongroups$Fields(root);
        }
        getRoot() {
            return this.root;
        }
    }
    firestore_v1beta2.Resource$Projects$Databases$Collectiongroups = Resource$Projects$Databases$Collectiongroups;
    class Resource$Projects$Databases$Collectiongroups$Fields {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
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
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/{+parent}/fields')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
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
    firestore_v1beta2.Resource$Projects$Databases$Collectiongroups$Fields = Resource$Projects$Databases$Collectiongroups$Fields;
})(firestore_v1beta2 = exports.firestore_v1beta2 || (exports.firestore_v1beta2 = {}));
//# sourceMappingURL=v1beta2.js.map