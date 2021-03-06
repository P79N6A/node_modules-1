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
var script_v1;
(function (script_v1) {
    /**
     * Apps Script API
     *
     * An API for managing and executing Google Apps Script projects.
     *
     * @example
     * const {google} = require('googleapis');
     * const script = google.script('v1');
     *
     * @namespace script
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Script
     */
    class Script {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.processes = new Resource$Processes(this);
            this.projects = new Resource$Projects(this);
            this.scripts = new Resource$Scripts(this);
        }
        getRoot() {
            return this.root;
        }
    }
    script_v1.Script = Script;
    class Resource$Processes {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/processes').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [],
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
        listScriptProcesses(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/processes:listScriptProcesses')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [],
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
    script_v1.Resource$Processes = Resource$Processes;
    class Resource$Projects {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.deployments = new Resource$Projects$Deployments(root);
            this.versions = new Resource$Projects$Versions(root);
        }
        getRoot() {
            return this.root;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        getContent(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/content')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        getMetrics(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/metrics')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        updateContent(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/content')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
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
    script_v1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Deployments {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/projects/{scriptId}/deployments/{deploymentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['scriptId', 'deploymentId'],
                pathParams: ['deploymentId', 'scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/projects/{scriptId}/deployments/{deploymentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId', 'deploymentId'],
                pathParams: ['deploymentId', 'scriptId'],
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/projects/{scriptId}/deployments/{deploymentId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['scriptId', 'deploymentId'],
                pathParams: ['deploymentId', 'scriptId'],
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
    script_v1.Resource$Projects$Deployments = Resource$Projects$Deployments;
    class Resource$Projects$Versions {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/versions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/versions/{versionNumber}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId', 'versionNumber'],
                pathParams: ['scriptId', 'versionNumber'],
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/projects/{scriptId}/versions')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
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
    script_v1.Resource$Projects$Versions = Resource$Projects$Versions;
    class Resource$Scripts {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        run(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/scripts/{scriptId}:run')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['scriptId'],
                pathParams: ['scriptId'],
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
    script_v1.Resource$Scripts = Resource$Scripts;
})(script_v1 = exports.script_v1 || (exports.script_v1 = {}));
//# sourceMappingURL=v1.js.map