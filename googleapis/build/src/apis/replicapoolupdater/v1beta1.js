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
var replicapoolupdater_v1beta1;
(function (replicapoolupdater_v1beta1) {
    /**
     * Google Compute Engine Instance Group Updater API
     *
     * [Deprecated. Please use compute.instanceGroupManagers.update method.
     * replicapoolupdater API will be disabled after December 30th, 2016] Updates
     * groups of Compute Engine instances.
     *
     * @example
     * const {google} = require('googleapis');
     * const replicapoolupdater = google.replicapoolupdater('v1beta1');
     *
     * @namespace replicapoolupdater
     * @type {Function}
     * @version v1beta1
     * @variation v1beta1
     * @param {object=} options Options for Replicapoolupdater
     */
    class Replicapoolupdater {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.rollingUpdates = new Resource$Rollingupdates(this);
            this.zoneOperations = new Resource$Zoneoperations(this);
        }
        getRoot() {
            return this.root;
        }
    }
    replicapoolupdater_v1beta1.Replicapoolupdater = Replicapoolupdater;
    class Resource$Rollingupdates {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        cancel(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/cancel')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        insert(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        listInstanceUpdates(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/instanceUpdates')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        pause(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/pause')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        resume(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/resume')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        rollback(paramsOrCallback, optionsOrCallback, callback) {
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
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/rollingUpdates/{rollingUpdate}/rollback')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'rollingUpdate'],
                pathParams: ['project', 'rollingUpdate', 'zone'],
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
    replicapoolupdater_v1beta1.Resource$Rollingupdates = Resource$Rollingupdates;
    class Resource$Zoneoperations {
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/operations/{operation}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['project', 'zone', 'operation'],
                pathParams: ['operation', 'project', 'zone'],
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/replicapoolupdater/v1beta1/projects/{project}/zones/{zone}/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
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
    replicapoolupdater_v1beta1.Resource$Zoneoperations = Resource$Zoneoperations;
})(replicapoolupdater_v1beta1 = exports.replicapoolupdater_v1beta1 || (exports.replicapoolupdater_v1beta1 = {}));
//# sourceMappingURL=v1beta1.js.map