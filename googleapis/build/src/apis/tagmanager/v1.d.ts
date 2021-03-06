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
export declare namespace tagmanager_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    /**
     * Tag Manager API
     *
     * Accesses Tag Manager accounts and containers.
     *
     * @example
     * const {google} = require('googleapis');
     * const tagmanager = google.tagmanager('v1');
     *
     * @namespace tagmanager
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Tagmanager
     */
    class Tagmanager {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        accounts: Resource$Accounts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Represents a Google Tag Manager Account.
     */
    interface Schema$Account {
        /**
         * The Account ID uniquely identifies the GTM Account.
         */
        accountId?: string;
        /**
         * The fingerprint of the GTM Account as computed at storage time. This
         * value is recomputed whenever the account is modified.
         */
        fingerprint?: string;
        /**
         * Account display name.
         */
        name?: string;
        /**
         * Whether the account shares data anonymously with Google and others.
         */
        shareData?: boolean;
    }
    /**
     * Defines the Google Tag Manager Account access permissions.
     */
    interface Schema$AccountAccess {
        /**
         * List of Account permissions. Valid account permissions are read and
         * manage.
         */
        permission?: string[];
    }
    /**
     * Represents a predicate.
     */
    interface Schema$Condition {
        /**
         * A list of named parameters (key/value), depending on the condition&#39;s
         * type. Notes:  - For binary operators, include parameters named arg0 and
         * arg1 for specifying the left and right operands, respectively.  - At this
         * time, the left operand (arg0) must be a reference to a variable.  - For
         * case-insensitive Regex matching, include a boolean parameter named
         * ignore_case that is set to true. If not specified or set to any other
         * value, the matching will be case sensitive.  - To negate an operator,
         * include a boolean parameter named negate boolean parameter that is set to
         * true.
         */
        parameter?: Schema$Parameter[];
        /**
         * The type of operator for this condition.
         */
        type?: string;
    }
    /**
     * Represents a Google Tag Manager Container.
     */
    interface Schema$Container {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * The Container ID uniquely identifies the GTM Container.
         */
        containerId?: string;
        /**
         * Optional list of domain names associated with the Container.
         */
        domainName?: string[];
        /**
         * List of enabled built-in variables. Valid values include: pageUrl,
         * pageHostname, pagePath, referrer, event, clickElement, clickClasses,
         * clickId, clickTarget, clickUrl, clickText, formElement, formClasses,
         * formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine,
         * newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState,
         * historySource, containerVersion, debugMode, randomNumber, containerId.
         */
        enabledBuiltInVariable?: string[];
        /**
         * The fingerprint of the GTM Container as computed at storage time. This
         * value is recomputed whenever the account is modified.
         */
        fingerprint?: string;
        /**
         * Container display name.
         */
        name?: string;
        /**
         * Container Notes.
         */
        notes?: string;
        /**
         * Container Public ID.
         */
        publicId?: string;
        /**
         * Container Country ID.
         */
        timeZoneCountryId?: string;
        /**
         * Container Time Zone ID.
         */
        timeZoneId?: string;
        /**
         * List of Usage Contexts for the Container. Valid values include: web,
         * android, ios.
         */
        usageContext?: string[];
    }
    /**
     * Defines the Google Tag Manager Container access permissions.
     */
    interface Schema$ContainerAccess {
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * List of Container permissions. Valid container permissions are: read,
         * edit, delete, publish.
         */
        permission?: string[];
    }
    /**
     * Represents a Google Tag Manager Container Version.
     */
    interface Schema$ContainerVersion {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * The container that this version was taken from.
         */
        container?: Schema$Container;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string;
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean;
        /**
         * The fingerprint of the GTM Container Version as computed at storage time.
         * This value is recomputed whenever the container version is modified.
         */
        fingerprint?: string;
        /**
         * The folders in the container that this version was taken from.
         */
        folder?: Schema$Folder[];
        /**
         * The macros in the container that this version was taken from.
         */
        macro?: Schema$Macro[];
        /**
         * Container version display name.
         */
        name?: string;
        /**
         * User notes on how to apply this container version in the container.
         */
        notes?: string;
        /**
         * The rules in the container that this version was taken from.
         */
        rule?: Schema$Rule[];
        /**
         * The tags in the container that this version was taken from.
         */
        tag?: Schema$Tag[];
        /**
         * The triggers in the container that this version was taken from.
         */
        trigger?: Schema$Trigger[];
        /**
         * The variables in the container that this version was taken from.
         */
        variable?: Schema$Variable[];
    }
    /**
     * Represents a Google Tag Manager Container Version Header.
     */
    interface Schema$ContainerVersionHeader {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string;
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean;
        /**
         * Container version display name.
         */
        name?: string;
        /**
         * Number of macros in the container version.
         */
        numMacros?: string;
        /**
         * Number of rules in the container version.
         */
        numRules?: string;
        /**
         * Number of tags in the container version.
         */
        numTags?: string;
        /**
         * Number of triggers in the container version.
         */
        numTriggers?: string;
        /**
         * Number of variables in the container version.
         */
        numVariables?: string;
    }
    /**
     * Options for new container versions.
     */
    interface Schema$CreateContainerVersionRequestVersionOptions {
        /**
         * The name of the container version to be created.
         */
        name?: string;
        /**
         * The notes of the container version to be created.
         */
        notes?: string;
        /**
         * The creation of this version may be for quick preview and shouldn&#39;t
         * be saved.
         */
        quickPreview?: boolean;
    }
    /**
     * Create container versions response.
     */
    interface Schema$CreateContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
    }
    /**
     * Represents a Google Tag Manager Environment. Note that a user can create,
     * delete and update environments of type USER, but can only update the
     * enable_debug and url fields of environments of other types.
     */
    interface Schema$Environment {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * The environment authorization code.
         */
        authorizationCode?: string;
        /**
         * The last update time-stamp for the authorization code.
         */
        authorizationTimestampMs?: string;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        containerVersionId?: string;
        /**
         * The environment description. Can be set or changed only on USER type
         * environments.
         */
        description?: string;
        /**
         * Whether or not to enable debug by default on for the environment.
         */
        enableDebug?: boolean;
        /**
         * GTM Environment ID uniquely identifies the GTM Environment.
         */
        environmentId?: string;
        /**
         * The fingerprint of the GTM environment as computed at storage time. This
         * value is recomputed whenever the environment is modified.
         */
        fingerprint?: string;
        /**
         * The environment display name. Can be set or changed only on USER type
         * environments.
         */
        name?: string;
        /**
         * The type of this environment.
         */
        type?: string;
        /**
         * Default preview page url for the environment.
         */
        url?: string;
    }
    /**
     * Represents a Google Tag Manager Folder.
     */
    interface Schema$Folder {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * The fingerprint of the GTM Folder as computed at storage time. This value
         * is recomputed whenever the folder is modified.
         */
        fingerprint?: string;
        /**
         * The Folder ID uniquely identifies the GTM Folder.
         */
        folderId?: string;
        /**
         * Folder display name.
         */
        name?: string;
    }
    /**
     * Represents a Google Tag Manager Folder&#39;s contents.
     */
    interface Schema$FolderEntities {
        /**
         * The list of tags inside the folder.
         */
        tag?: Schema$Tag[];
        /**
         * The list of triggers inside the folder.
         */
        trigger?: Schema$Trigger[];
        /**
         * The list of variables inside the folder.
         */
        variable?: Schema$Variable[];
    }
    /**
     * List Accounts Response.
     */
    interface Schema$ListAccountsResponse {
        /**
         * List of GTM Accounts that a user has access to.
         */
        accounts?: Schema$Account[];
    }
    /**
     * List AccountUsers Response.
     */
    interface Schema$ListAccountUsersResponse {
        /**
         * All GTM AccountUsers of a GTM Account.
         */
        userAccess?: Schema$UserAccess[];
    }
    /**
     * List Containers Response.
     */
    interface Schema$ListContainersResponse {
        /**
         * All Containers of a GTM Account.
         */
        containers?: Schema$Container[];
    }
    /**
     * List container versions response.
     */
    interface Schema$ListContainerVersionsResponse {
        /**
         * All versions of a GTM Container.
         */
        containerVersion?: Schema$ContainerVersion[];
        /**
         * All container version headers of a GTM Container.
         */
        containerVersionHeader?: Schema$ContainerVersionHeader[];
    }
    /**
     * List Environments Response.
     */
    interface Schema$ListEnvironmentsResponse {
        /**
         * All Environments of a GTM Container.
         */
        environments?: Schema$Environment[];
    }
    /**
     * List Folders Response.
     */
    interface Schema$ListFoldersResponse {
        /**
         * All GTM Folders of a GTM Container.
         */
        folders?: Schema$Folder[];
    }
    /**
     * List Tags Response.
     */
    interface Schema$ListTagsResponse {
        /**
         * All GTM Tags of a GTM Container.
         */
        tags?: Schema$Tag[];
    }
    /**
     * List triggers response.
     */
    interface Schema$ListTriggersResponse {
        /**
         * All GTM Triggers of a GTM Container.
         */
        triggers?: Schema$Trigger[];
    }
    /**
     * List Variables Response.
     */
    interface Schema$ListVariablesResponse {
        /**
         * All GTM Variables of a GTM Container.
         */
        variables?: Schema$Variable[];
    }
    /**
     * Represents a Google Tag Manager Macro.
     */
    interface Schema$Macro {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * For mobile containers only: A list of rule IDs for disabling conditional
         * macros; the macro is enabled if one of the enabling rules is true while
         * all the disabling rules are false. Treated as an unordered set.
         */
        disablingRuleId?: string[];
        /**
         * For mobile containers only: A list of rule IDs for enabling conditional
         * macros; the macro is enabled if one of the enabling rules is true while
         * all the disabling rules are false. Treated as an unordered set.
         */
        enablingRuleId?: string[];
        /**
         * The fingerprint of the GTM Macro as computed at storage time. This value
         * is recomputed whenever the macro is modified.
         */
        fingerprint?: string;
        /**
         * The Macro ID uniquely identifies the GTM Macro.
         */
        macroId?: string;
        /**
         * Macro display name.
         */
        name?: string;
        /**
         * User notes on how to apply this macro in the container.
         */
        notes?: string;
        /**
         * The macro&#39;s parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string;
        /**
         * The end timestamp in milliseconds to schedule a macro.
         */
        scheduleEndMs?: string;
        /**
         * The start timestamp in milliseconds to schedule a macro.
         */
        scheduleStartMs?: string;
        /**
         * GTM Macro Type.
         */
        type?: string;
    }
    /**
     * Represents a Google Tag Manager Parameter.
     */
    interface Schema$Parameter {
        /**
         * The named key that uniquely identifies a parameter. Required for
         * top-level parameters, as well as map values. Ignored for list values.
         */
        key?: string;
        /**
         * This list parameter&#39;s parameters (keys will be ignored).
         */
        list?: Schema$Parameter[];
        /**
         * This map parameter&#39;s parameters (must have keys; keys must be
         * unique).
         */
        map?: Schema$Parameter[];
        /**
         * The parameter type. Valid values are:  - boolean: The value represents a
         * boolean, represented as &#39;true&#39; or &#39;false&#39;  - integer: The
         * value represents a 64-bit signed integer value, in base 10  - list: A
         * list of parameters should be specified  - map: A map of parameters should
         * be specified  - template: The value represents any text; this can include
         * variable references (even variable references that might return
         * non-string types)
         */
        type?: string;
        /**
         * A parameter&#39;s value (may contain variable references such as
         * &quot;{{myVariable}}&quot;) as appropriate to the specified type.
         */
        value?: string;
    }
    /**
     * Publish container version response.
     */
    interface Schema$PublishContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
    }
    /**
     * Represents a Google Tag Manager Rule.
     */
    interface Schema$Rule {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * The list of conditions that make up this rule (implicit AND between
         * them).
         */
        condition?: Schema$Condition[];
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * The fingerprint of the GTM Rule as computed at storage time. This value
         * is recomputed whenever the rule is modified.
         */
        fingerprint?: string;
        /**
         * Rule display name.
         */
        name?: string;
        /**
         * User notes on how to apply this rule in the container.
         */
        notes?: string;
        /**
         * The Rule ID uniquely identifies the GTM Rule.
         */
        ruleId?: string;
    }
    interface Schema$SetupTag {
        /**
         * If true, fire the main tag if and only if the setup tag fires
         * successfully. If false, fire the main tag regardless of setup tag firing
         * status.
         */
        stopOnSetupFailure?: boolean;
        /**
         * The name of the setup tag.
         */
        tagName?: string;
    }
    /**
     * Represents a Google Tag Manager Tag.
     */
    interface Schema$Tag {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * Blocking rule IDs. If any of the listed rules evaluate to true, the tag
         * will not fire.
         */
        blockingRuleId?: string[];
        /**
         * Blocking trigger IDs. If any of the listed triggers evaluate to true, the
         * tag will not fire.
         */
        blockingTriggerId?: string[];
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * The fingerprint of the GTM Tag as computed at storage time. This value is
         * recomputed whenever the tag is modified.
         */
        fingerprint?: string;
        /**
         * Firing rule IDs. A tag will fire when any of the listed rules are true
         * and all of its blockingRuleIds (if any specified) are false.
         */
        firingRuleId?: string[];
        /**
         * Firing trigger IDs. A tag will fire when any of the listed triggers are
         * true and all of its blockingTriggerIds (if any specified) are false.
         */
        firingTriggerId?: string[];
        /**
         * If set to true, this tag will only fire in the live environment (e.g. not
         * in preview or debug mode).
         */
        liveOnly?: boolean;
        /**
         * Tag display name.
         */
        name?: string;
        /**
         * User notes on how to apply this tag in the container.
         */
        notes?: string;
        /**
         * The tag&#39;s parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string;
        /**
         * True if the tag is paused.
         */
        paused?: boolean;
        /**
         * User defined numeric priority of the tag. Tags are fired asynchronously
         * in order of priority. Tags with higher numeric value fire first. A
         * tag&#39;s priority can be a positive or negative value. The default value
         * is 0.
         */
        priority?: Schema$Parameter;
        /**
         * The end timestamp in milliseconds to schedule a tag.
         */
        scheduleEndMs?: string;
        /**
         * The start timestamp in milliseconds to schedule a tag.
         */
        scheduleStartMs?: string;
        /**
         * The list of setup tags. Currently we only allow one.
         */
        setupTag?: Schema$SetupTag[];
        /**
         * Option to fire this tag.
         */
        tagFiringOption?: string;
        /**
         * The Tag ID uniquely identifies the GTM Tag.
         */
        tagId?: string;
        /**
         * The list of teardown tags. Currently we only allow one.
         */
        teardownTag?: Schema$TeardownTag[];
        /**
         * GTM Tag Type.
         */
        type?: string;
    }
    interface Schema$TeardownTag {
        /**
         * If true, fire the teardown tag if and only if the main tag fires
         * successfully. If false, fire the teardown tag regardless of main tag
         * firing status.
         */
        stopTeardownOnFailure?: boolean;
        /**
         * The name of the teardown tag.
         */
        tagName?: string;
    }
    /**
     * Represents a Google Tag Manager Trigger
     */
    interface Schema$Trigger {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * Used in the case of auto event tracking.
         */
        autoEventFilter?: Schema$Condition[];
        /**
         * Whether or not we should only fire tags if the form submit or link click
         * event is not cancelled by some other event handler (e.g. because of
         * validation). Only valid for Form Submission and Link Click triggers.
         */
        checkValidation?: Schema$Parameter;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * A visibility trigger minimum continuous visible time (in milliseconds).
         * Only valid for AMP Visibility trigger.
         */
        continuousTimeMinMilliseconds?: Schema$Parameter;
        /**
         * Used in the case of custom event, which is fired iff all Conditions are
         * true.
         */
        customEventFilter?: Schema$Condition[];
        /**
         * Name of the GTM event that is fired. Only valid for Timer triggers.
         */
        eventName?: Schema$Parameter;
        /**
         * The trigger will only fire iff all Conditions are true.
         */
        filter?: Schema$Condition[];
        /**
         * The fingerprint of the GTM Trigger as computed at storage time. This
         * value is recomputed whenever the trigger is modified.
         */
        fingerprint?: string;
        /**
         * List of integer percentage values for scroll triggers. The trigger will
         * fire when each percentage is reached when the view is scrolled
         * horizontally. Only valid for AMP scroll triggers.
         */
        horizontalScrollPercentageList?: Schema$Parameter;
        /**
         * Time between triggering recurring Timer Events (in milliseconds). Only
         * valid for Timer triggers.
         */
        interval?: Schema$Parameter;
        /**
         * Time between Timer Events to fire (in seconds). Only valid for AMP Timer
         * trigger.
         */
        intervalSeconds?: Schema$Parameter;
        /**
         * Limit of the number of GTM events this Timer Trigger will fire. If no
         * limit is set, we will continue to fire GTM events until the user leaves
         * the page. Only valid for Timer triggers.
         */
        limit?: Schema$Parameter;
        /**
         * Max time to fire Timer Events (in seconds). Only valid for AMP Timer
         * trigger.
         */
        maxTimerLengthSeconds?: Schema$Parameter;
        /**
         * Trigger display name.
         */
        name?: string;
        /**
         * Additional parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string;
        /**
         * A click trigger CSS selector (i.e. &quot;a&quot;, &quot;button&quot;
         * etc.). Only valid for AMP Click trigger.
         */
        selector?: Schema$Parameter;
        /**
         * A visibility trigger minimum total visible time (in milliseconds). Only
         * valid for AMP Visibility trigger.
         */
        totalTimeMinMilliseconds?: Schema$Parameter;
        /**
         * The Trigger ID uniquely identifies the GTM Trigger.
         */
        triggerId?: string;
        /**
         * Defines the data layer event that causes this trigger.
         */
        type?: string;
        /**
         * Globally unique id of the trigger that auto-generates this (a Form
         * Submit, Link Click or Timer listener) if any. Used to make incompatible
         * auto-events work together with trigger filtering based on trigger ids.
         * This value is populated during output generation since the tags implied
         * by triggers don&#39;t exist until then. Only valid for Form Submit, Link
         * Click and Timer triggers.
         */
        uniqueTriggerId?: Schema$Parameter;
        /**
         * List of integer percentage values for scroll triggers. The trigger will
         * fire when each percentage is reached when the view is scrolled
         * vertically. Only valid for AMP scroll triggers.
         */
        verticalScrollPercentageList?: Schema$Parameter;
        /**
         * A visibility trigger CSS selector (i.e. &quot;#id&quot;). Only valid for
         * AMP Visibility trigger.
         */
        visibilitySelector?: Schema$Parameter;
        /**
         * A visibility trigger maximum percent visibility. Only valid for AMP
         * Visibility trigger.
         */
        visiblePercentageMax?: Schema$Parameter;
        /**
         * A visibility trigger minimum percent visibility. Only valid for AMP
         * Visibility trigger.
         */
        visiblePercentageMin?: Schema$Parameter;
        /**
         * Whether or not we should delay the form submissions or link opening until
         * all of the tags have fired (by preventing the default action and later
         * simulating the default action). Only valid for Form Submission and Link
         * Click triggers.
         */
        waitForTags?: Schema$Parameter;
        /**
         * How long to wait (in milliseconds) for tags to fire when
         * &#39;waits_for_tags&#39; above evaluates to true. Only valid for Form
         * Submission and Link Click triggers.
         */
        waitForTagsTimeout?: Schema$Parameter;
    }
    /**
     * Represents a user&#39;s permissions to an account and its container.
     */
    interface Schema$UserAccess {
        /**
         * GTM Account access permissions.
         */
        accountAccess?: Schema$AccountAccess;
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * GTM Container access permissions.
         */
        containerAccess?: Schema$ContainerAccess[];
        /**
         * User&#39;s email address.
         */
        emailAddress?: string;
        /**
         * Account Permission ID.
         */
        permissionId?: string;
    }
    /**
     * Represents a Google Tag Manager Variable.
     */
    interface Schema$Variable {
        /**
         * GTM Account ID.
         */
        accountId?: string;
        /**
         * GTM Container ID.
         */
        containerId?: string;
        /**
         * For mobile containers only: A list of trigger IDs for disabling
         * conditional variables; the variable is enabled if one of the enabling
         * trigger is true while all the disabling trigger are false. Treated as an
         * unordered set.
         */
        disablingTriggerId?: string[];
        /**
         * For mobile containers only: A list of trigger IDs for enabling
         * conditional variables; the variable is enabled if one of the enabling
         * triggers is true while all the disabling triggers are false. Treated as
         * an unordered set.
         */
        enablingTriggerId?: string[];
        /**
         * The fingerprint of the GTM Variable as computed at storage time. This
         * value is recomputed whenever the variable is modified.
         */
        fingerprint?: string;
        /**
         * Variable display name.
         */
        name?: string;
        /**
         * User notes on how to apply this variable in the container.
         */
        notes?: string;
        /**
         * The variable&#39;s parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string;
        /**
         * The end timestamp in milliseconds to schedule a variable.
         */
        scheduleEndMs?: string;
        /**
         * The start timestamp in milliseconds to schedule a variable.
         */
        scheduleStartMs?: string;
        /**
         * GTM Variable Type.
         */
        type?: string;
        /**
         * The Variable ID uniquely identifies the GTM Variable.
         */
        variableId?: string;
    }
    class Resource$Accounts {
        root: Tagmanager;
        containers: Resource$Accounts$Containers;
        permissions: Resource$Accounts$Permissions;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.get
         * @desc Gets a GTM Account.
         * @alias tagmanager.accounts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): AxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * tagmanager.accounts.list
         * @desc Lists all GTM Accounts that a user has access to.
         * @alias tagmanager.accounts.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): AxiosPromise<Schema$ListAccountsResponse>;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountsResponse>, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        /**
         * tagmanager.accounts.update
         * @desc Updates a GTM Account.
         * @alias tagmanager.accounts.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the account in storage.
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): AxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    interface Params$Resource$Accounts$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
    }
    interface Params$Resource$Accounts$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Accounts$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the account
         * in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    class Resource$Accounts$Containers {
        root: Tagmanager;
        environments: Resource$Accounts$Containers$Environments;
        folders: Resource$Accounts$Containers$Folders;
        move_folders: Resource$Accounts$Containers$Move_folders;
        reauthorize_environments: Resource$Accounts$Containers$Reauthorize_environments;
        tags: Resource$Accounts$Containers$Tags;
        triggers: Resource$Accounts$Containers$Triggers;
        variables: Resource$Accounts$Containers$Variables;
        versions: Resource$Accounts$Containers$Versions;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.create
         * @desc Creates a Container.
         * @alias tagmanager.accounts.containers.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {().Container} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Create, options?: MethodOptions): AxiosPromise<Schema$Container>;
        create(params: Params$Resource$Accounts$Containers$Create, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        create(params: Params$Resource$Accounts$Containers$Create, callback: BodyResponseCallback<Schema$Container>): void;
        create(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * tagmanager.accounts.containers.delete
         * @desc Deletes a Container.
         * @alias tagmanager.accounts.containers.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.get
         * @desc Gets a Container.
         * @alias tagmanager.accounts.containers.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Get, options?: MethodOptions): AxiosPromise<Schema$Container>;
        get(params: Params$Resource$Accounts$Containers$Get, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        get(params: Params$Resource$Accounts$Containers$Get, callback: BodyResponseCallback<Schema$Container>): void;
        get(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * tagmanager.accounts.containers.list
         * @desc Lists all Containers that belongs to a GTM Account.
         * @alias tagmanager.accounts.containers.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$List, options?: MethodOptions): AxiosPromise<Schema$ListContainersResponse>;
        list(params: Params$Resource$Accounts$Containers$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainersResponse>, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$List, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        /**
         * tagmanager.accounts.containers.update
         * @desc Updates a Container.
         * @alias tagmanager.accounts.containers.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the container in storage.
         * @param {().Container} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Update, options?: MethodOptions): AxiosPromise<Schema$Container>;
        update(params: Params$Resource$Accounts$Containers$Update, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        update(params: Params$Resource$Accounts$Containers$Update, callback: BodyResponseCallback<Schema$Container>): void;
        update(callback: BodyResponseCallback<Schema$Container>): void;
    }
    interface Params$Resource$Accounts$Containers$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    interface Params$Resource$Accounts$Containers$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
    }
    interface Params$Resource$Accounts$Containers$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * container in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    class Resource$Accounts$Containers$Environments {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.environments.create
         * @desc Creates a GTM Environment.
         * @alias tagmanager.accounts.containers.environments.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Environments$Create, options?: MethodOptions): AxiosPromise<Schema$Environment>;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, callback: BodyResponseCallback<Schema$Environment>): void;
        create(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * tagmanager.accounts.containers.environments.delete
         * @desc Deletes a GTM Environment.
         * @alias tagmanager.accounts.containers.environments.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.environmentId The GTM Environment ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Environments$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.environments.get
         * @desc Gets a GTM Environment.
         * @alias tagmanager.accounts.containers.environments.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.environmentId The GTM Environment ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Environments$Get, options?: MethodOptions): AxiosPromise<Schema$Environment>;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, callback: BodyResponseCallback<Schema$Environment>): void;
        get(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * tagmanager.accounts.containers.environments.list
         * @desc Lists all GTM Environments of a GTM Container.
         * @alias tagmanager.accounts.containers.environments.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Environments$List, options?: MethodOptions): AxiosPromise<Schema$ListEnvironmentsResponse>;
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: MethodOptions | BodyResponseCallback<Schema$ListEnvironmentsResponse>, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Environments$List, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        /**
         * tagmanager.accounts.containers.environments.patch
         * @desc Updates a GTM Environment. This method supports patch semantics.
         * @alias tagmanager.accounts.containers.environments.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.environmentId The GTM Environment ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the environment in storage.
         * @param {().Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Accounts$Containers$Environments$Patch, options?: MethodOptions): AxiosPromise<Schema$Environment>;
        patch(params: Params$Resource$Accounts$Containers$Environments$Patch, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        patch(params: Params$Resource$Accounts$Containers$Environments$Patch, callback: BodyResponseCallback<Schema$Environment>): void;
        patch(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * tagmanager.accounts.containers.environments.update
         * @desc Updates a GTM Environment.
         * @alias tagmanager.accounts.containers.environments.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.environmentId The GTM Environment ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the environment in storage.
         * @param {().Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Environments$Update, options?: MethodOptions): AxiosPromise<Schema$Environment>;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, callback: BodyResponseCallback<Schema$Environment>): void;
        update(callback: BodyResponseCallback<Schema$Environment>): void;
    }
    interface Params$Resource$Accounts$Containers$Environments$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    interface Params$Resource$Accounts$Containers$Environments$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
    }
    interface Params$Resource$Accounts$Containers$Environments$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
    }
    interface Params$Resource$Accounts$Containers$Environments$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Environments$Patch {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * environment in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    interface Params$Resource$Accounts$Containers$Environments$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * environment in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    class Resource$Accounts$Containers$Folders {
        root: Tagmanager;
        entities: Resource$Accounts$Containers$Folders$Entities;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.folders.create
         * @desc Creates a GTM Folder.
         * @alias tagmanager.accounts.containers.folders.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().Folder} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Folders$Create, options?: MethodOptions): AxiosPromise<Schema$Folder>;
        create(params: Params$Resource$Accounts$Containers$Folders$Create, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        create(params: Params$Resource$Accounts$Containers$Folders$Create, callback: BodyResponseCallback<Schema$Folder>): void;
        create(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * tagmanager.accounts.containers.folders.delete
         * @desc Deletes a GTM Folder.
         * @alias tagmanager.accounts.containers.folders.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.folderId The GTM Folder ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Folders$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Folders$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.folders.get
         * @desc Gets a GTM Folder.
         * @alias tagmanager.accounts.containers.folders.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.folderId The GTM Folder ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Folders$Get, options?: MethodOptions): AxiosPromise<Schema$Folder>;
        get(params: Params$Resource$Accounts$Containers$Folders$Get, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        get(params: Params$Resource$Accounts$Containers$Folders$Get, callback: BodyResponseCallback<Schema$Folder>): void;
        get(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * tagmanager.accounts.containers.folders.list
         * @desc Lists all GTM Folders of a Container.
         * @alias tagmanager.accounts.containers.folders.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Folders$List, options?: MethodOptions): AxiosPromise<Schema$ListFoldersResponse>;
        list(params: Params$Resource$Accounts$Containers$Folders$List, options: MethodOptions | BodyResponseCallback<Schema$ListFoldersResponse>, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$List, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        /**
         * tagmanager.accounts.containers.folders.update
         * @desc Updates a GTM Folder.
         * @alias tagmanager.accounts.containers.folders.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the folder in storage.
         * @param {string} params.folderId The GTM Folder ID.
         * @param {().Folder} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Folders$Update, options?: MethodOptions): AxiosPromise<Schema$Folder>;
        update(params: Params$Resource$Accounts$Containers$Folders$Update, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        update(params: Params$Resource$Accounts$Containers$Folders$Update, callback: BodyResponseCallback<Schema$Folder>): void;
        update(callback: BodyResponseCallback<Schema$Folder>): void;
    }
    interface Params$Resource$Accounts$Containers$Folders$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    interface Params$Resource$Accounts$Containers$Folders$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    interface Params$Resource$Accounts$Containers$Folders$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    interface Params$Resource$Accounts$Containers$Folders$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Folders$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the folder
         * in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    class Resource$Accounts$Containers$Folders$Entities {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.folders.entities.list
         * @desc List all entities in a GTM Folder.
         * @alias tagmanager.accounts.containers.folders.entities.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.folderId The GTM Folder ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Folders$Entities$List, options?: MethodOptions): AxiosPromise<Schema$FolderEntities>;
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, options: MethodOptions | BodyResponseCallback<Schema$FolderEntities>, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        list(params: Params$Resource$Accounts$Containers$Folders$Entities$List, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        list(callback: BodyResponseCallback<Schema$FolderEntities>): void;
    }
    interface Params$Resource$Accounts$Containers$Folders$Entities$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
    }
    class Resource$Accounts$Containers$Move_folders {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.move_folders.update
         * @desc Moves entities to a GTM Folder.
         * @alias tagmanager.accounts.containers.move_folders.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.folderId The GTM Folder ID.
         * @param {string=} params.tagId The tags to be moved to the folder.
         * @param {string=} params.triggerId The triggers to be moved to the folder.
         * @param {string=} params.variableId The variables to be moved to the
         *     folder.
         * @param {().Folder} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Move_folders$Update, options?: MethodOptions): AxiosPromise<void>;
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        update(params: Params$Resource$Accounts$Containers$Move_folders$Update, callback: BodyResponseCallback<void>): void;
        update(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Accounts$Containers$Move_folders$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Folder ID.
         */
        folderId?: string;
        /**
         * The tags to be moved to the folder.
         */
        tagId?: string;
        /**
         * The triggers to be moved to the folder.
         */
        triggerId?: string;
        /**
         * The variables to be moved to the folder.
         */
        variableId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    class Resource$Accounts$Containers$Reauthorize_environments {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.reauthorize_environments.update
         * @desc Re-generates the authorization code for a GTM Environment.
         * @alias tagmanager.accounts.containers.reauthorize_environments.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.environmentId The GTM Environment ID.
         * @param {().Environment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options?: MethodOptions): AxiosPromise<Schema$Environment>;
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        update(params: Params$Resource$Accounts$Containers$Reauthorize_environments$Update, callback: BodyResponseCallback<Schema$Environment>): void;
        update(callback: BodyResponseCallback<Schema$Environment>): void;
    }
    interface Params$Resource$Accounts$Containers$Reauthorize_environments$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Environment ID.
         */
        environmentId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    class Resource$Accounts$Containers$Tags {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.tags.create
         * @desc Creates a GTM Tag.
         * @alias tagmanager.accounts.containers.tags.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().Tag} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Tags$Create, options?: MethodOptions): AxiosPromise<Schema$Tag>;
        create(params: Params$Resource$Accounts$Containers$Tags$Create, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        create(params: Params$Resource$Accounts$Containers$Tags$Create, callback: BodyResponseCallback<Schema$Tag>): void;
        create(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * tagmanager.accounts.containers.tags.delete
         * @desc Deletes a GTM Tag.
         * @alias tagmanager.accounts.containers.tags.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.tagId The GTM Tag ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Tags$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Tags$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.tags.get
         * @desc Gets a GTM Tag.
         * @alias tagmanager.accounts.containers.tags.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.tagId The GTM Tag ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Tags$Get, options?: MethodOptions): AxiosPromise<Schema$Tag>;
        get(params: Params$Resource$Accounts$Containers$Tags$Get, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        get(params: Params$Resource$Accounts$Containers$Tags$Get, callback: BodyResponseCallback<Schema$Tag>): void;
        get(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * tagmanager.accounts.containers.tags.list
         * @desc Lists all GTM Tags of a Container.
         * @alias tagmanager.accounts.containers.tags.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Tags$List, options?: MethodOptions): AxiosPromise<Schema$ListTagsResponse>;
        list(params: Params$Resource$Accounts$Containers$Tags$List, options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Tags$List, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        /**
         * tagmanager.accounts.containers.tags.update
         * @desc Updates a GTM Tag.
         * @alias tagmanager.accounts.containers.tags.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the tag in storage.
         * @param {string} params.tagId The GTM Tag ID.
         * @param {().Tag} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Tags$Update, options?: MethodOptions): AxiosPromise<Schema$Tag>;
        update(params: Params$Resource$Accounts$Containers$Tags$Update, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        update(params: Params$Resource$Accounts$Containers$Tags$Update, callback: BodyResponseCallback<Schema$Tag>): void;
        update(callback: BodyResponseCallback<Schema$Tag>): void;
    }
    interface Params$Resource$Accounts$Containers$Tags$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    interface Params$Resource$Accounts$Containers$Tags$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
    }
    interface Params$Resource$Accounts$Containers$Tags$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
    }
    interface Params$Resource$Accounts$Containers$Tags$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Tags$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in
         * storage.
         */
        fingerprint?: string;
        /**
         * The GTM Tag ID.
         */
        tagId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    class Resource$Accounts$Containers$Triggers {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.triggers.create
         * @desc Creates a GTM Trigger.
         * @alias tagmanager.accounts.containers.triggers.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().Trigger} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Triggers$Create, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(params: Params$Resource$Accounts$Containers$Triggers$Create, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * tagmanager.accounts.containers.triggers.delete
         * @desc Deletes a GTM Trigger.
         * @alias tagmanager.accounts.containers.triggers.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.triggerId The GTM Trigger ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Triggers$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Triggers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.triggers.get
         * @desc Gets a GTM Trigger.
         * @alias tagmanager.accounts.containers.triggers.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.triggerId The GTM Trigger ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Triggers$Get, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(params: Params$Resource$Accounts$Containers$Triggers$Get, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * tagmanager.accounts.containers.triggers.list
         * @desc Lists all GTM Triggers of a Container.
         * @alias tagmanager.accounts.containers.triggers.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Triggers$List, options?: MethodOptions): AxiosPromise<Schema$ListTriggersResponse>;
        list(params: Params$Resource$Accounts$Containers$Triggers$List, options: MethodOptions | BodyResponseCallback<Schema$ListTriggersResponse>, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Triggers$List, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        /**
         * tagmanager.accounts.containers.triggers.update
         * @desc Updates a GTM Trigger.
         * @alias tagmanager.accounts.containers.triggers.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the trigger in storage.
         * @param {string} params.triggerId The GTM Trigger ID.
         * @param {().Trigger} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Triggers$Update, options?: MethodOptions): AxiosPromise<Schema$Trigger>;
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(params: Params$Resource$Accounts$Containers$Triggers$Update, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(callback: BodyResponseCallback<Schema$Trigger>): void;
    }
    interface Params$Resource$Accounts$Containers$Triggers$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    interface Params$Resource$Accounts$Containers$Triggers$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Triggers$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Triggers$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Triggers$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger
         * in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Trigger ID.
         */
        triggerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    class Resource$Accounts$Containers$Variables {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.variables.create
         * @desc Creates a GTM Variable.
         * @alias tagmanager.accounts.containers.variables.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().Variable} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Variables$Create, options?: MethodOptions): AxiosPromise<Schema$Variable>;
        create(params: Params$Resource$Accounts$Containers$Variables$Create, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        create(params: Params$Resource$Accounts$Containers$Variables$Create, callback: BodyResponseCallback<Schema$Variable>): void;
        create(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * tagmanager.accounts.containers.variables.delete
         * @desc Deletes a GTM Variable.
         * @alias tagmanager.accounts.containers.variables.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.variableId The GTM Variable ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Variables$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.variables.get
         * @desc Gets a GTM Variable.
         * @alias tagmanager.accounts.containers.variables.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.variableId The GTM Variable ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Variables$Get, options?: MethodOptions): AxiosPromise<Schema$Variable>;
        get(params: Params$Resource$Accounts$Containers$Variables$Get, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        get(params: Params$Resource$Accounts$Containers$Variables$Get, callback: BodyResponseCallback<Schema$Variable>): void;
        get(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * tagmanager.accounts.containers.variables.list
         * @desc Lists all GTM Variables of a Container.
         * @alias tagmanager.accounts.containers.variables.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Variables$List, options?: MethodOptions): AxiosPromise<Schema$ListVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListVariablesResponse>, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Variables$List, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        /**
         * tagmanager.accounts.containers.variables.update
         * @desc Updates a GTM Variable.
         * @alias tagmanager.accounts.containers.variables.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the variable in storage.
         * @param {string} params.variableId The GTM Variable ID.
         * @param {().Variable} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Variables$Update, options?: MethodOptions): AxiosPromise<Schema$Variable>;
        update(params: Params$Resource$Accounts$Containers$Variables$Update, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        update(params: Params$Resource$Accounts$Containers$Variables$Update, callback: BodyResponseCallback<Schema$Variable>): void;
        update(callback: BodyResponseCallback<Schema$Variable>): void;
    }
    interface Params$Resource$Accounts$Containers$Variables$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    interface Params$Resource$Accounts$Containers$Variables$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
    }
    interface Params$Resource$Accounts$Containers$Variables$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
    }
    interface Params$Resource$Accounts$Containers$Variables$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
    }
    interface Params$Resource$Accounts$Containers$Variables$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * variable in storage.
         */
        fingerprint?: string;
        /**
         * The GTM Variable ID.
         */
        variableId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    class Resource$Accounts$Containers$Versions {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.containers.versions.create
         * @desc Creates a Container Version.
         * @alias tagmanager.accounts.containers.versions.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {().CreateContainerVersionRequestVersionOptions} params.resource
         *     Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Containers$Versions$Create, options?: MethodOptions): AxiosPromise<Schema$CreateContainerVersionResponse>;
        create(params: Params$Resource$Accounts$Containers$Versions$Create, options: MethodOptions | BodyResponseCallback<Schema$CreateContainerVersionResponse>, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create(params: Params$Resource$Accounts$Containers$Versions$Create, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create(callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        /**
         * tagmanager.accounts.containers.versions.delete
         * @desc Deletes a Container Version.
         * @alias tagmanager.accounts.containers.versions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Containers$Versions$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.containers.versions.get
         * @desc Gets a Container Version.
         * @alias tagmanager.accounts.containers.versions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         *     Specify published to retrieve the currently published version.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Containers$Versions$Get, options?: MethodOptions): AxiosPromise<Schema$ContainerVersion>;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * tagmanager.accounts.containers.versions.list
         * @desc Lists all Container Versions of a GTM Container.
         * @alias tagmanager.accounts.containers.versions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {boolean=} params.headers Retrieve headers only when true.
         * @param {boolean=} params.includeDeleted Also retrieve deleted (archived)
         *     versions when true.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Containers$Versions$List, options?: MethodOptions): AxiosPromise<Schema$ListContainerVersionsResponse>;
        list(params: Params$Resource$Accounts$Containers$Versions$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainerVersionsResponse>, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Versions$List, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        /**
         * tagmanager.accounts.containers.versions.publish
         * @desc Publishes a Container Version.
         * @alias tagmanager.accounts.containers.versions.publish
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the container version in storage.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        publish(params?: Params$Resource$Accounts$Containers$Versions$Publish, options?: MethodOptions): AxiosPromise<Schema$PublishContainerVersionResponse>;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: MethodOptions | BodyResponseCallback<Schema$PublishContainerVersionResponse>, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        /**
         * tagmanager.accounts.containers.versions.restore
         * @desc Restores a Container Version. This will overwrite the container's
         * current configuration (including its variables, triggers and tags). The
         * operation will not have any effect on the version that is being served
         * (i.e. the published version).
         * @alias tagmanager.accounts.containers.versions.restore
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restore(params?: Params$Resource$Accounts$Containers$Versions$Restore, options?: MethodOptions): AxiosPromise<Schema$ContainerVersion>;
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        restore(params: Params$Resource$Accounts$Containers$Versions$Restore, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        restore(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * tagmanager.accounts.containers.versions.undelete
         * @desc Undeletes a Container Version.
         * @alias tagmanager.accounts.containers.versions.undelete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        undelete(params?: Params$Resource$Accounts$Containers$Versions$Undelete, options?: MethodOptions): AxiosPromise<Schema$ContainerVersion>;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * tagmanager.accounts.containers.versions.update
         * @desc Updates a Container Version.
         * @alias tagmanager.accounts.containers.versions.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.containerId The GTM Container ID.
         * @param {string} params.containerVersionId The GTM Container Version ID.
         * @param {string=} params.fingerprint When provided, this fingerprint must
         *     match the fingerprint of the container version in storage.
         * @param {().ContainerVersion} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Containers$Versions$Update, options?: MethodOptions): AxiosPromise<Schema$ContainerVersion>;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    }
    interface Params$Resource$Accounts$Containers$Versions$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateContainerVersionRequestVersionOptions;
    }
    interface Params$Resource$Accounts$Containers$Versions$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    interface Params$Resource$Accounts$Containers$Versions$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID. Specify published to retrieve the currently
         * published version.
         */
        containerVersionId?: string;
    }
    interface Params$Resource$Accounts$Containers$Versions$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * Retrieve headers only when true.
         */
        headers?: boolean;
        /**
         * Also retrieve deleted (archived) versions when true.
         */
        includeDeleted?: boolean;
    }
    interface Params$Resource$Accounts$Containers$Versions$Publish {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * container version in storage.
         */
        fingerprint?: string;
    }
    interface Params$Resource$Accounts$Containers$Versions$Restore {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    interface Params$Resource$Accounts$Containers$Versions$Undelete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
    }
    interface Params$Resource$Accounts$Containers$Versions$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM Container ID.
         */
        containerId?: string;
        /**
         * The GTM Container Version ID.
         */
        containerVersionId?: string;
        /**
         * When provided, this fingerprint must match the fingerprint of the
         * container version in storage.
         */
        fingerprint?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContainerVersion;
    }
    class Resource$Accounts$Permissions {
        root: Tagmanager;
        constructor(root: Tagmanager);
        getRoot(): Tagmanager;
        /**
         * tagmanager.accounts.permissions.create
         * @desc Creates a user's Account & Container Permissions.
         * @alias tagmanager.accounts.permissions.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {().UserAccess} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Accounts$Permissions$Create, options?: MethodOptions): AxiosPromise<Schema$UserAccess>;
        create(params: Params$Resource$Accounts$Permissions$Create, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        create(params: Params$Resource$Accounts$Permissions$Create, callback: BodyResponseCallback<Schema$UserAccess>): void;
        create(callback: BodyResponseCallback<Schema$UserAccess>): void;
        /**
         * tagmanager.accounts.permissions.delete
         * @desc Removes a user from the account, revoking access to it and all of
         * its containers.
         * @alias tagmanager.accounts.permissions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.permissionId The GTM User ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Permissions$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Permissions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Permissions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tagmanager.accounts.permissions.get
         * @desc Gets a user's Account & Container Permissions.
         * @alias tagmanager.accounts.permissions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.permissionId The GTM User ID.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Permissions$Get, options?: MethodOptions): AxiosPromise<Schema$UserAccess>;
        get(params: Params$Resource$Accounts$Permissions$Get, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        get(params: Params$Resource$Accounts$Permissions$Get, callback: BodyResponseCallback<Schema$UserAccess>): void;
        get(callback: BodyResponseCallback<Schema$UserAccess>): void;
        /**
         * tagmanager.accounts.permissions.list
         * @desc List all users that have access to the account along with Account
         * and Container Permissions granted to each of them.
         * @alias tagmanager.accounts.permissions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID. @required
         *     tagmanager.accounts.permissions.list
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Permissions$List, options?: MethodOptions): AxiosPromise<Schema$ListAccountUsersResponse>;
        list(params: Params$Resource$Accounts$Permissions$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountUsersResponse>, callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        list(params: Params$Resource$Accounts$Permissions$List, callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountUsersResponse>): void;
        /**
         * tagmanager.accounts.permissions.update
         * @desc Updates a user's Account & Container Permissions.
         * @alias tagmanager.accounts.permissions.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The GTM Account ID.
         * @param {string} params.permissionId The GTM User ID.
         * @param {().UserAccess} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Permissions$Update, options?: MethodOptions): AxiosPromise<Schema$UserAccess>;
        update(params: Params$Resource$Accounts$Permissions$Update, options: MethodOptions | BodyResponseCallback<Schema$UserAccess>, callback: BodyResponseCallback<Schema$UserAccess>): void;
        update(params: Params$Resource$Accounts$Permissions$Update, callback: BodyResponseCallback<Schema$UserAccess>): void;
        update(callback: BodyResponseCallback<Schema$UserAccess>): void;
    }
    interface Params$Resource$Accounts$Permissions$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserAccess;
    }
    interface Params$Resource$Accounts$Permissions$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
    }
    interface Params$Resource$Accounts$Permissions$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
    }
    interface Params$Resource$Accounts$Permissions$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID. @required tagmanager.accounts.permissions.list
         */
        accountId?: string;
    }
    interface Params$Resource$Accounts$Permissions$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The GTM Account ID.
         */
        accountId?: string;
        /**
         * The GTM User ID.
         */
        permissionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserAccess;
    }
}
