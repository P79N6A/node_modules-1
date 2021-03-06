import { fusiontables_v1 } from './v1';
import { fusiontables_v2 } from './v2';
export declare const VERSIONS: {
    'v1': typeof fusiontables_v1.Fusiontables;
    'v2': typeof fusiontables_v2.Fusiontables;
};
export declare function fusiontables(version: 'v1'): fusiontables_v1.Fusiontables;
export declare function fusiontables(options: fusiontables_v1.Options): fusiontables_v1.Fusiontables;
export declare function fusiontables(version: 'v2'): fusiontables_v2.Fusiontables;
export declare function fusiontables(options: fusiontables_v2.Options): fusiontables_v2.Fusiontables;
