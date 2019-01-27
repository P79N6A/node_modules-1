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
export declare namespace sqladmin_v1beta4 {
    interface Options extends GlobalOptions {
        version: 'v1beta4';
    }
    /**
     * Cloud SQL Admin API
     *
     * Cloud SQL provides the Cloud SQL Admin API, a REST API for administering
     * your instances programmatically.
     *
     * @example
     * const {google} = require('googleapis');
     * const sqladmin = google.sqladmin('v1beta4');
     *
     * @namespace sqladmin
     * @type {Function}
     * @version v1beta4
     * @variation v1beta4
     * @param {object=} options Options for Sqladmin
     */
    class Sqladmin {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        backupRuns: Resource$Backupruns;
        databases: Resource$Databases;
        flags: Resource$Flags;
        instances: Resource$Instances;
        operations: Resource$Operations;
        sslCerts: Resource$Sslcerts;
        tiers: Resource$Tiers;
        users: Resource$Users;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * An entry for an Access Control list.
     */
    interface Schema$AclEntry {
        /**
         * The time when this access control entry expires in RFC 3339 format, for
         * example 2012-11-15T16:19:00.094Z.
         */
        expirationTime?: string;
        /**
         * This is always sql#aclEntry.
         */
        kind?: string;
        /**
         * An optional label to identify this entry.
         */
        name?: string;
        /**
         * The whitelisted value for the access control list.
         */
        value?: string;
    }
    /**
     * Database instance backup configuration.
     */
    interface Schema$BackupConfiguration {
        /**
         * Whether binary log is enabled. If backup configuration is disabled,
         * binary log must be disabled as well.
         */
        binaryLogEnabled?: boolean;
        /**
         * Whether this configuration is enabled.
         */
        enabled?: boolean;
        /**
         * This is always sql#backupConfiguration.
         */
        kind?: string;
        /**
         * Reserved for future use.
         */
        replicationLogArchivingEnabled?: boolean;
        /**
         * Start time for the daily backup configuration in UTC timezone in the 24
         * hour format - HH:MM.
         */
        startTime?: string;
    }
    /**
     * A database instance backup run resource.
     */
    interface Schema$BackupRun {
        /**
         * The description of this run, only applicable to on-demand backups.
         */
        description?: string;
        /**
         * The time the backup operation completed in UTC timezone in RFC 3339
         * format, for example 2012-11-15T16:19:00.094Z.
         */
        endTime?: string;
        /**
         * The time the run was enqueued in UTC timezone in RFC 3339 format, for
         * example 2012-11-15T16:19:00.094Z.
         */
        enqueuedTime?: string;
        /**
         * Information about why the backup operation failed. This is only present
         * if the run has the FAILED status.
         */
        error?: Schema$OperationError;
        /**
         * A unique identifier for this backup run. Note that this is unique only
         * within the scope of a particular Cloud SQL instance.
         */
        id?: string;
        /**
         * Name of the database instance.
         */
        instance?: string;
        /**
         * This is always sql#backupRun.
         */
        kind?: string;
        /**
         * The URI of this resource.
         */
        selfLink?: string;
        /**
         * The time the backup operation actually started in UTC timezone in RFC
         * 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        startTime?: string;
        /**
         * The status of this run.
         */
        status?: string;
        /**
         * The type of this run; can be either &quot;AUTOMATED&quot; or
         * &quot;ON_DEMAND&quot;.
         */
        type?: string;
        /**
         * The start time of the backup window during which this the backup was
         * attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         */
        windowStartTime?: string;
    }
    /**
     * Backup run list results.
     */
    interface Schema$BackupRunsListResponse {
        /**
         * A list of backup runs in reverse chronological order of the enqueued
         * time.
         */
        items?: Schema$BackupRun[];
        /**
         * This is always sql#backupRunsList.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * Binary log coordinates.
     */
    interface Schema$BinLogCoordinates {
        /**
         * Name of the binary log file for a Cloud SQL instance.
         */
        binLogFileName?: string;
        /**
         * Position (offset) within the binary log file.
         */
        binLogPosition?: string;
        /**
         * This is always sql#binLogCoordinates.
         */
        kind?: string;
    }
    /**
     * Database instance clone context.
     */
    interface Schema$CloneContext {
        /**
         * Binary log coordinates, if specified, identify the position up to which
         * the source instance should be cloned. If not specified, the source
         * instance is cloned up to the most recent binary log coordinates.
         */
        binLogCoordinates?: Schema$BinLogCoordinates;
        /**
         * Name of the Cloud SQL instance to be created as a clone.
         */
        destinationInstanceName?: string;
        /**
         * This is always sql#cloneContext.
         */
        kind?: string;
        /**
         * Reserved for future use.
         */
        pitrTimestampMs?: string;
    }
    /**
     * A database resource inside a Cloud SQL instance.
     */
    interface Schema$Database {
        /**
         * The MySQL charset value.
         */
        charset?: string;
        /**
         * The MySQL collation value.
         */
        collation?: string;
        /**
         * HTTP 1.1 Entity tag for the resource.
         */
        etag?: string;
        /**
         * The name of the Cloud SQL instance. This does not include the project ID.
         */
        instance?: string;
        /**
         * This is always sql#database.
         */
        kind?: string;
        /**
         * The name of the database in the Cloud SQL instance. This does not include
         * the project ID or instance name.
         */
        name?: string;
        /**
         * The project ID of the project containing the Cloud SQL database. The
         * Google apps domain is prefixed if applicable.
         */
        project?: string;
        /**
         * The URI of this resource.
         */
        selfLink?: string;
    }
    /**
     * MySQL flags for Cloud SQL instances.
     */
    interface Schema$DatabaseFlags {
        /**
         * The name of the flag. These flags are passed at instance startup, so
         * include both MySQL server options and MySQL system variables. Flags
         * should be specified with underscores, not hyphens. For more information,
         * see Configuring MySQL Flags in the Google Cloud SQL documentation, as
         * well as the official MySQL documentation for server options and system
         * variables.
         */
        name?: string;
        /**
         * The value of the flag. Booleans should be set to on for true and off for
         * false. This field must be omitted if the flag doesn&#39;t take a value.
         */
        value?: string;
    }
    /**
     * A Cloud SQL instance resource.
     */
    interface Schema$DatabaseInstance {
        /**
         * FIRST_GEN: Basic Cloud SQL instance that runs in a Google-managed
         * container. SECOND_GEN: A newer Cloud SQL backend that runs in a Compute
         * Engine VM. EXTERNAL: A MySQL server that is not managed by Google.
         */
        backendType?: string;
        /**
         * Connection name of the Cloud SQL instance used in connection strings.
         */
        connectionName?: string;
        /**
         * The current disk usage of the instance in bytes. This property has been
         * deprecated. Users should use the
         * &quot;cloudsql.googleapis.com/database/disk/bytes_used&quot; metric in
         * Cloud Monitoring API instead. Please see
         * https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ
         * for details.
         */
        currentDiskSize?: string;
        /**
         * The database engine type and version. The databaseVersion field can not
         * be changed after instance creation. MySQL Second Generation instances:
         * MYSQL_5_7 (default) or MYSQL_5_6. PostgreSQL instances: POSTGRES_9_6
         * MySQL First Generation instances: MYSQL_5_6 (default) or MYSQL_5_5
         */
        databaseVersion?: string;
        /**
         * HTTP 1.1 Entity tag for the resource.
         */
        etag?: string;
        /**
         * The name and status of the failover replica. This property is applicable
         * only to Second Generation instances.
         */
        failoverReplica?: any;
        /**
         * The Compute Engine zone that the instance is currently serving from. This
         * value could be different from the zone that was specified when the
         * instance was created if the instance has failed over to its secondary
         * zone.
         */
        gceZone?: string;
        /**
         * The instance type. This can be one of the following. CLOUD_SQL_INSTANCE:
         * A Cloud SQL instance that is not replicating from a master.
         * ON_PREMISES_INSTANCE: An instance running on the customer&#39;s premises.
         * READ_REPLICA_INSTANCE: A Cloud SQL instance configured as a read-replica.
         */
        instanceType?: string;
        /**
         * The assigned IP addresses for the instance.
         */
        ipAddresses?: Schema$IpMapping[];
        /**
         * The IPv6 address assigned to the instance. This property is applicable
         * only to First Generation instances.
         */
        ipv6Address?: string;
        /**
         * This is always sql#instance.
         */
        kind?: string;
        /**
         * The name of the instance which will act as master in the replication
         * setup.
         */
        masterInstanceName?: string;
        /**
         * The maximum disk size of the instance in bytes.
         */
        maxDiskSize?: string;
        /**
         * Name of the Cloud SQL instance. This does not include the project ID.
         */
        name?: string;
        /**
         * Configuration specific to on-premises instances.
         */
        onPremisesConfiguration?: Schema$OnPremisesConfiguration;
        /**
         * The project ID of the project containing the Cloud SQL instance. The
         * Google apps domain is prefixed if applicable.
         */
        project?: string;
        /**
         * The geographical region. Can be us-central (FIRST_GEN instances only),
         * us-central1 (SECOND_GEN instances only), asia-east1 or europe-west1.
         * Defaults to us-central or us-central1 depending on the instance type
         * (First Generation or Second Generation). The region can not be changed
         * after instance creation.
         */
        region?: string;
        /**
         * Configuration specific to read-replicas replicating from on-premises
         * masters.
         */
        replicaConfiguration?: Schema$ReplicaConfiguration;
        /**
         * The replicas of the instance.
         */
        replicaNames?: string[];
        /**
         * The URI of this resource.
         */
        selfLink?: string;
        /**
         * SSL configuration.
         */
        serverCaCert?: Schema$SslCert;
        /**
         * The service account email address assigned to the instance. This property
         * is applicable only to Second Generation instances.
         */
        serviceAccountEmailAddress?: string;
        /**
         * The user settings.
         */
        settings?: Schema$Settings;
        /**
         * The current serving state of the Cloud SQL instance. This can be one of
         * the following. RUNNABLE: The instance is running, or is ready to run when
         * accessed. SUSPENDED: The instance is not available, for example due to
         * problems with billing. PENDING_CREATE: The instance is being created.
         * MAINTENANCE: The instance is down for maintenance. FAILED: The instance
         * creation failed. UNKNOWN_STATE: The state of the instance is unknown.
         */
        state?: string;
        /**
         * If the instance state is SUSPENDED, the reason for the suspension.
         */
        suspensionReason?: string[];
    }
    /**
     * Database list response.
     */
    interface Schema$DatabasesListResponse {
        /**
         * List of database resources in the instance.
         */
        items?: Schema$Database[];
        /**
         * This is always sql#databasesList.
         */
        kind?: string;
    }
    /**
     * Read-replica configuration for connecting to the on-premises master.
     */
    interface Schema$DemoteMasterConfiguration {
        /**
         * This is always sql#demoteMasterConfiguration.
         */
        kind?: string;
        /**
         * MySQL specific configuration when replicating from a MySQL on-premises
         * master. Replication configuration information such as the username,
         * password, certificates, and keys are not stored in the instance metadata.
         * The configuration information is used only to set up the replication
         * connection and is stored by MySQL in a file named master.info in the data
         * directory.
         */
        mysqlReplicaConfiguration?: Schema$DemoteMasterMySqlReplicaConfiguration;
    }
    /**
     * Database instance demote master context.
     */
    interface Schema$DemoteMasterContext {
        /**
         * This is always sql#demoteMasterContext.
         */
        kind?: string;
        /**
         * The name of the instance which will act as on-premises master in the
         * replication setup.
         */
        masterInstanceName?: string;
        /**
         * Configuration specific to read-replicas replicating from the on-premises
         * master.
         */
        replicaConfiguration?: Schema$DemoteMasterConfiguration;
        /**
         * Verify GTID consistency for demote operation. Default value: True. Second
         * Generation instances only. Setting this flag to false enables you to
         * bypass GTID consistency check between on-premises master and Cloud SQL
         * instance during the demotion operation but also exposes you to the risk
         * of future replication failures. Change the value only if you know the
         * reason for the GTID divergence and are confident that doing so will not
         * cause any replication issues.
         */
        verifyGtidConsistency?: boolean;
    }
    /**
     * Read-replica configuration specific to MySQL databases.
     */
    interface Schema$DemoteMasterMySqlReplicaConfiguration {
        /**
         * PEM representation of the trusted CA&#39;s x509 certificate.
         */
        caCertificate?: string;
        /**
         * PEM representation of the slave&#39;s x509 certificate.
         */
        clientCertificate?: string;
        /**
         * PEM representation of the slave&#39;s private key. The corresponsing
         * public key is encoded in the client&#39;s certificate. The format of the
         * slave&#39;s private key can be either PKCS #1 or PKCS #8.
         */
        clientKey?: string;
        /**
         * This is always sql#demoteMasterMysqlReplicaConfiguration.
         */
        kind?: string;
        /**
         * The password for the replication connection.
         */
        password?: string;
        /**
         * The username for the replication connection.
         */
        username?: string;
    }
    /**
     * Database instance export context.
     */
    interface Schema$ExportContext {
        /**
         * Options for exporting data as CSV. Exporting in CSV format using the
         * Cloud SQL Admin API is not supported for PostgreSQL instances.
         */
        csvExportOptions?: any;
        /**
         * Databases to be exported. MySQL instances: If fileType is SQL and no
         * database is specified, all databases are exported, except for the mysql
         * system database. If fileType is CSV, you can specify one database, either
         * by using this property or by using the csvExportOptions.selectQuery
         * property, which takes precedence over this property. PostgreSQL
         * instances: If fileType is SQL, you must specify one database to be
         * exported. A fileType of CSV is not supported for PostgreSQL instances.
         */
        databases?: string[];
        /**
         * The file type for the specified uri. SQL: The file contains SQL
         * statements. CSV: The file contains CSV data. CSV is not supported for
         * PostgreSQL instances.
         */
        fileType?: string;
        /**
         * This is always sql#exportContext.
         */
        kind?: string;
        /**
         * Options for exporting data as SQL statements.
         */
        sqlExportOptions?: any;
        /**
         * The path to the file in Google Cloud Storage where the export will be
         * stored. The URI is in the form gs://bucketName/fileName. If the file
         * already exists, the requests succeeds, but the operation fails. If
         * fileType is SQL and the filename ends with .gz, the contents are
         * compressed.
         */
        uri?: string;
    }
    /**
     * Database instance failover context.
     */
    interface Schema$FailoverContext {
        /**
         * This is always sql#failoverContext.
         */
        kind?: string;
        /**
         * The current settings version of this instance. Request will be rejected
         * if this version doesn&#39;t match the current settings version.
         */
        settingsVersion?: string;
    }
    /**
     * A Google Cloud SQL service flag resource.
     */
    interface Schema$Flag {
        /**
         * For STRING flags, a list of strings that the value can be set to.
         */
        allowedStringValues?: string[];
        /**
         * The database version this flag applies to. Can be MYSQL_5_5, MYSQL_5_6,
         * or MYSQL_5_7. MYSQL_5_7 is applicable only to Second Generation
         * instances.
         */
        appliesTo?: string[];
        /**
         * This is always sql#flag.
         */
        kind?: string;
        /**
         * For INTEGER flags, the maximum allowed value.
         */
        maxValue?: string;
        /**
         * For INTEGER flags, the minimum allowed value.
         */
        minValue?: string;
        /**
         * This is the name of the flag. Flag names always use underscores, not
         * hyphens, e.g. max_allowed_packet
         */
        name?: string;
        /**
         * Indicates whether changing this flag will trigger a database restart.
         * Only applicable to Second Generation instances.
         */
        requiresRestart?: boolean;
        /**
         * The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER
         * or NONE. NONE is used for flags which do not take a value, such as
         * skip_grant_tables.
         */
        type?: string;
    }
    /**
     * Flags list response.
     */
    interface Schema$FlagsListResponse {
        /**
         * List of flags.
         */
        items?: Schema$Flag[];
        /**
         * This is always sql#flagsList.
         */
        kind?: string;
    }
    /**
     * Database instance import context.
     */
    interface Schema$ImportContext {
        /**
         * Options for importing data as CSV. Importing CSV data using the Cloud SQL
         * Admin API is not supported for PostgreSQL instances.
         */
        csvImportOptions?: any;
        /**
         * The target database for the import. If fileType is SQL, this field is
         * required only if the import file does not specify a database, and is
         * overridden by any database specification in the import file. If fileType
         * is CSV, one database must be specified.
         */
        database?: string;
        /**
         * The file type for the specified uri. SQL: The file contains SQL
         * statements. CSV: The file contains CSV data. Importing CSV data using the
         * Cloud SQL Admin API is not supported for PostgreSQL instances.
         */
        fileType?: string;
        /**
         * The PostgreSQL user for this import operation. Defaults to
         * cloudsqlsuperuser. PostgreSQL instances only.
         */
        importUser?: string;
        /**
         * This is always sql#importContext.
         */
        kind?: string;
        /**
         * Path to the import file in Cloud Storage, in the form
         * gs://bucketName/fileName. Compressed gzip files (.gz) are supported when
         * fileType is SQL. The instance must have write permissions to the bucket
         * and read access to the file.
         */
        uri?: string;
    }
    /**
     * Database instance clone request.
     */
    interface Schema$InstancesCloneRequest {
        /**
         * Contains details about the clone operation.
         */
        cloneContext?: Schema$CloneContext;
    }
    /**
     * Database demote master request.
     */
    interface Schema$InstancesDemoteMasterRequest {
        /**
         * Contains details about the demoteMaster operation.
         */
        demoteMasterContext?: Schema$DemoteMasterContext;
    }
    /**
     * Database instance export request.
     */
    interface Schema$InstancesExportRequest {
        /**
         * Contains details about the export operation.
         */
        exportContext?: Schema$ExportContext;
    }
    /**
     * Instance failover request.
     */
    interface Schema$InstancesFailoverRequest {
        /**
         * Failover Context.
         */
        failoverContext?: Schema$FailoverContext;
    }
    /**
     * Database instance import request.
     */
    interface Schema$InstancesImportRequest {
        /**
         * Contains details about the import operation.
         */
        importContext?: Schema$ImportContext;
    }
    /**
     * Database instances list response.
     */
    interface Schema$InstancesListResponse {
        /**
         * List of database instance resources.
         */
        items?: Schema$DatabaseInstance[];
        /**
         * This is always sql#instancesList.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * Instances ListServerCas response.
     */
    interface Schema$InstancesListServerCasResponse {
        activeVersion?: string;
        /**
         * List of server CA certificates for the instance.
         */
        certs?: Schema$SslCert[];
        /**
         * This is always sql#instancesListServerCas.
         */
        kind?: string;
    }
    /**
     * Database instance restore backup request.
     */
    interface Schema$InstancesRestoreBackupRequest {
        /**
         * Parameters required to perform the restore backup operation.
         */
        restoreBackupContext?: Schema$RestoreBackupContext;
    }
    /**
     * Rotate Server CA request.
     */
    interface Schema$InstancesRotateServerCaRequest {
        /**
         * Contains details about the rotate server CA operation.
         */
        rotateServerCaContext?: Schema$RotateServerCaContext;
    }
    /**
     * Instance truncate log request.
     */
    interface Schema$InstancesTruncateLogRequest {
        /**
         * Contains details about the truncate log operation.
         */
        truncateLogContext?: Schema$TruncateLogContext;
    }
    /**
     * IP Management configuration.
     */
    interface Schema$IpConfiguration {
        /**
         * The list of external networks that are allowed to connect to the instance
         * using the IP. In CIDR notation, also known as &#39;slash&#39; notation
         * (e.g. 192.168.100.0/24).
         */
        authorizedNetworks?: Schema$AclEntry[];
        /**
         * Whether the instance should be assigned an IP address or not.
         */
        ipv4Enabled?: boolean;
        /**
         * Reserved for future use.
         */
        privateNetwork?: string;
        /**
         * Whether SSL connections over IP should be enforced or not.
         */
        requireSsl?: boolean;
    }
    /**
     * Database instance IP Mapping.
     */
    interface Schema$IpMapping {
        /**
         * The IP address assigned.
         */
        ipAddress?: string;
        /**
         * The due time for this IP to be retired in RFC 3339 format, for example
         * 2012-11-15T16:19:00.094Z. This field is only available when the IP is
         * scheduled to be retired.
         */
        timeToRetire?: string;
        /**
         * The type of this IP address. A PRIMARY address is an address that can
         * accept incoming connections. An OUTGOING address is the source address of
         * connections originating from the instance, if supported.
         */
        type?: string;
    }
    /**
     * Preferred location. This specifies where a Cloud SQL instance should
     * preferably be located, either in a specific Compute Engine zone, or
     * co-located with an App Engine application. Note that if the preferred
     * location is not available, the instance will be located as close as
     * possible within the region. Only one location may be specified.
     */
    interface Schema$LocationPreference {
        /**
         * The AppEngine application to follow, it must be in the same region as the
         * Cloud SQL instance.
         */
        followGaeApplication?: string;
        /**
         * This is always sql#locationPreference.
         */
        kind?: string;
        /**
         * The preferred Compute Engine zone (e.g. us-central1-a, us-central1-b,
         * etc.).
         */
        zone?: string;
    }
    /**
     * Maintenance window. This specifies when a v2 Cloud SQL instance should
     * preferably be restarted for system maintenance puruposes.
     */
    interface Schema$MaintenanceWindow {
        /**
         * day of week (1-7), starting on Monday.
         */
        day?: number;
        /**
         * hour of day - 0 to 23.
         */
        hour?: number;
        /**
         * This is always sql#maintenanceWindow.
         */
        kind?: string;
        /**
         * Maintenance timing setting: canary (Earlier) or stable (Later).  Learn
         * more.
         */
        updateTrack?: string;
    }
    /**
     * Read-replica configuration specific to MySQL databases.
     */
    interface Schema$MySqlReplicaConfiguration {
        /**
         * PEM representation of the trusted CA&#39;s x509 certificate.
         */
        caCertificate?: string;
        /**
         * PEM representation of the slave&#39;s x509 certificate.
         */
        clientCertificate?: string;
        /**
         * PEM representation of the slave&#39;s private key. The corresponsing
         * public key is encoded in the client&#39;s certificate.
         */
        clientKey?: string;
        /**
         * Seconds to wait between connect retries. MySQL&#39;s default is 60
         * seconds.
         */
        connectRetryInterval?: number;
        /**
         * Path to a SQL dump file in Google Cloud Storage from which the slave
         * instance is to be created. The URI is in the form
         * gs://bucketName/fileName. Compressed gzip files (.gz) are also supported.
         * Dumps should have the binlog co-ordinates from which replication should
         * begin. This can be accomplished by setting --master-data to 1 when using
         * mysqldump.
         */
        dumpFilePath?: string;
        /**
         * This is always sql#mysqlReplicaConfiguration.
         */
        kind?: string;
        /**
         * Interval in milliseconds between replication heartbeats.
         */
        masterHeartbeatPeriod?: string;
        /**
         * The password for the replication connection.
         */
        password?: string;
        /**
         * A list of permissible ciphers to use for SSL encryption.
         */
        sslCipher?: string;
        /**
         * The username for the replication connection.
         */
        username?: string;
        /**
         * Whether or not to check the master&#39;s Common Name value in the
         * certificate that it sends during the SSL handshake.
         */
        verifyServerCertificate?: boolean;
    }
    /**
     * On-premises instance configuration.
     */
    interface Schema$OnPremisesConfiguration {
        /**
         * The host and port of the on-premises instance in host:port format
         */
        hostPort?: string;
        /**
         * This is always sql#onPremisesConfiguration.
         */
        kind?: string;
    }
    /**
     * An Operation resource. For successful operations that return an Operation
     * resource, only the fields relevant to the operation are populated in the
     * resource.
     */
    interface Schema$Operation {
        /**
         * The time this operation finished in UTC timezone in RFC 3339 format, for
         * example 2012-11-15T16:19:00.094Z.
         */
        endTime?: string;
        /**
         * If errors occurred during processing of this operation, this field will
         * be populated.
         */
        error?: Schema$OperationErrors;
        /**
         * The context for export operation, if applicable.
         */
        exportContext?: Schema$ExportContext;
        /**
         * The context for import operation, if applicable.
         */
        importContext?: Schema$ImportContext;
        /**
         * The time this operation was enqueued in UTC timezone in RFC 3339 format,
         * for example 2012-11-15T16:19:00.094Z.
         */
        insertTime?: string;
        /**
         * This is always sql#operation.
         */
        kind?: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this
         * identifier to retrieve the Operations resource that has information about
         * the operation.
         */
        name?: string;
        /**
         * The type of the operation. Valid values are CREATE, DELETE, UPDATE,
         * RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME, CREATE_USER,
         * DELETE_USER, CREATE_DATABASE, DELETE_DATABASE .
         */
        operationType?: string;
        /**
         * The URI of this resource.
         */
        selfLink?: string;
        /**
         * The time this operation actually started in UTC timezone in RFC 3339
         * format, for example 2012-11-15T16:19:00.094Z.
         */
        startTime?: string;
        /**
         * The status of an operation. Valid values are PENDING, RUNNING, DONE,
         * UNKNOWN.
         */
        status?: string;
        /**
         * Name of the database instance related to this operation.
         */
        targetId?: string;
        targetLink?: string;
        /**
         * The project ID of the target instance related to this operation.
         */
        targetProject?: string;
        /**
         * The email address of the user who initiated this operation.
         */
        user?: string;
    }
    /**
     * Database instance operation error.
     */
    interface Schema$OperationError {
        /**
         * Identifies the specific error that occurred.
         */
        code?: string;
        /**
         * This is always sql#operationError.
         */
        kind?: string;
        /**
         * Additional information about the error encountered.
         */
        message?: string;
    }
    /**
     * Database instance operation errors list wrapper.
     */
    interface Schema$OperationErrors {
        /**
         * The list of errors encountered while processing this operation.
         */
        errors?: Schema$OperationError[];
        /**
         * This is always sql#operationErrors.
         */
        kind?: string;
    }
    /**
     * Database instance list operations response.
     */
    interface Schema$OperationsListResponse {
        /**
         * List of operation resources.
         */
        items?: Schema$Operation[];
        /**
         * This is always sql#operationsList.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * Read-replica configuration for connecting to the master.
     */
    interface Schema$ReplicaConfiguration {
        /**
         * Specifies if the replica is the failover target. If the field is set to
         * true the replica will be designated as a failover replica. In case the
         * master instance fails, the replica instance will be promoted as the new
         * master instance. Only one replica can be specified as failover target,
         * and the replica has to be in different zone with the master instance.
         */
        failoverTarget?: boolean;
        /**
         * This is always sql#replicaConfiguration.
         */
        kind?: string;
        /**
         * MySQL specific configuration when replicating from a MySQL on-premises
         * master. Replication configuration information such as the username,
         * password, certificates, and keys are not stored in the instance metadata.
         * The configuration information is used only to set up the replication
         * connection and is stored by MySQL in a file named master.info in the data
         * directory.
         */
        mysqlReplicaConfiguration?: Schema$MySqlReplicaConfiguration;
    }
    /**
     * Database instance restore from backup context.
     */
    interface Schema$RestoreBackupContext {
        /**
         * The ID of the backup run to restore from.
         */
        backupRunId?: string;
        /**
         * The ID of the instance that the backup was taken from.
         */
        instanceId?: string;
        /**
         * This is always sql#restoreBackupContext.
         */
        kind?: string;
    }
    /**
     * Instance rotate server CA context.
     */
    interface Schema$RotateServerCaContext {
        /**
         * This is always sql#rotateServerCaContext.
         */
        kind?: string;
        /**
         * The fingerprint of the next version to be rotated to. If left
         * unspecified, will be rotated to the most recently added server CA
         * version.
         */
        nextVersion?: string;
    }
    /**
     * Database instance settings.
     */
    interface Schema$Settings {
        /**
         * The activation policy specifies when the instance is activated; it is
         * applicable only when the instance state is RUNNABLE. Valid values:
         * ALWAYS: The instance is on, and remains so even in the absence of
         * connection requests. NEVER: The instance is off; it is not activated,
         * even if a connection request arrives. ON_DEMAND: First Generation
         * instances only. The instance responds to incoming requests, and turns
         * itself off when not in use. Instances with PER_USE pricing turn off after
         * 15 minutes of inactivity. Instances with PER_PACKAGE pricing turn off
         * after 12 hours of inactivity.
         */
        activationPolicy?: string;
        /**
         * The App Engine app IDs that can access this instance. This property is
         * only applicable to First Generation instances.
         */
        authorizedGaeApplications?: string[];
        /**
         * Availability type (PostgreSQL instances only). Potential values: ZONAL:
         * The instance serves data from only one zone. Outages in that zone affect
         * data accessibility. REGIONAL: The instance can serve data from more than
         * one zone in a region (it is highly available). For more information, see
         * Overview of the High Availability Configuration.
         */
        availabilityType?: string;
        /**
         * The daily backup configuration for the instance.
         */
        backupConfiguration?: Schema$BackupConfiguration;
        /**
         * Configuration specific to read replica instances. Indicates whether
         * database flags for crash-safe replication are enabled. This property is
         * only applicable to First Generation instances.
         */
        crashSafeReplicationEnabled?: boolean;
        /**
         * The database flags passed to the instance at startup.
         */
        databaseFlags?: Schema$DatabaseFlags[];
        /**
         * Configuration specific to read replica instances. Indicates whether
         * replication is enabled or not.
         */
        databaseReplicationEnabled?: boolean;
        /**
         * The size of data disk, in GB. The data disk size minimum is 10GB. Applies
         * only to Second Generation instances.
         */
        dataDiskSizeGb?: string;
        /**
         * The type of data disk. Only supported for Second Generation instances.
         * The default type is PD_SSD. Applies only to Second Generation instances.
         */
        dataDiskType?: string;
        /**
         * The settings for IP Management. This allows to enable or disable the
         * instance IP and manage which external networks can connect to the
         * instance. The IPv4 address cannot be disabled for Second Generation
         * instances.
         */
        ipConfiguration?: Schema$IpConfiguration;
        /**
         * This is always sql#settings.
         */
        kind?: string;
        /**
         * The location preference settings. This allows the instance to be located
         * as near as possible to either an App Engine app or Compute Engine zone
         * for better performance. App Engine co-location is only applicable to
         * First Generation instances.
         */
        locationPreference?: Schema$LocationPreference;
        /**
         * The maintenance window for this instance. This specifies when the
         * instance may be restarted for maintenance purposes. Applies only to
         * Second Generation instances.
         */
        maintenanceWindow?: Schema$MaintenanceWindow;
        /**
         * The pricing plan for this instance. This can be either PER_USE or
         * PACKAGE. Only PER_USE is supported for Second Generation instances.
         */
        pricingPlan?: string;
        /**
         * The type of replication this instance uses. This can be either
         * ASYNCHRONOUS or SYNCHRONOUS. This property is only applicable to First
         * Generation instances.
         */
        replicationType?: string;
        /**
         * The version of instance settings. This is a required field for update
         * method to make sure concurrent updates are handled properly. During
         * update, use the most recent settingsVersion value for this instance and
         * do not try to update this value.
         */
        settingsVersion?: string;
        /**
         * Configuration to increase storage size automatically. The default value
         * is true. Applies only to Second Generation instances.
         */
        storageAutoResize?: boolean;
        /**
         * The maximum size to which storage capacity can be automatically
         * increased. The default value is 0, which specifies that there is no
         * limit. Applies only to Second Generation instances.
         */
        storageAutoResizeLimit?: string;
        /**
         * The tier of service for this instance, for example D1, D2. For more
         * information, see pricing.
         */
        tier?: string;
        /**
         * User-provided labels, represented as a dictionary where each label is a
         * single key value pair.
         */
        userLabels?: any;
    }
    /**
     * SslCerts Resource
     */
    interface Schema$SslCert {
        /**
         * PEM representation.
         */
        cert?: string;
        /**
         * Serial number, as extracted from the certificate.
         */
        certSerialNumber?: string;
        /**
         * User supplied name. Constrained to [a-zA-Z.-_ ]+.
         */
        commonName?: string;
        /**
         * The time when the certificate was created in RFC 3339 format, for example
         * 2012-11-15T16:19:00.094Z
         */
        createTime?: string;
        /**
         * The time when the certificate expires in RFC 3339 format, for example
         * 2012-11-15T16:19:00.094Z.
         */
        expirationTime?: string;
        /**
         * Name of the database instance.
         */
        instance?: string;
        /**
         * This is always sql#sslCert.
         */
        kind?: string;
        /**
         * The URI of this resource.
         */
        selfLink?: string;
        /**
         * Sha1 Fingerprint.
         */
        sha1Fingerprint?: string;
    }
    /**
     * SslCertDetail.
     */
    interface Schema$SslCertDetail {
        /**
         * The public information about the cert.
         */
        certInfo?: Schema$SslCert;
        /**
         * The private key for the client cert, in pem format. Keep private in order
         * to protect your security.
         */
        certPrivateKey?: string;
    }
    /**
     * SslCerts create ephemeral certificate request.
     */
    interface Schema$SslCertsCreateEphemeralRequest {
        /**
         * PEM encoded public key to include in the signed certificate.
         */
        public_key?: string;
    }
    /**
     * SslCerts insert request.
     */
    interface Schema$SslCertsInsertRequest {
        /**
         * User supplied name. Must be a distinct name from the other certificates
         * for this instance.
         */
        commonName?: string;
    }
    /**
     * SslCert insert response.
     */
    interface Schema$SslCertsInsertResponse {
        /**
         * The new client certificate and private key. For First Generation
         * instances, the new certificate does not take effect until the instance is
         * restarted.
         */
        clientCert?: Schema$SslCertDetail;
        /**
         * This is always sql#sslCertsInsert.
         */
        kind?: string;
        /**
         * The operation to track the ssl certs insert request.
         */
        operation?: Schema$Operation;
        /**
         * The server Certificate Authority&#39;s certificate. If this is missing
         * you can force a new one to be generated by calling resetSslConfig method
         * on instances resource.
         */
        serverCaCert?: Schema$SslCert;
    }
    /**
     * SslCerts list response.
     */
    interface Schema$SslCertsListResponse {
        /**
         * List of client certificates for the instance.
         */
        items?: Schema$SslCert[];
        /**
         * This is always sql#sslCertsList.
         */
        kind?: string;
    }
    /**
     * A Google Cloud SQL service tier resource.
     */
    interface Schema$Tier {
        /**
         * The maximum disk size of this tier in bytes.
         */
        DiskQuota?: string;
        /**
         * This is always sql#tier.
         */
        kind?: string;
        /**
         * The maximum RAM usage of this tier in bytes.
         */
        RAM?: string;
        /**
         * The applicable regions for this tier.
         */
        region?: string[];
        /**
         * An identifier for the machine type, for example, db-n1-standard-1. For
         * related information, see Pricing.
         */
        tier?: string;
    }
    /**
     * Tiers list response.
     */
    interface Schema$TiersListResponse {
        /**
         * List of tiers.
         */
        items?: Schema$Tier[];
        /**
         * This is always sql#tiersList.
         */
        kind?: string;
    }
    /**
     * Database Instance truncate log context.
     */
    interface Schema$TruncateLogContext {
        /**
         * This is always sql#truncateLogContext.
         */
        kind?: string;
        /**
         * The type of log to truncate. Valid values are MYSQL_GENERAL_TABLE and
         * MYSQL_SLOW_TABLE.
         */
        logType?: string;
    }
    /**
     * A Cloud SQL user resource.
     */
    interface Schema$User {
        /**
         * HTTP 1.1 Entity tag for the resource.
         */
        etag?: string;
        /**
         * The host name from which the user can connect. For insert operations,
         * host defaults to an empty string. For update operations, host is
         * specified as part of the request URL. The host name cannot be updated
         * after insertion.
         */
        host?: string;
        /**
         * The name of the Cloud SQL instance. This does not include the project ID.
         * Can be omitted for update since it is already specified on the URL.
         */
        instance?: string;
        /**
         * This is always sql#user.
         */
        kind?: string;
        /**
         * The name of the user in the Cloud SQL instance. Can be omitted for update
         * since it is already specified on the URL.
         */
        name?: string;
        /**
         * The password for the user.
         */
        password?: string;
        /**
         * The project ID of the project containing the Cloud SQL database. The
         * Google apps domain is prefixed if applicable. Can be omitted for update
         * since it is already specified on the URL.
         */
        project?: string;
    }
    /**
     * User list response.
     */
    interface Schema$UsersListResponse {
        /**
         * List of user resources in the instance.
         */
        items?: Schema$User[];
        /**
         * This is always sql#usersList.
         */
        kind?: string;
        /**
         * An identifier that uniquely identifies the operation. You can use this
         * identifier to retrieve the Operations resource that has information about
         * the operation.
         */
        nextPageToken?: string;
    }
    class Resource$Backupruns {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.backupRuns.delete
         * @desc Deletes the backup taken by a backup run.
         * @alias sql.backupRuns.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The ID of the Backup Run to delete. To find a
         *     Backup Run ID, use the list method.
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Backupruns$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Backupruns$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Backupruns$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.backupRuns.get
         * @desc Retrieves a resource containing information about a backup run.
         * @alias sql.backupRuns.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The ID of this Backup Run.
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Backupruns$Get, options?: MethodOptions): AxiosPromise<Schema$BackupRun>;
        get(params: Params$Resource$Backupruns$Get, options: MethodOptions | BodyResponseCallback<Schema$BackupRun>, callback: BodyResponseCallback<Schema$BackupRun>): void;
        get(params: Params$Resource$Backupruns$Get, callback: BodyResponseCallback<Schema$BackupRun>): void;
        get(callback: BodyResponseCallback<Schema$BackupRun>): void;
        /**
         * sql.backupRuns.insert
         * @desc Creates a new backup run on demand. This method is applicable only
         * to Second Generation instances.
         * @alias sql.backupRuns.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().BackupRun} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Backupruns$Insert, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        insert(params: Params$Resource$Backupruns$Insert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(params: Params$Resource$Backupruns$Insert, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.backupRuns.list
         * @desc Lists all backup runs associated with a given instance and
         * configuration in the reverse chronological order of the enqueued time.
         * @alias sql.backupRuns.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {integer=} params.maxResults Maximum number of backup runs per
         *     response.
         * @param {string=} params.pageToken A previously-returned page token
         *     representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Backupruns$List, options?: MethodOptions): AxiosPromise<Schema$BackupRunsListResponse>;
        list(params: Params$Resource$Backupruns$List, options: MethodOptions | BodyResponseCallback<Schema$BackupRunsListResponse>, callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
        list(params: Params$Resource$Backupruns$List, callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    }
    interface Params$Resource$Backupruns$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the Backup Run to delete. To find a Backup Run ID, use the list
         * method.
         */
        id?: string;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Backupruns$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of this Backup Run.
         */
        id?: string;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Backupruns$Insert {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BackupRun;
    }
    interface Params$Resource$Backupruns$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Maximum number of backup runs per response.
         */
        maxResults?: number;
        /**
         * A previously-returned page token representing part of the larger set of
         * results to view.
         */
        pageToken?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    class Resource$Databases {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.databases.delete
         * @desc Deletes a database from a Cloud SQL instance.
         * @alias sql.databases.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be deleted in the
         *     instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Databases$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Databases$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Databases$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.databases.get
         * @desc Retrieves a resource containing information about a database inside
         * a Cloud SQL instance.
         * @alias sql.databases.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database in the instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Databases$Get, options?: MethodOptions): AxiosPromise<Schema$Database>;
        get(params: Params$Resource$Databases$Get, options: MethodOptions | BodyResponseCallback<Schema$Database>, callback: BodyResponseCallback<Schema$Database>): void;
        get(params: Params$Resource$Databases$Get, callback: BodyResponseCallback<Schema$Database>): void;
        get(callback: BodyResponseCallback<Schema$Database>): void;
        /**
         * sql.databases.insert
         * @desc Inserts a resource containing information about a database inside a
         * Cloud SQL instance.
         * @alias sql.databases.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().Database} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Databases$Insert, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        insert(params: Params$Resource$Databases$Insert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(params: Params$Resource$Databases$Insert, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.databases.list
         * @desc Lists databases in the specified Cloud SQL instance.
         * @alias sql.databases.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Databases$List, options?: MethodOptions): AxiosPromise<Schema$DatabasesListResponse>;
        list(params: Params$Resource$Databases$List, options: MethodOptions | BodyResponseCallback<Schema$DatabasesListResponse>, callback: BodyResponseCallback<Schema$DatabasesListResponse>): void;
        list(params: Params$Resource$Databases$List, callback: BodyResponseCallback<Schema$DatabasesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DatabasesListResponse>): void;
        /**
         * sql.databases.patch
         * @desc Updates a resource containing information about a database inside a
         * Cloud SQL instance. This method supports patch semantics.
         * @alias sql.databases.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be updated in the
         *     instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().Database} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Databases$Patch, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Databases$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Databases$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.databases.update
         * @desc Updates a resource containing information about a database inside a
         * Cloud SQL instance.
         * @alias sql.databases.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be updated in the
         *     instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().Database} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Databases$Update, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        update(params: Params$Resource$Databases$Update, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        update(params: Params$Resource$Databases$Update, callback: BodyResponseCallback<Schema$Operation>): void;
        update(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Databases$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Name of the database to be deleted in the instance.
         */
        database?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Databases$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Name of the database in the instance.
         */
        database?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Databases$Insert {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Database;
    }
    interface Params$Resource$Databases$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Databases$Patch {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Name of the database to be updated in the instance.
         */
        database?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Database;
    }
    interface Params$Resource$Databases$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Name of the database to be updated in the instance.
         */
        database?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Database;
    }
    class Resource$Flags {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.flags.list
         * @desc List all available database flags for Cloud SQL instances.
         * @alias sql.flags.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.databaseVersion Database version for flag
         *     retrieval. Flags are specific to the database version.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Flags$List, options?: MethodOptions): AxiosPromise<Schema$FlagsListResponse>;
        list(params: Params$Resource$Flags$List, options: MethodOptions | BodyResponseCallback<Schema$FlagsListResponse>, callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
        list(params: Params$Resource$Flags$List, callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
    }
    interface Params$Resource$Flags$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Database version for flag retrieval. Flags are specific to the database
         * version.
         */
        databaseVersion?: string;
    }
    class Resource$Instances {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.instances.addServerCa
         * @desc Add a new trusted Certificate Authority (CA) version for the
         * specified instance. Required to prepare for a certificate rotation. If a
         * CA version was previously added but never used in a certificate rotation,
         * this operation replaces that version. There cannot be more than one CA
         * version waiting to be rotated in.
         * @alias sql.instances.addServerCa
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addServerCa(params?: Params$Resource$Instances$Addserverca, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        addServerCa(params: Params$Resource$Instances$Addserverca, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        addServerCa(params: Params$Resource$Instances$Addserverca, callback: BodyResponseCallback<Schema$Operation>): void;
        addServerCa(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.clone
         * @desc Creates a Cloud SQL instance as a clone of the source instance.
         * @alias sql.instances.clone
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance The ID of the Cloud SQL instance to be
         *     cloned (source). This does not include the project ID.
         * @param {string} params.project Project ID of the source as well as the
         *     clone Cloud SQL instance.
         * @param {().InstancesCloneRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        clone(params?: Params$Resource$Instances$Clone, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        clone(params: Params$Resource$Instances$Clone, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        clone(params: Params$Resource$Instances$Clone, callback: BodyResponseCallback<Schema$Operation>): void;
        clone(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.delete
         * @desc Deletes a Cloud SQL instance.
         * @alias sql.instances.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance to be deleted.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Instances$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Instances$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Instances$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.demoteMaster
         * @desc Demotes the stand-alone instance to be a Cloud SQL read replica for
         * an external database server.
         * @alias sql.instances.demoteMaster
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance name.
         * @param {string} params.project ID of the project that contains the
         *     instance.
         * @param {().InstancesDemoteMasterRequest} params.resource Request body
         *     data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        demoteMaster(params?: Params$Resource$Instances$Demotemaster, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        demoteMaster(params: Params$Resource$Instances$Demotemaster, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        demoteMaster(params: Params$Resource$Instances$Demotemaster, callback: BodyResponseCallback<Schema$Operation>): void;
        demoteMaster(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.export
         * @desc Exports data from a Cloud SQL instance to a Cloud Storage bucket as
         * a SQL dump or CSV file.
         * @alias sql.instances.export
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance to be exported.
         * @param {().InstancesExportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export(params?: Params$Resource$Instances$Export, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        export(params: Params$Resource$Instances$Export, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        export(params: Params$Resource$Instances$Export, callback: BodyResponseCallback<Schema$Operation>): void;
        export(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.failover
         * @desc Failover the instance to its failover replica instance.
         * @alias sql.instances.failover
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project ID of the project that contains the read
         *     replica.
         * @param {().InstancesFailoverRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        failover(params?: Params$Resource$Instances$Failover, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        failover(params: Params$Resource$Instances$Failover, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        failover(params: Params$Resource$Instances$Failover, callback: BodyResponseCallback<Schema$Operation>): void;
        failover(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.get
         * @desc Retrieves a resource containing information about a Cloud SQL
         * instance.
         * @alias sql.instances.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Instances$Get, options?: MethodOptions): AxiosPromise<Schema$DatabaseInstance>;
        get(params: Params$Resource$Instances$Get, options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        get(params: Params$Resource$Instances$Get, callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        get(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
        /**
         * sql.instances.import
         * @desc Imports data into a Cloud SQL instance from a SQL dump or CSV file in
         * Cloud Storage.
         * @alias sql.instances.import
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include
         *     the project ID.
         * @param {string} params.project Project ID of the project that contains the
         *     instance.
         * @param {().InstancesImportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`,
         *     `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        import(params?: Params$Resource$Instances$Import, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        import(params: Params$Resource$Instances$Import, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        import(params: Params$Resource$Instances$Import, callback: BodyResponseCallback<Schema$Operation>): void;
        import(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
     * sql.instances.insert
     * @desc Creates a new Cloud SQL instance.
     * @alias sql.instances.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
          * @param {().DatabaseInstance} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
        insert(params?: Params$Resource$Instances$Insert, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        insert(params: Params$Resource$Instances$Insert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(params: Params$Resource$Instances$Insert, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.list
         * @desc Lists instances under a given project in the alphabetical order of
         * the instance name.
         * @alias sql.instances.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter An expression for filtering the results of
         *     the request, such as by name or label.
         * @param {integer=} params.maxResults The maximum number of results to
         *     return per response.
         * @param {string=} params.pageToken A previously-returned page token
         *     representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project for which to
         *     list Cloud SQL instances.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Instances$List, options?: MethodOptions): AxiosPromise<Schema$InstancesListResponse>;
        list(params: Params$Resource$Instances$List, options: MethodOptions | BodyResponseCallback<Schema$InstancesListResponse>, callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
        list(params: Params$Resource$Instances$List, callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
        /**
         * sql.instances.listServerCas
         * @desc Lists all of the trusted Certificate Authorities (CAs) for the
         * specified instance. There can be up to three CAs listed: the CA that was
         * used to sign the certificate that is currently in use, a CA that has been
         * added but not yet used to sign a certificate, and a CA used to sign a
         * certificate that has previously rotated out.
         * @alias sql.instances.listServerCas
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listServerCas(params?: Params$Resource$Instances$Listservercas, options?: MethodOptions): AxiosPromise<Schema$InstancesListServerCasResponse>;
        listServerCas(params: Params$Resource$Instances$Listservercas, options: MethodOptions | BodyResponseCallback<Schema$InstancesListServerCasResponse>, callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>): void;
        listServerCas(params: Params$Resource$Instances$Listservercas, callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>): void;
        listServerCas(callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>): void;
        /**
         * sql.instances.patch
         * @desc Updates settings of a Cloud SQL instance. Caution: This is not a
         * partial update, so you must include values for all the settings that you
         * want to retain. For partial updates, use patch.. This method supports
         * patch semantics.
         * @alias sql.instances.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().DatabaseInstance} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Instances$Patch, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Instances$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Instances$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.promoteReplica
         * @desc Promotes the read replica instance to be a stand-alone Cloud SQL
         * instance.
         * @alias sql.instances.promoteReplica
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read
         *     replica.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        promoteReplica(params?: Params$Resource$Instances$Promotereplica, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        promoteReplica(params: Params$Resource$Instances$Promotereplica, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        promoteReplica(params: Params$Resource$Instances$Promotereplica, callback: BodyResponseCallback<Schema$Operation>): void;
        promoteReplica(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.resetSslConfig
         * @desc Deletes all client certificates and generates a new server SSL
         * certificate for the instance.
         * @alias sql.instances.resetSslConfig
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetSslConfig(params?: Params$Resource$Instances$Resetsslconfig, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        resetSslConfig(params: Params$Resource$Instances$Resetsslconfig, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        resetSslConfig(params: Params$Resource$Instances$Resetsslconfig, callback: BodyResponseCallback<Schema$Operation>): void;
        resetSslConfig(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.restart
         * @desc Restarts a Cloud SQL instance.
         * @alias sql.instances.restart
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance to be restarted.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restart(params?: Params$Resource$Instances$Restart, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        restart(params: Params$Resource$Instances$Restart, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        restart(params: Params$Resource$Instances$Restart, callback: BodyResponseCallback<Schema$Operation>): void;
        restart(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.restoreBackup
         * @desc Restores a backup of a Cloud SQL instance.
         * @alias sql.instances.restoreBackup
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().InstancesRestoreBackupRequest} params.resource Request body
         *     data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restoreBackup(params?: Params$Resource$Instances$Restorebackup, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        restoreBackup(params: Params$Resource$Instances$Restorebackup, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        restoreBackup(params: Params$Resource$Instances$Restorebackup, callback: BodyResponseCallback<Schema$Operation>): void;
        restoreBackup(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.rotateServerCa
         * @desc Rotates the server certificate to one signed by the Certificate
         * Authority (CA) version previously added with the addServerCA method.
         * @alias sql.instances.rotateServerCa
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().InstancesRotateServerCaRequest} params.resource Request body
         *     data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rotateServerCa(params?: Params$Resource$Instances$Rotateserverca, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        rotateServerCa(params: Params$Resource$Instances$Rotateserverca, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        rotateServerCa(params: Params$Resource$Instances$Rotateserverca, callback: BodyResponseCallback<Schema$Operation>): void;
        rotateServerCa(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.startReplica
         * @desc Starts the replication in the read replica instance.
         * @alias sql.instances.startReplica
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read
         *     replica.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startReplica(params?: Params$Resource$Instances$Startreplica, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        startReplica(params: Params$Resource$Instances$Startreplica, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        startReplica(params: Params$Resource$Instances$Startreplica, callback: BodyResponseCallback<Schema$Operation>): void;
        startReplica(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.stopReplica
         * @desc Stops the replication in the read replica instance.
         * @alias sql.instances.stopReplica
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read
         *     replica.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stopReplica(params?: Params$Resource$Instances$Stopreplica, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        stopReplica(params: Params$Resource$Instances$Stopreplica, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        stopReplica(params: Params$Resource$Instances$Stopreplica, callback: BodyResponseCallback<Schema$Operation>): void;
        stopReplica(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.truncateLog
         * @desc Truncate MySQL general and slow query log tables
         * @alias sql.instances.truncateLog
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the Cloud SQL project.
         * @param {().InstancesTruncateLogRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        truncateLog(params?: Params$Resource$Instances$Truncatelog, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        truncateLog(params: Params$Resource$Instances$Truncatelog, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        truncateLog(params: Params$Resource$Instances$Truncatelog, callback: BodyResponseCallback<Schema$Operation>): void;
        truncateLog(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.instances.update
         * @desc Updates settings of a Cloud SQL instance. Caution: This is not a
         * partial update, so you must include values for all the settings that you
         * want to retain. For partial updates, use patch.
         * @alias sql.instances.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().DatabaseInstance} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Instances$Update, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        update(params: Params$Resource$Instances$Update, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        update(params: Params$Resource$Instances$Update, callback: BodyResponseCallback<Schema$Operation>): void;
        update(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Instances$Addserverca {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Clone {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the Cloud SQL instance to be cloned (source). This does not
         * include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the source as well as the clone Cloud SQL instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesCloneRequest;
    }
    interface Params$Resource$Instances$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance to be deleted.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Demotemaster {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance name.
         */
        instance?: string;
        /**
         * ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesDemoteMasterRequest;
    }
    interface Params$Resource$Instances$Export {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance to be exported.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesExportRequest;
    }
    interface Params$Resource$Instances$Failover {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * ID of the project that contains the read replica.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesFailoverRequest;
    }
    interface Params$Resource$Instances$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Import {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesImportRequest;
    }
    interface Params$Resource$Instances$Insert {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Project ID of the project to which the newly created Cloud SQL instances
         * should belong.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatabaseInstance;
    }
    interface Params$Resource$Instances$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * An expression for filtering the results of the request, such as by name
         * or label.
         */
        filter?: string;
        /**
         * The maximum number of results to return per response.
         */
        maxResults?: number;
        /**
         * A previously-returned page token representing part of the larger set of
         * results to view.
         */
        pageToken?: string;
        /**
         * Project ID of the project for which to list Cloud SQL instances.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Listservercas {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Patch {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatabaseInstance;
    }
    interface Params$Resource$Instances$Promotereplica {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL read replica instance name.
         */
        instance?: string;
        /**
         * ID of the project that contains the read replica.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Resetsslconfig {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Restart {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance to be restarted.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Restorebackup {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesRestoreBackupRequest;
    }
    interface Params$Resource$Instances$Rotateserverca {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesRotateServerCaRequest;
    }
    interface Params$Resource$Instances$Startreplica {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL read replica instance name.
         */
        instance?: string;
        /**
         * ID of the project that contains the read replica.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Stopreplica {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL read replica instance name.
         */
        instance?: string;
        /**
         * ID of the project that contains the read replica.
         */
        project?: string;
    }
    interface Params$Resource$Instances$Truncatelog {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the Cloud SQL project.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$InstancesTruncateLogRequest;
    }
    interface Params$Resource$Instances$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DatabaseInstance;
    }
    class Resource$Operations {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.operations.get
         * @desc Retrieves an instance operation that has been performed on an
         * instance.
         * @alias sql.operations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Instance operation ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Operations$Get, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.operations.list
         * @desc Lists all instance operations that have been performed on the given
         * Cloud SQL instance in the reverse chronological order of the start time.
         * @alias sql.operations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {integer=} params.maxResults Maximum number of operations per
         *     response.
         * @param {string=} params.pageToken A previously-returned page token
         *     representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Operations$List, options?: MethodOptions): AxiosPromise<Schema$OperationsListResponse>;
        list(params: Params$Resource$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$OperationsListResponse>, callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
        list(params: Params$Resource$Operations$List, callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    }
    interface Params$Resource$Operations$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Instance operation ID.
         */
        operation?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Operations$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Maximum number of operations per response.
         */
        maxResults?: number;
        /**
         * A previously-returned page token representing part of the larger set of
         * results to view.
         */
        pageToken?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    class Resource$Sslcerts {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.sslCerts.createEphemeral
         * @desc Generates a short-lived X509 certificate containing the provided
         * public key and signed by a private key specific to the target instance.
         * Users may use the certificate to authenticate as themselves when
         * connecting to the database.
         * @alias sql.sslCerts.createEphemeral
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the Cloud SQL project.
         * @param {().SslCertsCreateEphemeralRequest} params.resource Request body
         *     data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createEphemeral(params?: Params$Resource$Sslcerts$Createephemeral, options?: MethodOptions): AxiosPromise<Schema$SslCert>;
        createEphemeral(params: Params$Resource$Sslcerts$Createephemeral, options: MethodOptions | BodyResponseCallback<Schema$SslCert>, callback: BodyResponseCallback<Schema$SslCert>): void;
        createEphemeral(params: Params$Resource$Sslcerts$Createephemeral, callback: BodyResponseCallback<Schema$SslCert>): void;
        createEphemeral(callback: BodyResponseCallback<Schema$SslCert>): void;
        /**
         * sql.sslCerts.delete
         * @desc Deletes the SSL certificate. For First Generation instances, the
         * certificate remains valid until the instance is restarted.
         * @alias sql.sslCerts.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Sslcerts$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Sslcerts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Sslcerts$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.sslCerts.get
         * @desc Retrieves a particular SSL certificate. Does not include the
         * private key (required for usage). The private key must be saved from the
         * response to initial creation.
         * @alias sql.sslCerts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Sslcerts$Get, options?: MethodOptions): AxiosPromise<Schema$SslCert>;
        get(params: Params$Resource$Sslcerts$Get, options: MethodOptions | BodyResponseCallback<Schema$SslCert>, callback: BodyResponseCallback<Schema$SslCert>): void;
        get(params: Params$Resource$Sslcerts$Get, callback: BodyResponseCallback<Schema$SslCert>): void;
        get(callback: BodyResponseCallback<Schema$SslCert>): void;
        /**
         * sql.sslCerts.insert
         * @desc Creates an SSL certificate and returns it along with the private
         * key and server certificate authority. The new certificate will not be
         * usable until the instance is restarted.
         * @alias sql.sslCerts.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().SslCertsInsertRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Sslcerts$Insert, options?: MethodOptions): AxiosPromise<Schema$SslCertsInsertResponse>;
        insert(params: Params$Resource$Sslcerts$Insert, options: MethodOptions | BodyResponseCallback<Schema$SslCertsInsertResponse>, callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
        insert(params: Params$Resource$Sslcerts$Insert, callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
        insert(callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
        /**
         * sql.sslCerts.list
         * @desc Lists all of the current SSL certificates for the instance.
         * @alias sql.sslCerts.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Sslcerts$List, options?: MethodOptions): AxiosPromise<Schema$SslCertsListResponse>;
        list(params: Params$Resource$Sslcerts$List, options: MethodOptions | BodyResponseCallback<Schema$SslCertsListResponse>, callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
        list(params: Params$Resource$Sslcerts$List, callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    }
    interface Params$Resource$Sslcerts$Createephemeral {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the Cloud SQL project.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SslCertsCreateEphemeralRequest;
    }
    interface Params$Resource$Sslcerts$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Sha1 FingerPrint.
         */
        sha1Fingerprint?: string;
    }
    interface Params$Resource$Sslcerts$Get {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Sha1 FingerPrint.
         */
        sha1Fingerprint?: string;
    }
    interface Params$Resource$Sslcerts$Insert {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SslCertsInsertRequest;
    }
    interface Params$Resource$Sslcerts$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud SQL instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    class Resource$Tiers {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.tiers.list
         * @desc Lists all available machine types (tiers) for Cloud SQL, for
         * example, db-n1-standard-1. For related information, see Pricing.
         * @alias sql.tiers.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project for which to
         *     list tiers.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Tiers$List, options?: MethodOptions): AxiosPromise<Schema$TiersListResponse>;
        list(params: Params$Resource$Tiers$List, options: MethodOptions | BodyResponseCallback<Schema$TiersListResponse>, callback: BodyResponseCallback<Schema$TiersListResponse>): void;
        list(params: Params$Resource$Tiers$List, callback: BodyResponseCallback<Schema$TiersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$TiersListResponse>): void;
    }
    interface Params$Resource$Tiers$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Project ID of the project for which to list tiers.
         */
        project?: string;
    }
    class Resource$Users {
        root: Sqladmin;
        constructor(root: Sqladmin);
        getRoot(): Sqladmin;
        /**
         * sql.users.delete
         * @desc Deletes a user from a Cloud SQL instance.
         * @alias sql.users.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Host of the user in the instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.name Name of the user in the instance.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Delete, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Users$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Users$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.users.insert
         * @desc Creates a new user in a Cloud SQL instance.
         * @alias sql.users.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Users$Insert, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        insert(params: Params$Resource$Users$Insert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(params: Params$Resource$Users$Insert, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * sql.users.list
         * @desc Lists users in the specified Cloud SQL instance.
         * @alias sql.users.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Users$List, options?: MethodOptions): AxiosPromise<Schema$UsersListResponse>;
        list(params: Params$Resource$Users$List, options: MethodOptions | BodyResponseCallback<Schema$UsersListResponse>, callback: BodyResponseCallback<Schema$UsersListResponse>): void;
        list(params: Params$Resource$Users$List, callback: BodyResponseCallback<Schema$UsersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$UsersListResponse>): void;
        /**
         * sql.users.update
         * @desc Updates an existing user in a Cloud SQL instance.
         * @alias sql.users.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Host of the user in the instance.
         * @param {string} params.instance Database instance ID. This does not
         *     include the project ID.
         * @param {string} params.name Name of the user in the instance.
         * @param {string} params.project Project ID of the project that contains
         *     the instance.
         * @param {().User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as
         *     `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Users$Update, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        update(params: Params$Resource$Users$Update, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        update(params: Params$Resource$Users$Update, callback: BodyResponseCallback<Schema$Operation>): void;
        update(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Users$Delete {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Host of the user in the instance.
         */
        host?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Name of the user in the instance.
         */
        name?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Users$Insert {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    interface Params$Resource$Users$List {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
    }
    interface Params$Resource$Users$Update {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Host of the user in the instance.
         */
        host?: string;
        /**
         * Database instance ID. This does not include the project ID.
         */
        instance?: string;
        /**
         * Name of the user in the instance.
         */
        name?: string;
        /**
         * Project ID of the project that contains the instance.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
}