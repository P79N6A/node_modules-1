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
export declare namespace partners_v2 {
    interface Options extends GlobalOptions {
        version: 'v2';
    }
    /**
     * Google Partners API
     *
     * Searches certified companies and creates contact leads with them, and also
     * audits the usage of clients.
     *
     * @example
     * const {google} = require('googleapis');
     * const partners = google.partners('v2');
     *
     * @namespace partners
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Partners
     */
    class Partners {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        analytics: Resource$Analytics;
        clientMessages: Resource$Clientmessages;
        companies: Resource$Companies;
        leads: Resource$Leads;
        offers: Resource$Offers;
        userEvents: Resource$Userevents;
        users: Resource$Users;
        userStates: Resource$Userstates;
        v2: Resource$V2;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Information about a particular AdWords Manager Account. Read more at
     * https://support.google.com/adwords/answer/6139186
     */
    interface Schema$AdWordsManagerAccountInfo {
        /**
         * Name of the customer this account represents.
         */
        customerName?: string;
        /**
         * The AdWords Manager Account id.
         */
        id?: string;
    }
    /**
     * Analytics data for a `Company` within a single day.
     */
    interface Schema$Analytics {
        /**
         * Instances of users contacting the `Company` on the specified date.
         */
        contacts?: Schema$AnalyticsDataPoint;
        /**
         * Date on which these events occurred.
         */
        eventDate?: Schema$Date;
        /**
         * Instances of users viewing the `Company` profile on the specified date.
         */
        profileViews?: Schema$AnalyticsDataPoint;
        /**
         * Instances of users seeing the `Company` in Google Partners Search results
         * on the specified date.
         */
        searchViews?: Schema$AnalyticsDataPoint;
    }
    /**
     * Details of the analytics events for a `Company` within a single day.
     */
    interface Schema$AnalyticsDataPoint {
        /**
         * Number of times the type of event occurred. Meaning depends on context
         * (e.g. profile views, contacts, etc.).
         */
        eventCount?: number;
        /**
         * Location information of where these events occurred.
         */
        eventLocations?: Schema$LatLng[];
    }
    /**
     * Analytics aggregated data for a `Company` for a given date range.
     */
    interface Schema$AnalyticsSummary {
        /**
         * Aggregated number of times users contacted the `Company` for given date
         * range.
         */
        contactsCount?: number;
        /**
         * Aggregated number of profile views for the `Company` for given date
         * range.
         */
        profileViewsCount?: number;
        /**
         * Aggregated number of times users saw the `Company` in Google Partners
         * Search results for given date range.
         */
        searchViewsCount?: number;
    }
    /**
     * Available Offers to be distributed.
     */
    interface Schema$AvailableOffer {
        /**
         * The number of codes for this offer that are available for distribution.
         */
        available?: number;
        /**
         * Offer info by country.
         */
        countryOfferInfos?: Schema$CountryOfferInfo[];
        /**
         * Description of the offer.
         */
        description?: string;
        /**
         * ID of this offer.
         */
        id?: string;
        /**
         * The maximum age of an account [in days] to be eligible.
         */
        maxAccountAge?: number;
        /**
         * Name of the offer.
         */
        name?: string;
        /**
         * Level of this offer.
         */
        offerLevel?: string;
        /**
         * Type of offer.
         */
        offerType?: string;
        /**
         * Customers who qualify for this offer.
         */
        qualifiedCustomer?: Schema$OfferCustomer[];
        /**
         * Whether or not the list of qualified customers is definitely complete.
         */
        qualifiedCustomersComplete?: boolean;
        /**
         * Should special text be shown on the offers page.
         */
        showSpecialOfferCopy?: boolean;
        /**
         * Terms of the offer.
         */
        terms?: string;
    }
    /**
     * A user&#39;s information on a specific certification.
     */
    interface Schema$Certification {
        /**
         * Whether this certification has been achieved.
         */
        achieved?: boolean;
        /**
         * The type of certification, the area of expertise.
         */
        certificationType?: string;
        /**
         * Date this certification is due to expire.
         */
        expiration?: string;
        /**
         * The date the user last achieved certification.
         */
        lastAchieved?: string;
        /**
         * Whether this certification is in the state of warning.
         */
        warning?: boolean;
    }
    /**
     * Status for a Google Partners certification exam.
     */
    interface Schema$CertificationExamStatus {
        /**
         * The number of people who have passed the certification exam.
         */
        numberUsersPass?: number;
        /**
         * The type of certification exam.
         */
        type?: string;
    }
    /**
     * Google Partners certification status.
     */
    interface Schema$CertificationStatus {
        /**
         * List of certification exam statuses.
         */
        examStatuses?: Schema$CertificationExamStatus[];
        /**
         * Whether certification is passing.
         */
        isCertified?: boolean;
        /**
         * The type of the certification.
         */
        type?: string;
        /**
         * Number of people who are certified,
         */
        userCount?: number;
    }
    /**
     * A company resource in the Google Partners API. Once certified, it qualifies
     * for being searched by advertisers.
     */
    interface Schema$Company {
        /**
         * URL of the company&#39;s additional websites used to verify the dynamic
         * badges. These are stored as full URLs as entered by the user, but only
         * the TLD will be used for the actual verification.
         */
        additionalWebsites?: string[];
        /**
         * Email domains that allow users with a matching email address to get
         * auto-approved for associating with this company.
         */
        autoApprovalEmailDomains?: string[];
        /**
         * Whether the company&#39;s badge authority is in AWN
         */
        badgeAuthorityInAwn?: boolean;
        /**
         * Partner badge tier
         */
        badgeTier?: string;
        /**
         * The list of Google Partners certification statuses for the company.
         */
        certificationStatuses?: Schema$CertificationStatus[];
        /**
         * Company type labels listed on the company&#39;s profile.
         */
        companyTypes?: string[];
        /**
         * The minimum monthly budget that the company accepts for partner business,
         * converted to the requested currency code.
         */
        convertedMinMonthlyBudget?: Schema$Money;
        /**
         * The ID of the company.
         */
        id?: string;
        /**
         * Industries the company can help with.
         */
        industries?: string[];
        /**
         * The list of localized info for the company.
         */
        localizedInfos?: Schema$LocalizedCompanyInfo[];
        /**
         * The list of all company locations. If set, must include the
         * primary_location in the list.
         */
        locations?: Schema$Location[];
        /**
         * The name of the company.
         */
        name?: string;
        /**
         * The unconverted minimum monthly budget that the company accepts for
         * partner business.
         */
        originalMinMonthlyBudget?: Schema$Money;
        /**
         * The Primary AdWords Manager Account id.
         */
        primaryAdwordsManagerAccountId?: string;
        /**
         * The primary language code of the company, as defined by &lt;a
         * href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
         * (IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
         */
        primaryLanguageCode?: string;
        /**
         * The primary location of the company.
         */
        primaryLocation?: Schema$Location;
        /**
         * The public viewability status of the company&#39;s profile.
         */
        profileStatus?: string;
        /**
         * Basic information from the company&#39;s public profile.
         */
        publicProfile?: Schema$PublicProfile;
        /**
         * Information related to the ranking of the company within the list of
         * companies.
         */
        ranks?: Schema$Rank[];
        /**
         * Services the company can help with.
         */
        services?: string[];
        /**
         * The list of Google Partners specialization statuses for the company.
         */
        specializationStatus?: Schema$SpecializationStatus[];
        /**
         * URL of the company&#39;s website.
         */
        websiteUrl?: string;
    }
    /**
     * A CompanyRelation resource representing information about a user&#39;s
     * affiliation and standing with a company in Partners.
     */
    interface Schema$CompanyRelation {
        /**
         * The primary address for this company.
         */
        address?: string;
        /**
         * Whether the company is a Partner.
         */
        badgeTier?: string;
        /**
         * Indicates if the user is an admin for this company.
         */
        companyAdmin?: boolean;
        /**
         * The ID of the company. There may be no id if this is a pending company.5
         */
        companyId?: string;
        /**
         * The timestamp of when affiliation was requested. @OutputOnly
         */
        creationTime?: string;
        /**
         * The internal company ID. Only available for a whitelisted set of api
         * clients.
         */
        internalCompanyId?: string;
        /**
         * The flag that indicates if the company is pending verification.
         */
        isPending?: boolean;
        /**
         * A URL to a profile photo, e.g. a G+ profile photo.
         */
        logoUrl?: string;
        /**
         * The AdWords manager account # associated this company.
         */
        managerAccount?: string;
        /**
         * The name (in the company&#39;s primary language) for the company.
         */
        name?: string;
        /**
         * The phone number for the company&#39;s primary address.
         */
        phoneNumber?: string;
        /**
         * The primary location of the company.
         */
        primaryAddress?: Schema$Location;
        /**
         * The primary country code of the company.
         */
        primaryCountryCode?: string;
        /**
         * The primary language code of the company.
         */
        primaryLanguageCode?: string;
        /**
         * The timestamp when the user was approved. @OutputOnly
         */
        resolvedTimestamp?: string;
        /**
         * The segment the company is classified as.
         */
        segment?: string[];
        /**
         * The list of Google Partners specialization statuses for the company.
         */
        specializationStatus?: Schema$SpecializationStatus[];
        /**
         * The state of relationship, in terms of approvals.
         */
        state?: string;
        /**
         * The website URL for this company.
         */
        website?: string;
    }
    /**
     * Offer info by country.
     */
    interface Schema$CountryOfferInfo {
        /**
         * (localized) Get Y amount for that country&#39;s offer.
         */
        getYAmount?: string;
        /**
         * Country code for which offer codes may be requested.
         */
        offerCountryCode?: string;
        /**
         * Type of offer country is eligible for.
         */
        offerType?: string;
        /**
         * (localized) Spend X amount for that country&#39;s offer.
         */
        spendXAmount?: string;
    }
    /**
     * Request message for CreateLead.
     */
    interface Schema$CreateLeadRequest {
        /**
         * The lead resource. The `LeadType` must not be `LEAD_TYPE_UNSPECIFIED` and
         * either `email` or `phone_number` must be provided.
         */
        lead?: Schema$Lead;
        /**
         * &lt;a
         * href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt;
         * challenge info.
         */
        recaptchaChallenge?: Schema$RecaptchaChallenge;
        /**
         * Current request metadata.
         */
        requestMetadata?: Schema$RequestMetadata;
    }
    /**
     * Response message for CreateLead.
     */
    interface Schema$CreateLeadResponse {
        /**
         * Lead that was created depending on the outcome of &lt;a
         * href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt;
         * validation.
         */
        lead?: Schema$Lead;
        /**
         * The outcome of &lt;a
         * href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt;
         * validation.
         */
        recaptchaStatus?: string;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Represents a whole calendar date, e.g. date of birth. The time of day and
     * time zone are either specified elsewhere or are not significant. The date
     * is relative to the Proleptic Gregorian Calendar. The day may be 0 to
     * represent a year and month where the day is not significant, e.g. credit
     * card expiration date. The year may be 0 to represent a month and day
     * independent of year, e.g. anniversary date. Related types are
     * google.type.TimeOfDay and `google.protobuf.Timestamp`.
     */
    interface Schema$Date {
        /**
         * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
         * if specifying a year/month where the day is not significant.
         */
        day?: number;
        /**
         * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
         * month.
         */
        month?: number;
        /**
         * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
         * year.
         */
        year?: number;
    }
    /**
     * Debug information about this request.
     */
    interface Schema$DebugInfo {
        /**
         * Info about the server that serviced this request.
         */
        serverInfo?: string;
        /**
         * Server-side debug stack trace.
         */
        serverTraceInfo?: string;
        /**
         * URL of the service that handled this request.
         */
        serviceUrl?: string;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated
     * empty messages in your APIs. A typical example is to use it as the request
     * or the response type of an API method. For instance:      service Foo { rpc
     * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
     * representation for `Empty` is empty JSON object `{}`.
     */
    interface Schema$Empty {
    }
    /**
     * Key value data pair for an event.
     */
    interface Schema$EventData {
        /**
         * Data type.
         */
        key?: string;
        /**
         * Data values.
         */
        values?: string[];
    }
    /**
     * A user&#39;s information on a specific exam.
     */
    interface Schema$ExamStatus {
        /**
         * The type of the exam.
         */
        examType?: string;
        /**
         * Date this exam is due to expire.
         */
        expiration?: string;
        /**
         * The date the user last passed this exam.
         */
        lastPassed?: string;
        /**
         * Whether this exam has been passed and not expired.
         */
        passed?: boolean;
        /**
         * The date the user last taken this exam.
         */
        taken?: string;
        /**
         * Whether this exam is in the state of warning.
         */
        warning?: boolean;
    }
    /**
     * Response message for GetCompany.
     */
    interface Schema$GetCompanyResponse {
        /**
         * The company.
         */
        company?: Schema$Company;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Response message for GetPartnersStatus.
     */
    interface Schema$GetPartnersStatusResponse {
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Historical information about a Google Partners Offer.
     */
    interface Schema$HistoricalOffer {
        /**
         * Client&#39;s AdWords page URL.
         */
        adwordsUrl?: string;
        /**
         * Email address for client.
         */
        clientEmail?: string;
        /**
         * ID of client.
         */
        clientId?: string;
        /**
         * Name of the client.
         */
        clientName?: string;
        /**
         * Time offer was first created.
         */
        creationTime?: string;
        /**
         * Time this offer expires.
         */
        expirationTime?: string;
        /**
         * Time last action was taken.
         */
        lastModifiedTime?: string;
        /**
         * Offer code.
         */
        offerCode?: string;
        /**
         * Country Code for the offer country.
         */
        offerCountryCode?: string;
        /**
         * Type of offer.
         */
        offerType?: string;
        /**
         * Name (First + Last) of the partners user to whom the incentive is
         * allocated.
         */
        senderName?: string;
        /**
         * Status of the offer.
         */
        status?: string;
    }
    /**
     * An object representing a latitude/longitude pair. This is expressed as a
     * pair of doubles representing degrees latitude and degrees longitude. Unless
     * specified otherwise, this must conform to the &lt;a
     * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
     * standard&lt;/a&gt;. Values must be within normalized ranges.
     */
    interface Schema$LatLng {
        /**
         * The latitude in degrees. It must be in the range [-90.0, +90.0].
         */
        latitude?: number;
        /**
         * The longitude in degrees. It must be in the range [-180.0, +180.0].
         */
        longitude?: number;
    }
    /**
     * A lead resource that represents an advertiser contact for a `Company`.
     * These are usually generated via Google Partner Search (the advertiser
     * portal).
     */
    interface Schema$Lead {
        /**
         * The AdWords Customer ID of the lead.
         */
        adwordsCustomerId?: string;
        /**
         * Comments lead source gave.
         */
        comments?: string;
        /**
         * Timestamp of when this lead was created.
         */
        createTime?: string;
        /**
         * Email address of lead source.
         */
        email?: string;
        /**
         * Last name of lead source.
         */
        familyName?: string;
        /**
         * First name of lead source.
         */
        givenName?: string;
        /**
         * List of reasons for using Google Partner Search and creating a lead.
         */
        gpsMotivations?: string[];
        /**
         * ID of the lead.
         */
        id?: string;
        /**
         * Language code of the lead&#39;s language preference, as defined by &lt;a
         * href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
         * (IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
         */
        languageCode?: string;
        /**
         * Whether or not the lead signed up for marketing emails
         */
        marketingOptIn?: boolean;
        /**
         * The minimum monthly budget lead source is willing to spend.
         */
        minMonthlyBudget?: Schema$Money;
        /**
         * Phone number of lead source.
         */
        phoneNumber?: string;
        /**
         * The lead&#39;s state in relation to the company.
         */
        state?: string;
        /**
         * Type of lead.
         */
        type?: string;
        /**
         * Website URL of lead source.
         */
        websiteUrl?: string;
    }
    /**
     * Response message for ListAnalytics.
     */
    interface Schema$ListAnalyticsResponse {
        /**
         * The list of analytics. Sorted in ascending order of Analytics.event_date.
         */
        analytics?: Schema$Analytics[];
        /**
         * Aggregated information across the response&#39;s analytics.
         */
        analyticsSummary?: Schema$AnalyticsSummary;
        /**
         * A token to retrieve next page of results. Pass this value in the
         * `ListAnalyticsRequest.page_token` field in the subsequent call to
         * ListAnalytics to retrieve the next page of results.
         */
        nextPageToken?: string;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Response message for ListCompanies.
     */
    interface Schema$ListCompaniesResponse {
        /**
         * The list of companies.
         */
        companies?: Schema$Company[];
        /**
         * A token to retrieve next page of results. Pass this value in the
         * `ListCompaniesRequest.page_token` field in the subsequent call to
         * ListCompanies to retrieve the next page of results.
         */
        nextPageToken?: string;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Response message for ListLeads.
     */
    interface Schema$ListLeadsResponse {
        /**
         * The list of leads.
         */
        leads?: Schema$Lead[];
        /**
         * A token to retrieve next page of results. Pass this value in the
         * `ListLeadsRequest.page_token` field in the subsequent call to ListLeads
         * to retrieve the next page of results.
         */
        nextPageToken?: string;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
        /**
         * The total count of leads for the given company.
         */
        totalSize?: number;
    }
    /**
     * Response for ListOfferHistory.
     */
    interface Schema$ListOffersHistoryResponse {
        /**
         * True if the user has the option to show entire company history.
         */
        canShowEntireCompany?: boolean;
        /**
         * Supply this token in a ListOffersHistoryRequest to retrieve the next
         * page.
         */
        nextPageToken?: string;
        /**
         * Historical offers meeting request.
         */
        offers?: Schema$HistoricalOffer[];
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
        /**
         * True if this response is showing entire company history.
         */
        showingEntireCompany?: boolean;
        /**
         * Number of results across all pages.
         */
        totalResults?: number;
    }
    /**
     * Response for ListOffer.
     */
    interface Schema$ListOffersResponse {
        /**
         * Available Offers to be distributed.
         */
        availableOffers?: Schema$AvailableOffer[];
        /**
         * Reason why no Offers are available.
         */
        noOfferReason?: string;
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Response message for ListUserStates.
     */
    interface Schema$ListUserStatesResponse {
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
        /**
         * User&#39;s states.
         */
        userStates?: string[];
    }
    /**
     * The localized company information.
     */
    interface Schema$LocalizedCompanyInfo {
        /**
         * List of country codes for the localized company info.
         */
        countryCodes?: string[];
        /**
         * Localized display name.
         */
        displayName?: string;
        /**
         * Language code of the localized company info, as defined by &lt;a
         * href=&quot;https://tools.ietf.org/html/bcp47&quot;&gt;BCP 47&lt;/a&gt;
         * (IETF BCP 47, &quot;Tags for Identifying Languages&quot;).
         */
        languageCode?: string;
        /**
         * Localized brief description that the company uses to advertise
         * themselves.
         */
        overview?: string;
    }
    /**
     * A location with address and geographic coordinates. May optionally contain
     * a detailed (multi-field) version of the address.
     */
    interface Schema$Location {
        /**
         * The single string version of the address.
         */
        address?: string;
        /**
         * The following address lines represent the most specific part of any
         * address.
         */
        addressLine?: string[];
        /**
         * Top-level administrative subdivision of this country.
         */
        administrativeArea?: string;
        /**
         * Dependent locality or sublocality. Used for UK dependent localities, or
         * neighborhoods or boroughs in other locations.
         */
        dependentLocality?: string;
        /**
         * Language code of the address. Should be in BCP 47 format.
         */
        languageCode?: string;
        /**
         * The latitude and longitude of the location, in degrees.
         */
        latLng?: Schema$LatLng;
        /**
         * Generally refers to the city/town portion of an address.
         */
        locality?: string;
        /**
         * Values are frequently alphanumeric.
         */
        postalCode?: string;
        /**
         * CLDR (Common Locale Data Repository) region code .
         */
        regionCode?: string;
        /**
         * Use of this code is very country-specific, but will refer to a secondary
         * classification code for sorting mail.
         */
        sortingCode?: string;
    }
    /**
     * Request message for LogClientMessage.
     */
    interface Schema$LogMessageRequest {
        /**
         * Map of client info, such as URL, browser navigator, browser platform,
         * etc.
         */
        clientInfo?: any;
        /**
         * Details about the client message.
         */
        details?: string;
        /**
         * Message level of client message.
         */
        level?: string;
        /**
         * Current request metadata.
         */
        requestMetadata?: Schema$RequestMetadata;
    }
    /**
     * Response message for LogClientMessage.
     */
    interface Schema$LogMessageResponse {
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Request message for LogUserEvent.
     */
    interface Schema$LogUserEventRequest {
        /**
         * The action that occurred.
         */
        eventAction?: string;
        /**
         * The category the action belongs to.
         */
        eventCategory?: string;
        /**
         * List of event data for the event.
         */
        eventDatas?: Schema$EventData[];
        /**
         * The scope of the event.
         */
        eventScope?: string;
        /**
         * Advertiser lead information.
         */
        lead?: Schema$Lead;
        /**
         * Current request metadata.
         */
        requestMetadata?: Schema$RequestMetadata;
        /**
         * The URL where the event occurred.
         */
        url?: string;
    }
    /**
     * Response message for LogUserEvent.
     */
    interface Schema$LogUserEventResponse {
        /**
         * Current response metadata.
         */
        responseMetadata?: Schema$ResponseMetadata;
    }
    /**
     * Represents an amount of money with its currency type.
     */
    interface Schema$Money {
        /**
         * The 3-letter currency code defined in ISO 4217.
         */
        currencyCode?: string;
        /**
         * Number of nano (10^-9) units of the amount. The value must be between
         * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
         * must be positive or zero. If `units` is zero, `nanos` can be positive,
         * zero, or negative. If `units` is negative, `nanos` must be negative or
         * zero. For example $-1.75 is represented as `units`=-1 and
         * `nanos`=-750,000,000.
         */
        nanos?: number;
        /**
         * The whole units of the amount. For example if `currencyCode` is
         * `&quot;USD&quot;`, then 1 unit is one US dollar.
         */
        units?: string;
    }
    /**
     * Customers qualified for an offer.
     */
    interface Schema$OfferCustomer {
        /**
         * URL to the customer&#39;s AdWords page.
         */
        adwordsUrl?: string;
        /**
         * Country code of the customer.
         */
        countryCode?: string;
        /**
         * Time the customer was created.
         */
        creationTime?: string;
        /**
         * Days the customer is still eligible.
         */
        eligibilityDaysLeft?: number;
        /**
         * External CID for the customer.
         */
        externalCid?: string;
        /**
         * Formatted Get Y amount with currency code.
         */
        getYAmount?: string;
        /**
         * Name of the customer.
         */
        name?: string;
        /**
         * Type of the offer
         */
        offerType?: string;
        /**
         * Formatted Spend X amount with currency code.
         */
        spendXAmount?: string;
    }
    /**
     * A set of opt-ins for a user.
     */
    interface Schema$OptIns {
        /**
         * An opt-in about receiving email from Partners marketing teams. Includes
         * member-only events and special promotional offers for Google products.
         */
        marketComm?: boolean;
        /**
         * An opt-in about receiving email with customized AdWords campaign
         * management tips.
         */
        performanceSuggestions?: boolean;
        /**
         * An opt-in to allow recieivng phone calls about their Partners account.
         */
        phoneContact?: boolean;
        /**
         * An opt-in to receive special promotional gifts and material in the mail.
         */
        physicalMail?: boolean;
        /**
         * An opt-in about receiving email regarding new features and products.
         */
        specialOffers?: boolean;
    }
    /**
     * Basic information from a public profile.
     */
    interface Schema$PublicProfile {
        /**
         * The URL to the main display image of the public profile. Being
         * deprecated.
         */
        displayImageUrl?: string;
        /**
         * The display name of the public profile.
         */
        displayName?: string;
        /**
         * The ID which can be used to retrieve more details about the public
         * profile.
         */
        id?: string;
        /**
         * The URL to the main profile image of the public profile.
         */
        profileImage?: string;
        /**
         * The URL of the public profile.
         */
        url?: string;
    }
    /**
     * Information related to ranking of results.
     */
    interface Schema$Rank {
        /**
         * The type of rank.
         */
        type?: string;
        /**
         * The numerical value of the rank.
         */
        value?: number;
    }
    /**
     * &lt;a
     * href=&quot;https://www.google.com/recaptcha/&quot;&gt;reCaptcha&lt;/a&gt;
     * challenge info.
     */
    interface Schema$RecaptchaChallenge {
        /**
         * The ID of the reCaptcha challenge.
         */
        id?: string;
        /**
         * The response to the reCaptcha challenge.
         */
        response?: string;
    }
    /**
     * Common data that is in each API request.
     */
    interface Schema$RequestMetadata {
        /**
         * Experiment IDs the current request belongs to.
         */
        experimentIds?: string[];
        /**
         * Locale to use for the current request.
         */
        locale?: string;
        /**
         * Google Partners session ID.
         */
        partnersSessionId?: string;
        /**
         * Source of traffic for the current request.
         */
        trafficSource?: Schema$TrafficSource;
        /**
         * Values to use instead of the user&#39;s respective defaults for the
         * current request. These are only honored by whitelisted products.
         */
        userOverrides?: Schema$UserOverrides;
    }
    /**
     * Common data that is in each API response.
     */
    interface Schema$ResponseMetadata {
        /**
         * Debug information about this request.
         */
        debugInfo?: Schema$DebugInfo;
    }
    /**
     * Agency specialization status
     */
    interface Schema$SpecializationStatus {
        /**
         * The specialization this status is for.
         */
        badgeSpecialization?: string;
        /**
         * State of agency specialization.
         */
        badgeSpecializationState?: string;
    }
    /**
     * Source of traffic for the current request.
     */
    interface Schema$TrafficSource {
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        trafficSourceId?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        trafficSubId?: string;
    }
    /**
     * A resource representing a user of the Partners platform.
     */
    interface Schema$User {
        /**
         * Whether or not the user has opted to share their Academy for Ads info
         * with Google Partners.
         */
        afaInfoShared?: boolean;
        /**
         * This is the list of AdWords Manager Accounts the user has edit access to.
         * If the user has edit access to multiple accounts, the user can choose the
         * preferred account and we use this when a personal account is needed. Can
         * be empty meaning the user has access to no accounts. @OutputOnly
         */
        availableAdwordsManagerAccounts?: Schema$AdWordsManagerAccountInfo[];
        /**
         * The list of achieved certifications. These are calculated based on exam
         * results and other requirements. @OutputOnly
         */
        certificationStatus?: Schema$Certification[];
        /**
         * The company that the user is associated with. If not present, the user is
         * not associated with any company.
         */
        company?: Schema$CompanyRelation;
        /**
         * The email address used by the user used for company verification.
         * @OutputOnly
         */
        companyVerificationEmail?: string;
        /**
         * The list of exams the user ever taken. For each type of exam, only one
         * entry is listed.
         */
        examStatus?: Schema$ExamStatus[];
        /**
         * The ID of the user.
         */
        id?: string;
        /**
         * The internal user ID. Only available for a whitelisted set of api
         * clients.
         */
        internalId?: string;
        /**
         * The most recent time the user interacted with the Partners site.
         * @OutputOnly
         */
        lastAccessTime?: string;
        /**
         * The list of emails the user has access to/can select as primary.
         * @OutputOnly
         */
        primaryEmails?: string[];
        /**
         * The profile information of a Partners user, contains all the directly
         * editable user information.
         */
        profile?: Schema$UserProfile;
        /**
         * Information about a user&#39;s external public profile outside Google
         * Partners.
         */
        publicProfile?: Schema$PublicProfile;
    }
    /**
     * Values to use instead of the user&#39;s respective defaults. These are only
     * honored by whitelisted products.
     */
    interface Schema$UserOverrides {
        /**
         * IP address to use instead of the user&#39;s geo-located IP address.
         */
        ipAddress?: string;
        /**
         * Logged-in user ID to impersonate instead of the user&#39;s ID.
         */
        userId?: string;
    }
    /**
     * The profile information of a Partners user.
     */
    interface Schema$UserProfile {
        /**
         * The user&#39;s mailing address, contains multiple fields.
         */
        address?: Schema$Location;
        /**
         * If the user has edit access to multiple accounts, the user can choose the
         * preferred account and it is used when a personal account is needed. Can
         * be empty.
         */
        adwordsManagerAccount?: string;
        /**
         * A list of ids representing which channels the user selected they were in.
         */
        channels?: string[];
        /**
         * The email address the user has selected on the Partners site as primary.
         */
        emailAddress?: string;
        /**
         * The list of opt-ins for the user, related to communication preferences.
         */
        emailOptIns?: Schema$OptIns;
        /**
         * The user&#39;s family name.
         */
        familyName?: string;
        /**
         * The user&#39;s given name.
         */
        givenName?: string;
        /**
         * A list of ids representing which industries the user selected.
         */
        industries?: string[];
        /**
         * A list of ids represnting which job categories the user selected.
         */
        jobFunctions?: string[];
        /**
         * The list of languages this user understands.
         */
        languages?: string[];
        /**
         * A list of ids representing which markets the user was interested in.
         */
        markets?: string[];
        /**
         * Whether or not to migrate the user&#39;s exam data to Academy for Ads.
         */
        migrateToAfa?: boolean;
        /**
         * The user&#39;s phone number.
         */
        phoneNumber?: string;
        /**
         * The user&#39;s primary country, an ISO 2-character code.
         */
        primaryCountryCode?: string;
        /**
         * Whether the user&#39;s public profile is visible to anyone with the URL.
         */
        profilePublic?: boolean;
    }
    class Resource$Analytics {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.analytics.list
         * @desc Lists analytics data for a user's associated company. Should only
         * be called within the context of an authorized logged in user.
         * @alias partners.analytics.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Requested page size. Server may return
         *     fewer analytics than requested. If unspecified or set to 0, default
         *     value is 30. Specifies the number of days in the date range when
         *     querying analytics. The `page_token` represents the end date of the
         *     date range and the start date is calculated using the `page_size` as
         *     the number of days BEFORE the end date. Must be a non-negative
         *     integer.
         * @param {string=} params.pageToken A token identifying a page of results
         *     that the server returns. Typically, this is the value of
         *     `ListAnalyticsResponse.next_page_token` returned from the previous
         *     call to ListAnalytics. Will be a date string in `YYYY-MM-DD` format
         *     representing the end date of the date range of results to return. If
         *     unspecified or set to "", default value is the current date.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Analytics$List, options?: MethodOptions): AxiosPromise<Schema$ListAnalyticsResponse>;
        list(params: Params$Resource$Analytics$List, options: MethodOptions | BodyResponseCallback<Schema$ListAnalyticsResponse>, callback: BodyResponseCallback<Schema$ListAnalyticsResponse>): void;
        list(params: Params$Resource$Analytics$List, callback: BodyResponseCallback<Schema$ListAnalyticsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAnalyticsResponse>): void;
    }
    interface Params$Resource$Analytics$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Requested page size. Server may return fewer analytics than requested. If
         * unspecified or set to 0, default value is 30. Specifies the number of
         * days in the date range when querying analytics. The `page_token`
         * represents the end date of the date range and the start date is
         * calculated using the `page_size` as the number of days BEFORE the end
         * date. Must be a non-negative integer.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results that the server returns. Typically,
         * this is the value of `ListAnalyticsResponse.next_page_token` returned
         * from the previous call to ListAnalytics. Will be a date string in
         * `YYYY-MM-DD` format representing the end date of the date range of
         * results to return. If unspecified or set to "", default value is the
         * current date.
         */
        pageToken?: string;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    class Resource$Clientmessages {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.clientMessages.log
         * @desc Logs a generic message from the client, such as `Failed to render
         * component`, `Profile page is running slow`, `More than 500 users have
         * accessed this result.`, etc.
         * @alias partners.clientMessages.log
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().LogMessageRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        log(params?: Params$Resource$Clientmessages$Log, options?: MethodOptions): AxiosPromise<Schema$LogMessageResponse>;
        log(params: Params$Resource$Clientmessages$Log, options: MethodOptions | BodyResponseCallback<Schema$LogMessageResponse>, callback: BodyResponseCallback<Schema$LogMessageResponse>): void;
        log(params: Params$Resource$Clientmessages$Log, callback: BodyResponseCallback<Schema$LogMessageResponse>): void;
        log(callback: BodyResponseCallback<Schema$LogMessageResponse>): void;
    }
    interface Params$Resource$Clientmessages$Log {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LogMessageRequest;
    }
    class Resource$Companies {
        root: Partners;
        leads: Resource$Companies$Leads;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.companies.get
         * @desc Gets a company.
         * @alias partners.companies.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.address The address to use for sorting the
         *     company's addresses by proximity. If not given, the geo-located
         *     address of the request is used. Used when order_by is set.
         * @param {string} params.companyId The ID of the company to retrieve.
         * @param {string=} params.currencyCode If the company's budget is in a
         *     different currency code than this one, then the converted budget is
         *     converted to this currency code.
         * @param {string=} params.orderBy How to order addresses within the
         *     returned company. Currently, only `address` and `address desc` is
         *     supported which will sorted by closest to farthest in distance from
         *     given address and farthest to closest distance from given address
         *     respectively.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string=} params.view The view of `Company` resource to be
         *     returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Companies$Get, options?: MethodOptions): AxiosPromise<Schema$GetCompanyResponse>;
        get(params: Params$Resource$Companies$Get, options: MethodOptions | BodyResponseCallback<Schema$GetCompanyResponse>, callback: BodyResponseCallback<Schema$GetCompanyResponse>): void;
        get(params: Params$Resource$Companies$Get, callback: BodyResponseCallback<Schema$GetCompanyResponse>): void;
        get(callback: BodyResponseCallback<Schema$GetCompanyResponse>): void;
        /**
         * partners.companies.list
         * @desc Lists companies.
         * @alias partners.companies.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.address The address to use when searching for
         *     companies. If not given, the geo-located address of the request is
         *     used.
         * @param {string=} params.companyName Company name to search for.
         * @param {string=} params.gpsMotivations List of reasons for using Google
         *     Partner Search to get companies.
         * @param {string=} params.industries List of industries the company can
         *     help with.
         * @param {string=} params.languageCodes List of language codes that company
         *     can support. Only primary language subtags are accepted as defined by
         *     <a href="https://tools.ietf.org/html/bcp47">BCP 47</a> (IETF BCP 47,
         *     "Tags for Identifying Languages").
         * @param {string=} params.maxMonthlyBudget.currencyCode The 3-letter
         *     currency code defined in ISO 4217.
         * @param {integer=} params.maxMonthlyBudget.nanos Number of nano (10^-9)
         *     units of the amount. The value must be between -999,999,999 and
         *     +999,999,999 inclusive. If `units` is positive, `nanos` must be
         *     positive or zero. If `units` is zero, `nanos` can be positive, zero,
         *     or negative. If `units` is negative, `nanos` must be negative or
         *     zero. For example $-1.75 is represented as `units`=-1 and
         *     `nanos`=-750,000,000.
         * @param {string=} params.maxMonthlyBudget.units The whole units of the
         *     amount. For example if `currencyCode` is `"USD"`, then 1 unit is one
         *     US dollar.
         * @param {string=} params.minMonthlyBudget.currencyCode The 3-letter
         *     currency code defined in ISO 4217.
         * @param {integer=} params.minMonthlyBudget.nanos Number of nano (10^-9)
         *     units of the amount. The value must be between -999,999,999 and
         *     +999,999,999 inclusive. If `units` is positive, `nanos` must be
         *     positive or zero. If `units` is zero, `nanos` can be positive, zero,
         *     or negative. If `units` is negative, `nanos` must be negative or
         *     zero. For example $-1.75 is represented as `units`=-1 and
         *     `nanos`=-750,000,000.
         * @param {string=} params.minMonthlyBudget.units The whole units of the
         *     amount. For example if `currencyCode` is `"USD"`, then 1 unit is one
         *     US dollar.
         * @param {string=} params.orderBy How to order addresses within the
         *     returned companies. Currently, only `address` and `address desc` is
         *     supported which will sorted by closest to farthest in distance from
         *     given address and farthest to closest distance from given address
         *     respectively.
         * @param {integer=} params.pageSize Requested page size. Server may return
         *     fewer companies than requested. If unspecified, server picks an
         *     appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results
         *     that the server returns. Typically, this is the value of
         *     `ListCompaniesResponse.next_page_token` returned from the previous
         *     call to ListCompanies.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string=} params.services List of services that the returned
         *     agencies should provide. If this is not empty, any returned agency
         *     must have at least one of these services, or one of the
         *     specializations in the "specializations" field.
         * @param {string=} params.specializations List of specializations that the
         *     returned agencies should provide. If this is not empty, any returned
         *     agency must have at least one of these specializations, or one of the
         *     services in the "services" field.
         * @param {string=} params.view The view of the `Company` resource to be
         *     returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
         * @param {string=} params.websiteUrl Website URL that will help to find a
         *     better matched company. .
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Companies$List, options?: MethodOptions): AxiosPromise<Schema$ListCompaniesResponse>;
        list(params: Params$Resource$Companies$List, options: MethodOptions | BodyResponseCallback<Schema$ListCompaniesResponse>, callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
        list(params: Params$Resource$Companies$List, callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListCompaniesResponse>): void;
    }
    interface Params$Resource$Companies$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The address to use for sorting the company's addresses by proximity. If
         * not given, the geo-located address of the request is used. Used when
         * order_by is set.
         */
        address?: string;
        /**
         * The ID of the company to retrieve.
         */
        companyId?: string;
        /**
         * If the company's budget is in a different currency code than this one,
         * then the converted budget is converted to this currency code.
         */
        currencyCode?: string;
        /**
         * How to order addresses within the returned company. Currently, only
         * `address` and `address desc` is supported which will sorted by closest to
         * farthest in distance from given address and farthest to closest distance
         * from given address respectively.
         */
        orderBy?: string;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * The view of `Company` resource to be returned. This must not be
         * `COMPANY_VIEW_UNSPECIFIED`.
         */
        view?: string;
    }
    interface Params$Resource$Companies$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The address to use when searching for companies. If not given, the
         * geo-located address of the request is used.
         */
        address?: string;
        /**
         * Company name to search for.
         */
        companyName?: string;
        /**
         * List of reasons for using Google Partner Search to get companies.
         */
        gpsMotivations?: string;
        /**
         * List of industries the company can help with.
         */
        industries?: string;
        /**
         * List of language codes that company can support. Only primary language
         * subtags are accepted as defined by <a
         * href="https://tools.ietf.org/html/bcp47">BCP 47</a> (IETF BCP 47, "Tags
         * for Identifying Languages").
         */
        languageCodes?: string;
        /**
         * The 3-letter currency code defined in ISO 4217.
         */
        'maxMonthlyBudget.currencyCode'?: string;
        /**
         * Number of nano (10^-9) units of the amount. The value must be between
         * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
         * must be positive or zero. If `units` is zero, `nanos` can be positive,
         * zero, or negative. If `units` is negative, `nanos` must be negative or
         * zero. For example $-1.75 is represented as `units`=-1 and
         * `nanos`=-750,000,000.
         */
        'maxMonthlyBudget.nanos'?: number;
        /**
         * The whole units of the amount. For example if `currencyCode` is `"USD"`,
         * then 1 unit is one US dollar.
         */
        'maxMonthlyBudget.units'?: string;
        /**
         * The 3-letter currency code defined in ISO 4217.
         */
        'minMonthlyBudget.currencyCode'?: string;
        /**
         * Number of nano (10^-9) units of the amount. The value must be between
         * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
         * must be positive or zero. If `units` is zero, `nanos` can be positive,
         * zero, or negative. If `units` is negative, `nanos` must be negative or
         * zero. For example $-1.75 is represented as `units`=-1 and
         * `nanos`=-750,000,000.
         */
        'minMonthlyBudget.nanos'?: number;
        /**
         * The whole units of the amount. For example if `currencyCode` is `"USD"`,
         * then 1 unit is one US dollar.
         */
        'minMonthlyBudget.units'?: string;
        /**
         * How to order addresses within the returned companies. Currently, only
         * `address` and `address desc` is supported which will sorted by closest to
         * farthest in distance from given address and farthest to closest distance
         * from given address respectively.
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer companies than requested. If
         * unspecified, server picks an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results that the server returns. Typically,
         * this is the value of `ListCompaniesResponse.next_page_token` returned
         * from the previous call to ListCompanies.
         */
        pageToken?: string;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * List of services that the returned agencies should provide. If this is
         * not empty, any returned agency must have at least one of these services,
         * or one of the specializations in the "specializations" field.
         */
        services?: string;
        /**
         * List of specializations that the returned agencies should provide. If
         * this is not empty, any returned agency must have at least one of these
         * specializations, or one of the services in the "services" field.
         */
        specializations?: string;
        /**
         * The view of the `Company` resource to be returned. This must not be
         * `COMPANY_VIEW_UNSPECIFIED`.
         */
        view?: string;
        /**
         * Website URL that will help to find a better matched company. .
         */
        websiteUrl?: string;
    }
    class Resource$Companies$Leads {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.companies.leads.create
         * @desc Creates an advertiser lead for the given company ID.
         * @alias partners.companies.leads.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.companyId The ID of the company to contact.
         * @param {().CreateLeadRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Companies$Leads$Create, options?: MethodOptions): AxiosPromise<Schema$CreateLeadResponse>;
        create(params: Params$Resource$Companies$Leads$Create, options: MethodOptions | BodyResponseCallback<Schema$CreateLeadResponse>, callback: BodyResponseCallback<Schema$CreateLeadResponse>): void;
        create(params: Params$Resource$Companies$Leads$Create, callback: BodyResponseCallback<Schema$CreateLeadResponse>): void;
        create(callback: BodyResponseCallback<Schema$CreateLeadResponse>): void;
    }
    interface Params$Resource$Companies$Leads$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the company to contact.
         */
        companyId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateLeadRequest;
    }
    class Resource$Leads {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.leads.list
         * @desc Lists advertiser leads for a user's associated company. Should only
         * be called within the context of an authorized logged in user.
         * @alias partners.leads.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.orderBy How to order Leads. Currently, only
         *     `create_time` and `create_time desc` are supported
         * @param {integer=} params.pageSize Requested page size. Server may return
         *     fewer leads than requested. If unspecified, server picks an
         *     appropriate default.
         * @param {string=} params.pageToken A token identifying a page of results
         *     that the server returns. Typically, this is the value of
         *     `ListLeadsResponse.next_page_token` returned from the previous call
         *     to ListLeads.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Leads$List, options?: MethodOptions): AxiosPromise<Schema$ListLeadsResponse>;
        list(params: Params$Resource$Leads$List, options: MethodOptions | BodyResponseCallback<Schema$ListLeadsResponse>, callback: BodyResponseCallback<Schema$ListLeadsResponse>): void;
        list(params: Params$Resource$Leads$List, callback: BodyResponseCallback<Schema$ListLeadsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLeadsResponse>): void;
    }
    interface Params$Resource$Leads$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * How to order Leads. Currently, only `create_time` and `create_time desc`
         * are supported
         */
        orderBy?: string;
        /**
         * Requested page size. Server may return fewer leads than requested. If
         * unspecified, server picks an appropriate default.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results that the server returns. Typically,
         * this is the value of `ListLeadsResponse.next_page_token` returned from
         * the previous call to ListLeads.
         */
        pageToken?: string;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    class Resource$Offers {
        root: Partners;
        history: Resource$Offers$History;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.offers.list
         * @desc Lists the Offers available for the current user
         * @alias partners.offers.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Offers$List, options?: MethodOptions): AxiosPromise<Schema$ListOffersResponse>;
        list(params: Params$Resource$Offers$List, options: MethodOptions | BodyResponseCallback<Schema$ListOffersResponse>, callback: BodyResponseCallback<Schema$ListOffersResponse>): void;
        list(params: Params$Resource$Offers$List, callback: BodyResponseCallback<Schema$ListOffersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOffersResponse>): void;
    }
    interface Params$Resource$Offers$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    class Resource$Offers$History {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.offers.history.list
         * @desc Lists the Historical Offers for the current user (or user's entire
         * company)
         * @alias partners.offers.history.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.entireCompany if true, show history for the
         *     entire company.  Requires user to be admin.
         * @param {string=} params.orderBy Comma-separated list of fields to order
         *     by, e.g.: "foo,bar,baz". Use "foo desc" to sort descending. List of
         *     valid field names is: name, offer_code, expiration_time, status,
         *     last_modified_time, sender_name, creation_time, country_code,
         *     offer_type.
         * @param {integer=} params.pageSize Maximum number of rows to return per
         *     page.
         * @param {string=} params.pageToken Token to retrieve a specific page.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Offers$History$List, options?: MethodOptions): AxiosPromise<Schema$ListOffersHistoryResponse>;
        list(params: Params$Resource$Offers$History$List, options: MethodOptions | BodyResponseCallback<Schema$ListOffersHistoryResponse>, callback: BodyResponseCallback<Schema$ListOffersHistoryResponse>): void;
        list(params: Params$Resource$Offers$History$List, callback: BodyResponseCallback<Schema$ListOffersHistoryResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOffersHistoryResponse>): void;
    }
    interface Params$Resource$Offers$History$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * if true, show history for the entire company.  Requires user to be admin.
         */
        entireCompany?: boolean;
        /**
         * Comma-separated list of fields to order by, e.g.: "foo,bar,baz". Use "foo
         * desc" to sort descending. List of valid field names is: name, offer_code,
         * expiration_time, status,     last_modified_time, sender_name,
         * creation_time, country_code,     offer_type.
         */
        orderBy?: string;
        /**
         * Maximum number of rows to return per page.
         */
        pageSize?: number;
        /**
         * Token to retrieve a specific page.
         */
        pageToken?: string;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    class Resource$Userevents {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.userEvents.log
         * @desc Logs a user event.
         * @alias partners.userEvents.log
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().LogUserEventRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        log(params?: Params$Resource$Userevents$Log, options?: MethodOptions): AxiosPromise<Schema$LogUserEventResponse>;
        log(params: Params$Resource$Userevents$Log, options: MethodOptions | BodyResponseCallback<Schema$LogUserEventResponse>, callback: BodyResponseCallback<Schema$LogUserEventResponse>): void;
        log(params: Params$Resource$Userevents$Log, callback: BodyResponseCallback<Schema$LogUserEventResponse>): void;
        log(callback: BodyResponseCallback<Schema$LogUserEventResponse>): void;
    }
    interface Params$Resource$Userevents$Log {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LogUserEventRequest;
    }
    class Resource$Users {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.users.createCompanyRelation
         * @desc Creates a user's company relation. Affiliates the user to a
         * company.
         * @alias partners.users.createCompanyRelation
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string} params.userId The ID of the user. Can be set to
         *     <code>me</code> to mean the currently authenticated user.
         * @param {().CompanyRelation} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createCompanyRelation(params?: Params$Resource$Users$Createcompanyrelation, options?: MethodOptions): AxiosPromise<Schema$CompanyRelation>;
        createCompanyRelation(params: Params$Resource$Users$Createcompanyrelation, options: MethodOptions | BodyResponseCallback<Schema$CompanyRelation>, callback: BodyResponseCallback<Schema$CompanyRelation>): void;
        createCompanyRelation(params: Params$Resource$Users$Createcompanyrelation, callback: BodyResponseCallback<Schema$CompanyRelation>): void;
        createCompanyRelation(callback: BodyResponseCallback<Schema$CompanyRelation>): void;
        /**
         * partners.users.deleteCompanyRelation
         * @desc Deletes a user's company relation. Unaffiliaites the user from a
         * company.
         * @alias partners.users.deleteCompanyRelation
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string} params.userId The ID of the user. Can be set to
         *     <code>me</code> to mean the currently authenticated user.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteCompanyRelation(params?: Params$Resource$Users$Deletecompanyrelation, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        deleteCompanyRelation(params: Params$Resource$Users$Deletecompanyrelation, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        deleteCompanyRelation(params: Params$Resource$Users$Deletecompanyrelation, callback: BodyResponseCallback<Schema$Empty>): void;
        deleteCompanyRelation(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * partners.users.get
         * @desc Gets a user.
         * @alias partners.users.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string} params.userId Identifier of the user. Can be set to
         *     <code>me</code> to mean the currently authenticated user.
         * @param {string=} params.userView Specifies what parts of the user
         *     information to return.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Users$Get, options?: MethodOptions): AxiosPromise<Schema$User>;
        get(params: Params$Resource$Users$Get, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        get(params: Params$Resource$Users$Get, callback: BodyResponseCallback<Schema$User>): void;
        get(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * partners.users.updateProfile
         * @desc Updates a user's profile. A user can only update their own profile
         * and should only be called within the context of a logged in user.
         * @alias partners.users.updateProfile
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {().UserProfile} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateProfile(params?: Params$Resource$Users$Updateprofile, options?: MethodOptions): AxiosPromise<Schema$UserProfile>;
        updateProfile(params: Params$Resource$Users$Updateprofile, options: MethodOptions | BodyResponseCallback<Schema$UserProfile>, callback: BodyResponseCallback<Schema$UserProfile>): void;
        updateProfile(params: Params$Resource$Users$Updateprofile, callback: BodyResponseCallback<Schema$UserProfile>): void;
        updateProfile(callback: BodyResponseCallback<Schema$UserProfile>): void;
    }
    interface Params$Resource$Users$Createcompanyrelation {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * The ID of the user. Can be set to <code>me</code> to mean the currently
         * authenticated user.
         */
        userId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CompanyRelation;
    }
    interface Params$Resource$Users$Deletecompanyrelation {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * The ID of the user. Can be set to <code>me</code> to mean the currently
         * authenticated user.
         */
        userId?: string;
    }
    interface Params$Resource$Users$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * Identifier of the user. Can be set to <code>me</code> to mean the
         * currently authenticated user.
         */
        userId?: string;
        /**
         * Specifies what parts of the user information to return.
         */
        userView?: string;
    }
    interface Params$Resource$Users$Updateprofile {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserProfile;
    }
    class Resource$Userstates {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.userStates.list
         * @desc Lists states for current user.
         * @alias partners.userStates.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Userstates$List, options?: MethodOptions): AxiosPromise<Schema$ListUserStatesResponse>;
        list(params: Params$Resource$Userstates$List, options: MethodOptions | BodyResponseCallback<Schema$ListUserStatesResponse>, callback: BodyResponseCallback<Schema$ListUserStatesResponse>): void;
        list(params: Params$Resource$Userstates$List, callback: BodyResponseCallback<Schema$ListUserStatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUserStatesResponse>): void;
    }
    interface Params$Resource$Userstates$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    class Resource$V2 {
        root: Partners;
        constructor(root: Partners);
        getRoot(): Partners;
        /**
         * partners.getPartnersstatus
         * @desc Gets Partners Status of the logged in user's agency. Should only be
         * called if the logged in user is the admin of the agency.
         * @alias partners.getPartnersstatus
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getPartnersstatus(params?: Params$Resource$V2$Getpartnersstatus, options?: MethodOptions): AxiosPromise<Schema$GetPartnersStatusResponse>;
        getPartnersstatus(params: Params$Resource$V2$Getpartnersstatus, options: MethodOptions | BodyResponseCallback<Schema$GetPartnersStatusResponse>, callback: BodyResponseCallback<Schema$GetPartnersStatusResponse>): void;
        getPartnersstatus(params: Params$Resource$V2$Getpartnersstatus, callback: BodyResponseCallback<Schema$GetPartnersStatusResponse>): void;
        getPartnersstatus(callback: BodyResponseCallback<Schema$GetPartnersStatusResponse>): void;
        /**
         * partners.updateCompanies
         * @desc Update company. Should only be called within the context of an
         * authorized logged in user.
         * @alias partners.updateCompanies
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string=} params.updateMask Standard field mask for the set of
         *     fields to be updated. Required with at least 1 value in FieldMask's
         *     paths.
         * @param {().Company} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateCompanies(params?: Params$Resource$V2$Updatecompanies, options?: MethodOptions): AxiosPromise<Schema$Company>;
        updateCompanies(params: Params$Resource$V2$Updatecompanies, options: MethodOptions | BodyResponseCallback<Schema$Company>, callback: BodyResponseCallback<Schema$Company>): void;
        updateCompanies(params: Params$Resource$V2$Updatecompanies, callback: BodyResponseCallback<Schema$Company>): void;
        updateCompanies(callback: BodyResponseCallback<Schema$Company>): void;
        /**
         * partners.updateLeads
         * @desc Updates the specified lead.
         * @alias partners.updateLeads
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the
         *     current request belongs to.
         * @param {string=} params.requestMetadata.locale Locale to use for the
         *     current request.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners
         *     session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId
         *     Identifier to indicate where the traffic comes from. An identifier
         *     has multiple letters created by a team which redirected the traffic
         *     to us.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second
         *     level identifier to indicate where the traffic comes from. An
         *     identifier has multiple letters created by a team which redirected
         *     the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP
         *     address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in
         *     user ID to impersonate instead of the user's ID.
         * @param {string=} params.updateMask Standard field mask for the set of
         *     fields to be updated. Required with at least 1 value in FieldMask's
         *     paths. Only `state` and `adwords_customer_id` are currently
         *     supported.
         * @param {().Lead} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateLeads(params?: Params$Resource$V2$Updateleads, options?: MethodOptions): AxiosPromise<Schema$Lead>;
        updateLeads(params: Params$Resource$V2$Updateleads, options: MethodOptions | BodyResponseCallback<Schema$Lead>, callback: BodyResponseCallback<Schema$Lead>): void;
        updateLeads(params: Params$Resource$V2$Updateleads, callback: BodyResponseCallback<Schema$Lead>): void;
        updateLeads(callback: BodyResponseCallback<Schema$Lead>): void;
    }
    interface Params$Resource$V2$Getpartnersstatus {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
    }
    interface Params$Resource$V2$Updatecompanies {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * Standard field mask for the set of fields to be updated. Required with at
         * least 1 value in FieldMask's paths.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Company;
    }
    interface Params$Resource$V2$Updateleads {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Experiment IDs the current request belongs to.
         */
        'requestMetadata.experimentIds'?: string;
        /**
         * Locale to use for the current request.
         */
        'requestMetadata.locale'?: string;
        /**
         * Google Partners session ID.
         */
        'requestMetadata.partnersSessionId'?: string;
        /**
         * Identifier to indicate where the traffic comes from. An identifier has
         * multiple letters created by a team which redirected the traffic to us.
         */
        'requestMetadata.trafficSource.trafficSourceId'?: string;
        /**
         * Second level identifier to indicate where the traffic comes from. An
         * identifier has multiple letters created by a team which redirected the
         * traffic to us.
         */
        'requestMetadata.trafficSource.trafficSubId'?: string;
        /**
         * IP address to use instead of the user's geo-located IP address.
         */
        'requestMetadata.userOverrides.ipAddress'?: string;
        /**
         * Logged-in user ID to impersonate instead of the user's ID.
         */
        'requestMetadata.userOverrides.userId'?: string;
        /**
         * Standard field mask for the set of fields to be updated. Required with at
         * least 1 value in FieldMask's paths. Only `state` and
         * `adwords_customer_id` are currently supported.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Lead;
    }
}
