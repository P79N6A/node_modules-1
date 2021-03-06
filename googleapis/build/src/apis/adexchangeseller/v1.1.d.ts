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
export declare namespace adexchangeseller_v1_1 {
    interface Options extends GlobalOptions {
        version: 'v1_1';
    }
    /**
     * Ad Exchange Seller API
     *
     * Accesses the inventory of Ad Exchange seller users and generates reports.
     *
     * @example
     * const {google} = require('googleapis');
     * const adexchangeseller = google.adexchangeseller('v1.1');
     *
     * @namespace adexchangeseller
     * @type {Function}
     * @version v1.1
     * @variation v1.1
     * @param {object=} options Options for Adexchangeseller
     */
    class Adexchangeseller {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        accounts: Resource$Accounts;
        adclients: Resource$Adclients;
        adunits: Resource$Adunits;
        alerts: Resource$Alerts;
        customchannels: Resource$Customchannels;
        metadata: Resource$Metadata;
        preferreddeals: Resource$Preferreddeals;
        reports: Resource$Reports;
        urlchannels: Resource$Urlchannels;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    interface Schema$Account {
        /**
         * Unique identifier of this account.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#account.
         */
        kind?: string;
        /**
         * Name of this account.
         */
        name?: string;
    }
    interface Schema$AdClient {
        /**
         * Whether this ad client is opted in to ARC.
         */
        arcOptIn?: boolean;
        /**
         * Unique identifier of this ad client.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#adClient.
         */
        kind?: string;
        /**
         * This ad client&#39;s product code, which corresponds to the PRODUCT_CODE
         * report dimension.
         */
        productCode?: string;
        /**
         * Whether this ad client supports being reported on.
         */
        supportsReporting?: boolean;
    }
    interface Schema$AdClients {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The ad clients returned in this list response.
         */
        items?: Schema$AdClient[];
        /**
         * Kind of list this is, in this case adexchangeseller#adClients.
         */
        kind?: string;
        /**
         * Continuation token used to page through ad clients. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$AdUnit {
        /**
         * Identity code of this ad unit, not necessarily unique across ad clients.
         */
        code?: string;
        /**
         * Unique identifier of this ad unit. This should be considered an opaque
         * identifier; it is not safe to rely on it being in any particular format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#adUnit.
         */
        kind?: string;
        /**
         * Name of this ad unit.
         */
        name?: string;
        /**
         * Status of this ad unit. Possible values are: NEW: Indicates that the ad
         * unit was created within the last seven days and does not yet have any
         * activity associated with it.  ACTIVE: Indicates that there has been
         * activity on this ad unit in the last seven days.  INACTIVE: Indicates
         * that there has been no activity on this ad unit in the last seven days.
         */
        status?: string;
    }
    interface Schema$AdUnits {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The ad units returned in this list response.
         */
        items?: Schema$AdUnit[];
        /**
         * Kind of list this is, in this case adexchangeseller#adUnits.
         */
        kind?: string;
        /**
         * Continuation token used to page through ad units. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$Alert {
        /**
         * Unique identifier of this alert. This should be considered an opaque
         * identifier; it is not safe to rely on it being in any particular format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#alert.
         */
        kind?: string;
        /**
         * The localized alert message.
         */
        message?: string;
        /**
         * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
         */
        severity?: string;
        /**
         * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3,
         * ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY,
         * GRAYLISTED_PUBLISHER, API_HOLD.
         */
        type?: string;
    }
    interface Schema$Alerts {
        /**
         * The alerts returned in this list response.
         */
        items?: Schema$Alert[];
        /**
         * Kind of list this is, in this case adexchangeseller#alerts.
         */
        kind?: string;
    }
    interface Schema$CustomChannel {
        /**
         * Code of this custom channel, not necessarily unique across ad clients.
         */
        code?: string;
        /**
         * Unique identifier of this custom channel. This should be considered an
         * opaque identifier; it is not safe to rely on it being in any particular
         * format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#customChannel.
         */
        kind?: string;
        /**
         * Name of this custom channel.
         */
        name?: string;
        /**
         * The targeting information of this custom channel, if activated.
         */
        targetingInfo?: any;
    }
    interface Schema$CustomChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The custom channels returned in this list response.
         */
        items?: Schema$CustomChannel[];
        /**
         * Kind of list this is, in this case adexchangeseller#customChannels.
         */
        kind?: string;
        /**
         * Continuation token used to page through custom channels. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    interface Schema$Metadata {
        items?: Schema$ReportingMetadataEntry[];
        /**
         * Kind of list this is, in this case adexchangeseller#metadata.
         */
        kind?: string;
    }
    interface Schema$PreferredDeal {
        /**
         * The name of the advertiser this deal is for.
         */
        advertiserName?: string;
        /**
         * The name of the buyer network this deal is for.
         */
        buyerNetworkName?: string;
        /**
         * The currency code that applies to the fixed_cpm value. If not set then
         * assumed to be USD.
         */
        currencyCode?: string;
        /**
         * Time when this deal stops being active in seconds since the epoch (GMT).
         * If not set then this deal is valid until manually disabled by the
         * publisher.
         */
        endTime?: string;
        /**
         * The fixed price for this preferred deal. In cpm micros of currency
         * according to currencyCode. If set, then this preferred deal is eligible
         * for the fixed price tier of buying (highest priority, pay exactly the
         * configured fixed price).
         */
        fixedCpm?: string;
        /**
         * Unique identifier of this preferred deal.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#preferredDeal.
         */
        kind?: string;
        /**
         * Time when this deal becomes active in seconds since the epoch (GMT). If
         * not set then this deal is active immediately upon creation.
         */
        startTime?: string;
    }
    interface Schema$PreferredDeals {
        /**
         * The preferred deals returned in this list response.
         */
        items?: Schema$PreferredDeal[];
        /**
         * Kind of list this is, in this case adexchangeseller#preferredDeals.
         */
        kind?: string;
    }
    interface Schema$Report {
        /**
         * The averages of the report. This is the same length as any other row in
         * the report; cells corresponding to dimension columns are empty.
         */
        averages?: string[];
        /**
         * The header information of the columns requested in the report. This is a
         * list of headers; one for each dimension in the request, followed by one
         * for each metric in the request.
         */
        headers?: any[];
        /**
         * Kind this is, in this case adexchangeseller#report.
         */
        kind?: string;
        /**
         * The output rows of the report. Each row is a list of cells; one for each
         * dimension in the request, followed by one for each metric in the request.
         * The dimension cells contain strings, and the metric cells contain
         * numbers.
         */
        rows?: string[][];
        /**
         * The total number of rows matched by the report request. Fewer rows may be
         * returned in the response due to being limited by the row count requested
         * or the report row limit.
         */
        totalMatchedRows?: string;
        /**
         * The totals of the report. This is the same length as any other row in the
         * report; cells corresponding to dimension columns are empty.
         */
        totals?: string[];
        /**
         * Any warnings associated with generation of the report.
         */
        warnings?: string[];
    }
    interface Schema$ReportingMetadataEntry {
        /**
         * For metrics this is a list of dimension IDs which the metric is
         * compatible with, for dimensions it is a list of compatibility groups the
         * dimension belongs to.
         */
        compatibleDimensions?: string[];
        /**
         * The names of the metrics the dimension or metric this reporting metadata
         * entry describes is compatible with.
         */
        compatibleMetrics?: string[];
        /**
         * Unique identifier of this reporting metadata entry, corresponding to the
         * name of the appropriate dimension or metric.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case
         * adexchangeseller#reportingMetadataEntry.
         */
        kind?: string;
        /**
         * The names of the dimensions which the dimension or metric this reporting
         * metadata entry describes requires to also be present in order for the
         * report to be valid. Omitting these will not cause an error or warning,
         * but may result in data which cannot be correctly interpreted.
         */
        requiredDimensions?: string[];
        /**
         * The names of the metrics which the dimension or metric this reporting
         * metadata entry describes requires to also be present in order for the
         * report to be valid. Omitting these will not cause an error or warning,
         * but may result in data which cannot be correctly interpreted.
         */
        requiredMetrics?: string[];
        /**
         * The codes of the projects supported by the dimension or metric this
         * reporting metadata entry describes.
         */
        supportedProducts?: string[];
    }
    interface Schema$SavedReport {
        /**
         * Unique identifier of this saved report.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#savedReport.
         */
        kind?: string;
        /**
         * This saved report&#39;s name.
         */
        name?: string;
    }
    interface Schema$SavedReports {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The saved reports returned in this list response.
         */
        items?: Schema$SavedReport[];
        /**
         * Kind of list this is, in this case adexchangeseller#savedReports.
         */
        kind?: string;
        /**
         * Continuation token used to page through saved reports. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    interface Schema$UrlChannel {
        /**
         * Unique identifier of this URL channel. This should be considered an
         * opaque identifier; it is not safe to rely on it being in any particular
         * format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#urlChannel.
         */
        kind?: string;
        /**
         * URL Pattern of this URL channel. Does not include &quot;http://&quot; or
         * &quot;https://&quot;. Example: www.example.com/home
         */
        urlPattern?: string;
    }
    interface Schema$UrlChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The URL channels returned in this list response.
         */
        items?: Schema$UrlChannel[];
        /**
         * Kind of list this is, in this case adexchangeseller#urlChannels.
         */
        kind?: string;
        /**
         * Continuation token used to page through URL channels. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    class Resource$Accounts {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.accounts.get
         * @desc Get information about the selected Ad Exchange account.
         * @alias adexchangeseller.accounts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to get information about. Tip:
         *     'myaccount' is a valid ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): AxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
    }
    interface Params$Resource$Accounts$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to get information about. Tip: 'myaccount' is a valid ID.
         */
        accountId?: string;
    }
    class Resource$Adclients {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.adclients.list
         * @desc List all ad clients in this Ad Exchange account.
         * @alias adexchangeseller.adclients.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of ad clients to
         *     include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through ad clients. To retrieve the next page, set this parameter to
         *     the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adclients$List, options?: MethodOptions): AxiosPromise<Schema$AdClients>;
        list(params: Params$Resource$Adclients$List, options: MethodOptions | BodyResponseCallback<Schema$AdClients>, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(params: Params$Resource$Adclients$List, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(callback: BodyResponseCallback<Schema$AdClients>): void;
    }
    interface Params$Resource$Adclients$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of ad clients to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad clients. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Adunits {
        root: Adexchangeseller;
        customchannels: Resource$Adunits$Customchannels;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.adunits.get
         * @desc Gets the specified ad unit in the specified ad client.
         * @alias adexchangeseller.adunits.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to get the ad unit.
         * @param {string} params.adUnitId Ad unit to retrieve.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Adunits$Get, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
        get(params: Params$Resource$Adunits$Get, options: MethodOptions | BodyResponseCallback<Schema$AdUnit>, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(params: Params$Resource$Adunits$Get, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(callback: BodyResponseCallback<Schema$AdUnit>): void;
        /**
         * adexchangeseller.adunits.list
         * @desc List all ad units in the specified ad client for this Ad Exchange
         * account.
         * @alias adexchangeseller.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad
         *     units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to
         *     include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through ad units. To retrieve the next page, set this parameter to
         *     the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Adunits$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to get the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit to retrieve.
         */
        adUnitId?: string;
    }
    interface Params$Resource$Adunits$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list ad units.
         */
        adClientId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Adunits$Customchannels {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.adunits.customchannels.list
         * @desc List all custom channels which the specified ad unit belongs to.
         * @alias adexchangeseller.adunits.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the ad unit.
         * @param {string} params.adUnitId Ad unit for which to list custom
         *     channels.
         * @param {integer=} params.maxResults The maximum number of custom channels
         *     to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through custom channels. To retrieve the next page, set this
         *     parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adunits$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Adunits$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Adunits$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Adunits$Customchannels$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit for which to list custom channels.
         */
        adUnitId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Alerts {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.alerts.list
         * @desc List the alerts for this Ad Exchange account.
         * @alias adexchangeseller.alerts.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.locale The locale to use for translating alert
         *     messages. The account locale will be used if this is not supplied.
         *     The AdSense default (English) will be used if the supplied locale is
         *     invalid or unsupported.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Alerts$List, options?: MethodOptions): AxiosPromise<Schema$Alerts>;
        list(params: Params$Resource$Alerts$List, options: MethodOptions | BodyResponseCallback<Schema$Alerts>, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(params: Params$Resource$Alerts$List, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(callback: BodyResponseCallback<Schema$Alerts>): void;
    }
    interface Params$Resource$Alerts$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The locale to use for translating alert messages. The account locale will
         * be used if this is not supplied. The AdSense default (English) will be
         * used if the supplied locale is invalid or unsupported.
         */
        locale?: string;
    }
    class Resource$Customchannels {
        root: Adexchangeseller;
        adunits: Resource$Customchannels$Adunits;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.customchannels.get
         * @desc Get the specified custom channel from the specified ad client.
         * @alias adexchangeseller.customchannels.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the custom
         *     channel.
         * @param {string} params.customChannelId Custom channel to retrieve.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Customchannels$Get, options?: MethodOptions): AxiosPromise<Schema$CustomChannel>;
        get(params: Params$Resource$Customchannels$Get, options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(params: Params$Resource$Customchannels$Get, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
        /**
         * adexchangeseller.customchannels.list
         * @desc List all custom channels in the specified ad client for this Ad
         * Exchange account.
         * @alias adexchangeseller.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list custom
         *     channels.
         * @param {integer=} params.maxResults The maximum number of custom channels
         *     to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through custom channels. To retrieve the next page, set this
         *     parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Customchannels$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel to retrieve.
         */
        customChannelId?: string;
    }
    interface Params$Resource$Customchannels$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list custom channels.
         */
        adClientId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Customchannels$Adunits {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.customchannels.adunits.list
         * @desc List all ad units in the specified custom channel.
         * @alias adexchangeseller.customchannels.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the custom
         *     channel.
         * @param {string} params.customChannelId Custom channel for which to list
         *     ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad
         *     units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to
         *     include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through ad units. To retrieve the next page, set this parameter to
         *     the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Customchannels$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Customchannels$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Customchannels$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Customchannels$Adunits$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel for which to list ad units.
         */
        customChannelId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Metadata {
        root: Adexchangeseller;
        dimensions: Resource$Metadata$Dimensions;
        metrics: Resource$Metadata$Metrics;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
    }
    class Resource$Metadata$Dimensions {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.metadata.dimensions.list
         * @desc List the metadata for the dimensions available to this AdExchange
         * account.
         * @alias adexchangeseller.metadata.dimensions.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Metadata$Dimensions$List, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
        list(params: Params$Resource$Metadata$Dimensions$List, options: MethodOptions | BodyResponseCallback<Schema$Metadata>, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(params: Params$Resource$Metadata$Dimensions$List, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(callback: BodyResponseCallback<Schema$Metadata>): void;
    }
    interface Params$Resource$Metadata$Dimensions$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Metadata$Metrics {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.metadata.metrics.list
         * @desc List the metadata for the metrics available to this AdExchange
         * account.
         * @alias adexchangeseller.metadata.metrics.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Metadata$Metrics$List, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
        list(params: Params$Resource$Metadata$Metrics$List, options: MethodOptions | BodyResponseCallback<Schema$Metadata>, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(params: Params$Resource$Metadata$Metrics$List, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(callback: BodyResponseCallback<Schema$Metadata>): void;
    }
    interface Params$Resource$Metadata$Metrics$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Preferreddeals {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.preferreddeals.get
         * @desc Get information about the selected Ad Exchange Preferred Deal.
         * @alias adexchangeseller.preferreddeals.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.dealId Preferred deal to get information about.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Preferreddeals$Get, options?: MethodOptions): AxiosPromise<Schema$PreferredDeal>;
        get(params: Params$Resource$Preferreddeals$Get, options: MethodOptions | BodyResponseCallback<Schema$PreferredDeal>, callback: BodyResponseCallback<Schema$PreferredDeal>): void;
        get(params: Params$Resource$Preferreddeals$Get, callback: BodyResponseCallback<Schema$PreferredDeal>): void;
        get(callback: BodyResponseCallback<Schema$PreferredDeal>): void;
        /**
         * adexchangeseller.preferreddeals.list
         * @desc List the preferred deals for this Ad Exchange account.
         * @alias adexchangeseller.preferreddeals.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Preferreddeals$List, options?: MethodOptions): AxiosPromise<Schema$PreferredDeals>;
        list(params: Params$Resource$Preferreddeals$List, options: MethodOptions | BodyResponseCallback<Schema$PreferredDeals>, callback: BodyResponseCallback<Schema$PreferredDeals>): void;
        list(params: Params$Resource$Preferreddeals$List, callback: BodyResponseCallback<Schema$PreferredDeals>): void;
        list(callback: BodyResponseCallback<Schema$PreferredDeals>): void;
    }
    interface Params$Resource$Preferreddeals$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Preferred deal to get information about.
         */
        dealId?: string;
    }
    interface Params$Resource$Preferreddeals$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Reports {
        root: Adexchangeseller;
        saved: Resource$Reports$Saved;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.reports.generate
         * @desc Generate an Ad Exchange report based on the report request sent in
         * the query parameters. Returns the result as JSON; to retrieve output in
         * CSV format specify "alt=csv" as a query parameter.
         * @alias adexchangeseller.reports.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dimension Dimensions to base the report on.
         * @param {string} params.endDate End of the date range to report on in
         *     "YYYY-MM-DD" format, inclusive.
         * @param {string=} params.filter Filters to be run on the report.
         * @param {string=} params.locale Optional locale to use for translating
         *     report output to a local language. Defaults to "en_US" if not
         *     specified.
         * @param {integer=} params.maxResults The maximum number of rows of report
         *     data to return.
         * @param {string=} params.metric Numeric columns to include in the report.
         * @param {string=} params.sort The name of a dimension or metric to sort
         *     the resulting report on, optionally prefixed with "+" to sort
         *     ascending or "-" to sort descending. If no prefix is specified, the
         *     column is sorted ascending.
         * @param {string} params.startDate Start of the date range to report on in
         *     "YYYY-MM-DD" format, inclusive.
         * @param {integer=} params.startIndex Index of the first row of report data
         *     to return.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Reports$Generate, options?: MethodOptions): AxiosPromise<Schema$Report>;
        generate(params: Params$Resource$Reports$Generate, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        generate(params: Params$Resource$Reports$Generate, callback: BodyResponseCallback<Schema$Report>): void;
        generate(callback: BodyResponseCallback<Schema$Report>): void;
    }
    interface Params$Resource$Reports$Generate {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Dimensions to base the report on.
         */
        dimension?: string;
        /**
         * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        endDate?: string;
        /**
         * Filters to be run on the report.
         */
        filter?: string;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * Numeric columns to include in the report.
         */
        metric?: string;
        /**
         * The name of a dimension or metric to sort the resulting report on,
         * optionally prefixed with "+" to sort ascending or "-" to sort descending.
         * If no prefix is specified, the column is sorted ascending.
         */
        sort?: string;
        /**
         * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        startDate?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
    }
    class Resource$Reports$Saved {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.reports.saved.generate
         * @desc Generate an Ad Exchange report based on the saved report ID sent in
         * the query parameters.
         * @alias adexchangeseller.reports.saved.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.locale Optional locale to use for translating
         *     report output to a local language. Defaults to "en_US" if not
         *     specified.
         * @param {integer=} params.maxResults The maximum number of rows of report
         *     data to return.
         * @param {string} params.savedReportId The saved report to retrieve.
         * @param {integer=} params.startIndex Index of the first row of report data
         *     to return.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Reports$Saved$Generate, options?: MethodOptions): AxiosPromise<Schema$Report>;
        generate(params: Params$Resource$Reports$Saved$Generate, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        generate(params: Params$Resource$Reports$Saved$Generate, callback: BodyResponseCallback<Schema$Report>): void;
        generate(callback: BodyResponseCallback<Schema$Report>): void;
        /**
         * adexchangeseller.reports.saved.list
         * @desc List all saved reports in this Ad Exchange account.
         * @alias adexchangeseller.reports.saved.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of saved reports
         *     to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through saved reports. To retrieve the next page, set this parameter
         *     to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Reports$Saved$List, options?: MethodOptions): AxiosPromise<Schema$SavedReports>;
        list(params: Params$Resource$Reports$Saved$List, options: MethodOptions | BodyResponseCallback<Schema$SavedReports>, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(params: Params$Resource$Reports$Saved$List, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    }
    interface Params$Resource$Reports$Saved$Generate {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * The saved report to retrieve.
         */
        savedReportId?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
    }
    interface Params$Resource$Reports$Saved$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of saved reports to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through saved reports. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Urlchannels {
        root: Adexchangeseller;
        constructor(root: Adexchangeseller);
        getRoot(): Adexchangeseller;
        /**
         * adexchangeseller.urlchannels.list
         * @desc List all URL channels in the specified ad client for this Ad
         * Exchange account.
         * @alias adexchangeseller.urlchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list URL
         *     channels.
         * @param {integer=} params.maxResults The maximum number of URL channels to
         *     include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page
         *     through URL channels. To retrieve the next page, set this parameter
         *     to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Urlchannels$List, options?: MethodOptions): AxiosPromise<Schema$UrlChannels>;
        list(params: Params$Resource$Urlchannels$List, options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(params: Params$Resource$Urlchannels$List, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    }
    interface Params$Resource$Urlchannels$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list URL channels.
         */
        adClientId?: string;
        /**
         * The maximum number of URL channels to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through URL channels. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
}
