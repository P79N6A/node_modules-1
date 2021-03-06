import { sqladmin_v1beta3 } from './v1beta3';
import { sqladmin_v1beta4 } from './v1beta4';
export declare const VERSIONS: {
    'v1beta3': typeof sqladmin_v1beta3.Sqladmin;
    'v1beta4': typeof sqladmin_v1beta4.Sqladmin;
};
export declare function sqladmin(version: 'v1beta3'): sqladmin_v1beta3.Sqladmin;
export declare function sqladmin(options: sqladmin_v1beta3.Options): sqladmin_v1beta3.Sqladmin;
export declare function sqladmin(version: 'v1beta4'): sqladmin_v1beta4.Sqladmin;
export declare function sqladmin(options: sqladmin_v1beta4.Options): sqladmin_v1beta4.Sqladmin;
