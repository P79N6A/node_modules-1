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
import { AxiosPromise } from 'axios';
import { Compute, JWT, OAuth2Client, UserRefreshClient } from 'google-auth-library';
import { BodyResponseCallback, GlobalOptions, GoogleConfigurable, MethodOptions } from 'googleapis-common';
export declare namespace kgsearch_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    /**
     * Knowledge Graph Search API
     *
     * Searches the Google Knowledge Graph for entities.
     *
     * @example
     * const {google} = require('googleapis');
     * const kgsearch = google.kgsearch('v1');
     *
     * @namespace kgsearch
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Kgsearch
     */
    class Kgsearch {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        entities: Resource$Entities;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Response message includes the context and a list of matching results which
     * contain the detail of associated entities.
     */
    interface Schema$SearchResponse {
        /**
         * The local context applicable for the response. See more details at
         * http://www.w3.org/TR/json-ld/#context-definitions.
         */
        '@context'?: any;
        /**
         * The schema type of top-level JSON-LD object, e.g. ItemList.
         */
        '@type'?: any;
        /**
         * The item list of search results.
         */
        itemListElement?: any[];
    }
    class Resource$Entities {
        root: Kgsearch;
        constructor(root: Kgsearch);
        getRoot(): Kgsearch;
        /**
         * kgsearch.entities.search
         * @desc Searches Knowledge Graph for entities that match the constraints. A
         * list of matched entities will be returned in response, which will be in
         * JSON-LD format and compatible with http://schema.org
         * @alias kgsearch.entities.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids The list of entity id to be used for search
         *     instead of query string. To specify multiple ids in the HTTP request,
         *     repeat the parameter in the URL as in ...?ids=A&ids=B
         * @param {boolean=} params.indent Enables indenting of json results.
         * @param {string=} params.languages The list of language codes (defined in
         *     ISO 693) to run the query with, e.g. 'en'.
         * @param {integer=} params.limit Limits the number of entities to be
         *     returned.
         * @param {boolean=} params.prefix Enables prefix match against names and
         *     aliases of entities
         * @param {string=} params.query The literal query string for search.
         * @param {string=} params.types Restricts returned entities with these
         *     types, e.g. Person (as defined in http://schema.org/Person). If
         *     multiple types are specified, returned entities will contain one or
         *     more of these types.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Entities$Search, options?: MethodOptions): AxiosPromise<Schema$SearchResponse>;
        search(params: Params$Resource$Entities$Search, options: MethodOptions | BodyResponseCallback<Schema$SearchResponse>, callback: BodyResponseCallback<Schema$SearchResponse>): void;
        search(params: Params$Resource$Entities$Search, callback: BodyResponseCallback<Schema$SearchResponse>): void;
        search(callback: BodyResponseCallback<Schema$SearchResponse>): void;
    }
    interface Params$Resource$Entities$Search {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The list of entity id to be used for search instead of query string. To
         * specify multiple ids in the HTTP request, repeat the parameter in the URL
         * as in ...?ids=A&ids=B
         */
        ids?: string;
        /**
         * Enables indenting of json results.
         */
        indent?: boolean;
        /**
         * The list of language codes (defined in ISO 693) to run the query with,
         * e.g. 'en'.
         */
        languages?: string;
        /**
         * Limits the number of entities to be returned.
         */
        limit?: number;
        /**
         * Enables prefix match against names and aliases of entities
         */
        prefix?: boolean;
        /**
         * The literal query string for search.
         */
        query?: string;
        /**
         * Restricts returned entities with these types, e.g. Person (as defined in
         * http://schema.org/Person). If multiple types are specified, returned
         * entities will contain one or more of these types.
         */
        types?: string;
    }
}
