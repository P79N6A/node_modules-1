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
export declare namespace tpu_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    /**
     * Cloud TPU API
     *
     * TPU API provides customers with access to Google TPU technology.
     *
     * @example
     * const {google} = require('googleapis');
     * const tpu = google.tpu('v1');
     *
     * @namespace tpu
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Tpu
     */
    class Tpu {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * A accelerator type that a Node can be configured with.
     */
    interface Schema$AcceleratorType {
        /**
         * The resource name.
         */
        name?: string;
        /**
         * the accelerator type.
         */
        type?: string;
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
     * Response for ListAcceleratorTypes.
     */
    interface Schema$ListAcceleratorTypesResponse {
        /**
         * The listed nodes.
         */
        acceleratorTypes?: Schema$AcceleratorType[];
        /**
         * The next page token or empty if none.
         */
        nextPageToken?: string;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string;
    }
    /**
     * Response for ListNodes.
     */
    interface Schema$ListNodesResponse {
        /**
         * The next page token or empty if none.
         */
        nextPageToken?: string;
        /**
         * The listed nodes.
         */
        nodes?: Schema$Node[];
    }
    /**
     * The response message for Operations.ListOperations.
     */
    interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * Response for ListTensorFlowVersions.
     */
    interface Schema$ListTensorFlowVersionsResponse {
        /**
         * The next page token or empty if none.
         */
        nextPageToken?: string;
        /**
         * The listed nodes.
         */
        tensorflowVersions?: Schema$TensorFlowVersion[];
    }
    /**
     * A resource that represents Google Cloud Platform location.
     */
    interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For
         * example, &quot;Tokyo&quot;.
         */
        displayName?: string;
        /**
         * Cross-service attributes for the location. For example
         * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
         */
        labels?: any;
        /**
         * The canonical id for this location. For example: `&quot;us-east1&quot;`.
         */
        locationId?: string;
        /**
         * Service-specific metadata. For example the available capacity at the
         * given location.
         */
        metadata?: any;
        /**
         * Resource name for the location, which may vary between implementations.
         * For example: `&quot;projects/example-project/locations/us-east1&quot;`
         */
        name?: string;
    }
    /**
     * A network endpoint over which a TPU worker can be reached.
     */
    interface Schema$NetworkEndpoint {
        /**
         * The IP address of this network endpoint.
         */
        ipAddress?: string;
        /**
         * The port of this network endpoint.
         */
        port?: number;
    }
    /**
     * A TPU instance.
     */
    interface Schema$Node {
        /**
         * The type of hardware accelerators associated with this node. Required.
         */
        acceleratorType?: string;
        /**
         * The CIDR block that the TPU node will use when selecting an IP address.
         * This CIDR block must be a /29 block; the Compute Engine networks API
         * forbids a smaller block, and using a larger block would be wasteful (a
         * node can only consume one IP address). Errors will occur if the CIDR
         * block has already been used for a currently existing TPU node, the CIDR
         * block conflicts with any subnetworks in the user&#39;s provided network,
         * or the provided network is peered with another network that is using that
         * CIDR block. Required.
         */
        cidrBlock?: string;
        /**
         * Output only. The time when the node was created.
         */
        createTime?: string;
        /**
         * The user-supplied description of the TPU. Maximum of 512 characters.
         */
        description?: string;
        /**
         * The health status of the TPU node.
         */
        health?: string;
        /**
         * Output only. If this field is populated, it contains a description of why
         * the TPU Node is unhealthy.
         */
        healthDescription?: string;
        /**
         * Output only. DEPRECATED! Use network_endpoints instead. The network
         * address for the TPU Node as visible to Compute Engine instances.
         */
        ipAddress?: string;
        /**
         * Resource labels to represent user-provided metadata.
         */
        labels?: any;
        /**
         * Output only. The immutable name of the TPU
         */
        name?: string;
        /**
         * The name of a network they wish to peer the TPU node to. It must be a
         * preexisting Compute Engine network inside of the project on which this
         * API has been activated. If none is provided, &quot;default&quot; will be
         * used.
         */
        network?: string;
        /**
         * Output only. The network endpoints where TPU workers can be accessed and
         * sent work. It is recommended that Tensorflow clients of the node reach
         * out to the 0th entry in this map first.
         */
        networkEndpoints?: Schema$NetworkEndpoint[];
        /**
         * Output only. DEPRECATED! Use network_endpoints instead. The network port
         * for the TPU Node as visible to Compute Engine instances.
         */
        port?: string;
        schedulingConfig?: Schema$SchedulingConfig;
        /**
         * Output only. The service account used to run the tensor flow services
         * within the node. To share resources, including Google Cloud Storage data,
         * with the Tensorflow job running in the Node, this account must have
         * permissions to that data.
         */
        serviceAccount?: string;
        /**
         * Output only. The current state for the TPU Node.
         */
        state?: string;
        /**
         * The version of Tensorflow running in the Node. Required.
         */
        tensorflowVersion?: string;
    }
    /**
     * This resource represents a long-running operation that is the result of a
     * network API call.
     */
    interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If
         * `true`, the operation is completed, and either `error` or `response` is
         * available.
         */
        done?: boolean;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation.  It typically
         * contains progress information and common metadata such as create time.
         * Some services might not provide such metadata.  Any method that returns a
         * long-running operation should document the metadata type, if any.
         */
        metadata?: any;
        /**
         * The server-assigned name, which is only unique within the same service
         * that originally returns it. If you use the default HTTP mapping, the
         * `name` should have the format of `operations/some/unique/name`.
         */
        name?: string;
        /**
         * The normal response of the operation in case of success.  If the original
         * method returns no data on success, such as `Delete`, the response is
         * `google.protobuf.Empty`.  If the original method is standard
         * `Get`/`Create`/`Update`, the response should be the resource.  For other
         * methods, the response should have the type `XxxResponse`, where `Xxx` is
         * the original method name.  For example, if the original method name is
         * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: any;
    }
    /**
     * Represents the metadata of the long-running operation.
     */
    interface Schema$OperationMetadata {
        /**
         * [Output only] API version used to start the operation.
         */
        apiVersion?: string;
        /**
         * [Output only] Identifies whether the user has requested cancellation of
         * the operation. Operations that have successfully been cancelled have
         * Operation.error value with a google.rpc.Status.code of 1, corresponding
         * to `Code.CANCELLED`.
         */
        cancelRequested?: boolean;
        /**
         * [Output only] The time the operation was created.
         */
        createTime?: string;
        /**
         * [Output only] The time the operation finished running.
         */
        endTime?: string;
        /**
         * [Output only] Human-readable status of the operation, if any.
         */
        statusDetail?: string;
        /**
         * [Output only] Server-defined resource path for the target of the
         * operation.
         */
        target?: string;
        /**
         * [Output only] Name of the verb executed by the operation.
         */
        verb?: string;
    }
    /**
     * Request for ReimageNode.
     */
    interface Schema$ReimageNodeRequest {
        /**
         * The version for reimage to create.
         */
        tensorflowVersion?: string;
    }
    interface Schema$SchedulingConfig {
        preemptible?: boolean;
    }
    /**
     * Request for StartNode.
     */
    interface Schema$StartNodeRequest {
    }
    /**
     * The `Status` type defines a logical error model that is suitable for
     * different programming environments, including REST APIs and RPC APIs. It is
     * used by [gRPC](https://github.com/grpc). The error model is designed to be:
     * - Simple to use and understand for most users - Flexible enough to meet
     * unexpected needs  # Overview  The `Status` message contains three pieces of
     * data: error code, error message, and error details. The error code should
     * be an enum value of google.rpc.Code, but it may accept additional error
     * codes if needed.  The error message should be a developer-facing English
     * message that helps developers *understand* and *resolve* the error. If a
     * localized user-facing error message is needed, put the localized message in
     * the error details or localize it in the client. The optional error details
     * may contain arbitrary information about the error. There is a predefined
     * set of error detail types in the package `google.rpc` that can be used for
     * common error conditions.  # Language mapping  The `Status` message is the
     * logical representation of the error model, but it is not necessarily the
     * actual wire format. When the `Status` message is exposed in different
     * client libraries and different wire protocols, it can be mapped
     * differently. For example, it will likely be mapped to some exceptions in
     * Java, but more likely mapped to some error codes in C.  # Other uses  The
     * error model and the `Status` message can be used in a variety of
     * environments, either with or without APIs, to provide a consistent
     * developer experience across different environments.  Example uses of this
     * error model include:  - Partial errors. If a service needs to return
     * partial errors to the client,     it may embed the `Status` in the normal
     * response to indicate the partial     errors.  - Workflow errors. A typical
     * workflow has multiple steps. Each step may     have a `Status` message for
     * error reporting.  - Batch operations. If a client uses batch request and
     * batch response, the     `Status` message should be used directly inside
     * batch response, one for     each error sub-response.  - Asynchronous
     * operations. If an API call embeds asynchronous operation     results in its
     * response, the status of those operations should be     represented directly
     * using the `Status` message.  - Logging. If some API errors are stored in
     * logs, the message `Status` could     be used directly after any stripping
     * needed for security/privacy reasons.
     */
    interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number;
        /**
         * A list of messages that carry the error details.  There is a common set
         * of message types for APIs to use.
         */
        details?: any[];
        /**
         * A developer-facing error message, which should be in English. Any
         * user-facing error message should be localized and sent in the
         * google.rpc.Status.details field, or localized by the client.
         */
        message?: string;
    }
    /**
     * Request for StopNode.
     */
    interface Schema$StopNodeRequest {
    }
    /**
     * A tensorflow version that a Node can be configured with.
     */
    interface Schema$TensorFlowVersion {
        /**
         * The resource name.
         */
        name?: string;
        /**
         * the tensorflow version.
         */
        version?: string;
    }
    class Resource$Projects {
        root: Tpu;
        locations: Resource$Projects$Locations;
        constructor(root: Tpu);
        getRoot(): Tpu;
    }
    class Resource$Projects$Locations {
        root: Tpu;
        acceleratorTypes: Resource$Projects$Locations$Acceleratortypes;
        nodes: Resource$Projects$Locations$Nodes;
        operations: Resource$Projects$Locations$Operations;
        tensorflowVersions: Resource$Projects$Locations$Tensorflowversions;
        constructor(root: Tpu);
        getRoot(): Tpu;
        /**
         * tpu.projects.locations.get
         * @desc Gets information about a location.
         * @alias tpu.projects.locations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Resource name for the location.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): AxiosPromise<Schema$Location>;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * tpu.projects.locations.list
         * @desc Lists information about the supported locations for this service.
         * @alias tpu.projects.locations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The resource that owns the locations
         *     collection, if applicable.
         * @param {integer=} params.pageSize The standard list page size.
         * @param {string=} params.pageToken The standard list page token.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): AxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    class Resource$Projects$Locations$Acceleratortypes {
        root: Tpu;
        constructor(root: Tpu);
        getRoot(): Tpu;
        /**
         * tpu.projects.locations.acceleratorTypes.get
         * @desc Gets AcceleratorType.
         * @alias tpu.projects.locations.acceleratorTypes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Acceleratortypes$Get, options?: MethodOptions): AxiosPromise<Schema$AcceleratorType>;
        get(params: Params$Resource$Projects$Locations$Acceleratortypes$Get, options: MethodOptions | BodyResponseCallback<Schema$AcceleratorType>, callback: BodyResponseCallback<Schema$AcceleratorType>): void;
        get(params: Params$Resource$Projects$Locations$Acceleratortypes$Get, callback: BodyResponseCallback<Schema$AcceleratorType>): void;
        get(callback: BodyResponseCallback<Schema$AcceleratorType>): void;
        /**
         * tpu.projects.locations.acceleratorTypes.list
         * @desc Lists accelerator types supported by this API.
         * @alias tpu.projects.locations.acceleratorTypes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter List filter.
         * @param {string=} params.orderBy Sort results.
         * @param {integer=} params.pageSize The maximum number of items to return.
         * @param {string=} params.pageToken The next_page_token value returned from
         *     a previous List request, if any.
         * @param {string} params.parent The parent resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Acceleratortypes$List, options?: MethodOptions): AxiosPromise<Schema$ListAcceleratorTypesResponse>;
        list(params: Params$Resource$Projects$Locations$Acceleratortypes$List, options: MethodOptions | BodyResponseCallback<Schema$ListAcceleratorTypesResponse>, callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Acceleratortypes$List, callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAcceleratorTypesResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Acceleratortypes$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Acceleratortypes$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results.
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
    }
    class Resource$Projects$Locations$Nodes {
        root: Tpu;
        constructor(root: Tpu);
        getRoot(): Tpu;
        /**
         * tpu.projects.locations.nodes.create
         * @desc Creates a node.
         * @alias tpu.projects.locations.nodes.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.nodeId The unqualified resource name.
         * @param {string} params.parent The parent resource name.
         * @param {().Node} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Locations$Nodes$Create, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Nodes$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Nodes$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * tpu.projects.locations.nodes.delete
         * @desc Deletes a node.
         * @alias tpu.projects.locations.nodes.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Nodes$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Nodes$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Nodes$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * tpu.projects.locations.nodes.get
         * @desc Gets the details of a node.
         * @alias tpu.projects.locations.nodes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Nodes$Get, options?: MethodOptions): AxiosPromise<Schema$Node>;
        get(params: Params$Resource$Projects$Locations$Nodes$Get, options: MethodOptions | BodyResponseCallback<Schema$Node>, callback: BodyResponseCallback<Schema$Node>): void;
        get(params: Params$Resource$Projects$Locations$Nodes$Get, callback: BodyResponseCallback<Schema$Node>): void;
        get(callback: BodyResponseCallback<Schema$Node>): void;
        /**
         * tpu.projects.locations.nodes.list
         * @desc Lists nodes.
         * @alias tpu.projects.locations.nodes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of items to return.
         * @param {string=} params.pageToken The next_page_token value returned from
         *     a previous List request, if any.
         * @param {string} params.parent The parent resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Nodes$List, options?: MethodOptions): AxiosPromise<Schema$ListNodesResponse>;
        list(params: Params$Resource$Projects$Locations$Nodes$List, options: MethodOptions | BodyResponseCallback<Schema$ListNodesResponse>, callback: BodyResponseCallback<Schema$ListNodesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Nodes$List, callback: BodyResponseCallback<Schema$ListNodesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListNodesResponse>): void;
        /**
         * tpu.projects.locations.nodes.reimage
         * @desc Reimages a node's OS.
         * @alias tpu.projects.locations.nodes.reimage
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {().ReimageNodeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reimage(params?: Params$Resource$Projects$Locations$Nodes$Reimage, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        reimage(params: Params$Resource$Projects$Locations$Nodes$Reimage, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        reimage(params: Params$Resource$Projects$Locations$Nodes$Reimage, callback: BodyResponseCallback<Schema$Operation>): void;
        reimage(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * tpu.projects.locations.nodes.start
         * @desc Starts a node.
         * @alias tpu.projects.locations.nodes.start
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {().StartNodeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        start(params?: Params$Resource$Projects$Locations$Nodes$Start, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        start(params: Params$Resource$Projects$Locations$Nodes$Start, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        start(params: Params$Resource$Projects$Locations$Nodes$Start, callback: BodyResponseCallback<Schema$Operation>): void;
        start(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * tpu.projects.locations.nodes.stop
         * @desc Stops a node.
         * @alias tpu.projects.locations.nodes.stop
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {().StopNodeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop(params?: Params$Resource$Projects$Locations$Nodes$Stop, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        stop(params: Params$Resource$Projects$Locations$Nodes$Stop, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        stop(params: Params$Resource$Projects$Locations$Nodes$Stop, callback: BodyResponseCallback<Schema$Operation>): void;
        stop(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Projects$Locations$Nodes$Create {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unqualified resource name.
         */
        nodeId?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Node;
    }
    interface Params$Resource$Projects$Locations$Nodes$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Nodes$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Nodes$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Locations$Nodes$Reimage {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ReimageNodeRequest;
    }
    interface Params$Resource$Projects$Locations$Nodes$Start {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StartNodeRequest;
    }
    interface Params$Resource$Projects$Locations$Nodes$Stop {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StopNodeRequest;
    }
    class Resource$Projects$Locations$Operations {
        root: Tpu;
        constructor(root: Tpu);
        getRoot(): Tpu;
        /**
         * tpu.projects.locations.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation.  The
         * server makes a best effort to cancel the operation, but success is not
         * guaranteed.  If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
         * or other methods to check whether the cancellation succeeded or whether
         * the operation completed despite cancellation. On successful cancellation,
         * the operation is not deleted; instead, it becomes an operation with an
         * Operation.error value with a google.rpc.Status.code of 1, corresponding
         * to `Code.CANCELLED`.
         * @alias tpu.projects.locations.operations.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be
         *     cancelled.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * tpu.projects.locations.operations.delete
         * @desc Deletes a long-running operation. This method indicates that the
         * client is no longer interested in the operation result. It does not
         * cancel the operation. If the server doesn't support this method, it
         * returns `google.rpc.Code.UNIMPLEMENTED`.
         * @alias tpu.projects.locations.operations.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be
         *     deleted.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Operations$Delete, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * tpu.projects.locations.operations.get
         * @desc Gets the latest state of a long-running operation.  Clients can use
         * this method to poll the operation result at intervals as recommended by
         * the API service.
         * @alias tpu.projects.locations.operations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * tpu.projects.locations.operations.list
         * @desc Lists operations that match the specified filter in the request. If
         * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
         * the `name` binding allows API services to override the binding to use
         * different resource name schemes, such as `users/x/operations`. To
         * override the binding, API services can add a binding such as
         * `"/v1/{name=users/x}/operations"` to their service configuration. For
         * backwards compatibility, the default name includes the operations
         * collection id, however overriding users must ensure the name binding is
         * the parent resource, without the operations collection id.
         * @alias tpu.projects.locations.operations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The name of the operation's parent resource.
         * @param {integer=} params.pageSize The standard list page size.
         * @param {string=} params.pageToken The standard list page token.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Operations$Cancel {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Operations$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the operation resource to be deleted.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Operations$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Operations$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    class Resource$Projects$Locations$Tensorflowversions {
        root: Tpu;
        constructor(root: Tpu);
        getRoot(): Tpu;
        /**
         * tpu.projects.locations.tensorflowVersions.get
         * @desc Gets TensorFlow Version.
         * @alias tpu.projects.locations.tensorflowVersions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Tensorflowversions$Get, options?: MethodOptions): AxiosPromise<Schema$TensorFlowVersion>;
        get(params: Params$Resource$Projects$Locations$Tensorflowversions$Get, options: MethodOptions | BodyResponseCallback<Schema$TensorFlowVersion>, callback: BodyResponseCallback<Schema$TensorFlowVersion>): void;
        get(params: Params$Resource$Projects$Locations$Tensorflowversions$Get, callback: BodyResponseCallback<Schema$TensorFlowVersion>): void;
        get(callback: BodyResponseCallback<Schema$TensorFlowVersion>): void;
        /**
         * tpu.projects.locations.tensorflowVersions.list
         * @desc List TensorFlow versions supported by this API.
         * @alias tpu.projects.locations.tensorflowVersions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter List filter.
         * @param {string=} params.orderBy Sort results.
         * @param {integer=} params.pageSize The maximum number of items to return.
         * @param {string=} params.pageToken The next_page_token value returned from
         *     a previous List request, if any.
         * @param {string} params.parent The parent resource name.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Tensorflowversions$List, options?: MethodOptions): AxiosPromise<Schema$ListTensorFlowVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Tensorflowversions$List, options: MethodOptions | BodyResponseCallback<Schema$ListTensorFlowVersionsResponse>, callback: BodyResponseCallback<Schema$ListTensorFlowVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Tensorflowversions$List, callback: BodyResponseCallback<Schema$ListTensorFlowVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTensorFlowVersionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Tensorflowversions$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource name.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Tensorflowversions$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * List filter.
         */
        filter?: string;
        /**
         * Sort results.
         */
        orderBy?: string;
        /**
         * The maximum number of items to return.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
        /**
         * The parent resource name.
         */
        parent?: string;
    }
}
