import { servicebroker_v1 } from './v1';
import { servicebroker_v1alpha1 } from './v1alpha1';
import { servicebroker_v1beta1 } from './v1beta1';
export declare const VERSIONS: {
    'v1': typeof servicebroker_v1.Servicebroker;
    'v1alpha1': typeof servicebroker_v1alpha1.Servicebroker;
    'v1beta1': typeof servicebroker_v1beta1.Servicebroker;
};
export declare function servicebroker(version: 'v1'): servicebroker_v1.Servicebroker;
export declare function servicebroker(options: servicebroker_v1.Options): servicebroker_v1.Servicebroker;
export declare function servicebroker(version: 'v1alpha1'): servicebroker_v1alpha1.Servicebroker;
export declare function servicebroker(options: servicebroker_v1alpha1.Options): servicebroker_v1alpha1.Servicebroker;
export declare function servicebroker(version: 'v1beta1'): servicebroker_v1beta1.Servicebroker;
export declare function servicebroker(options: servicebroker_v1beta1.Options): servicebroker_v1beta1.Servicebroker;
