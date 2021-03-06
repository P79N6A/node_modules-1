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
export declare namespace searchconsole_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    /**
     * Google Search Console URL Testing Tools API
     *
     * Provides tools for running validation tests against single URLs
     *
     * @example
     * const {google} = require('googleapis');
     * const searchconsole = google.searchconsole('v1');
     *
     * @namespace searchconsole
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Searchconsole
     */
    class Searchconsole {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        urlTestingTools: Resource$Urltestingtools;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Blocked resource.
     */
    interface Schema$BlockedResource {
        /**
         * URL of the blocked resource.
         */
        url?: string;
    }
    /**
     * Describe image data.
     */
    interface Schema$Image {
        /**
         * Image data in format determined by the mime type. Currently, the format
         * will always be &quot;image/png&quot;, but this might change in the
         * future.
         */
        data?: string;
        /**
         * The mime-type of the image data.
         */
        mimeType?: string;
    }
    /**
     * Mobile-friendly issue.
     */
    interface Schema$MobileFriendlyIssue {
        /**
         * Rule violated.
         */
        rule?: string;
    }
    /**
     * Information about a resource with issue.
     */
    interface Schema$ResourceIssue {
        /**
         * Describes a blocked resource issue.
         */
        blockedResource?: Schema$BlockedResource;
    }
    /**
     * Mobile-friendly test request.
     */
    interface Schema$RunMobileFriendlyTestRequest {
        /**
         * Whether or not screenshot is requested. Default is false.
         */
        requestScreenshot?: boolean;
        /**
         * URL for inspection.
         */
        url?: string;
    }
    /**
     * Mobile-friendly test response, including mobile-friendly issues and
     * resource issues.
     */
    interface Schema$RunMobileFriendlyTestResponse {
        /**
         * Test verdict, whether the page is mobile friendly or not.
         */
        mobileFriendliness?: string;
        /**
         * List of mobile-usability issues.
         */
        mobileFriendlyIssues?: Schema$MobileFriendlyIssue[];
        /**
         * Information about embedded resources issues.
         */
        resourceIssues?: Schema$ResourceIssue[];
        /**
         * Screenshot of the requested URL.
         */
        screenshot?: Schema$Image;
        /**
         * Final state of the test, can be either complete or an error.
         */
        testStatus?: Schema$TestStatus;
    }
    /**
     * Final state of the test, including error details if necessary.
     */
    interface Schema$TestStatus {
        /**
         * Error details if applicable.
         */
        details?: string;
        /**
         * Status of the test.
         */
        status?: string;
    }
    class Resource$Urltestingtools {
        root: Searchconsole;
        mobileFriendlyTest: Resource$Urltestingtools$Mobilefriendlytest;
        constructor(root: Searchconsole);
        getRoot(): Searchconsole;
    }
    class Resource$Urltestingtools$Mobilefriendlytest {
        root: Searchconsole;
        constructor(root: Searchconsole);
        getRoot(): Searchconsole;
        /**
         * searchconsole.urlTestingTools.mobileFriendlyTest.run
         * @desc Runs Mobile-Friendly Test for a given URL.
         * @alias searchconsole.urlTestingTools.mobileFriendlyTest.run
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().RunMobileFriendlyTestRequest} params.resource Request body
         *     data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run(params?: Params$Resource$Urltestingtools$Mobilefriendlytest$Run, options?: MethodOptions): AxiosPromise<Schema$RunMobileFriendlyTestResponse>;
        run(params: Params$Resource$Urltestingtools$Mobilefriendlytest$Run, options: MethodOptions | BodyResponseCallback<Schema$RunMobileFriendlyTestResponse>, callback: BodyResponseCallback<Schema$RunMobileFriendlyTestResponse>): void;
        run(params: Params$Resource$Urltestingtools$Mobilefriendlytest$Run, callback: BodyResponseCallback<Schema$RunMobileFriendlyTestResponse>): void;
        run(callback: BodyResponseCallback<Schema$RunMobileFriendlyTestResponse>): void;
    }
    interface Params$Resource$Urltestingtools$Mobilefriendlytest$Run {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RunMobileFriendlyTestRequest;
    }
}
