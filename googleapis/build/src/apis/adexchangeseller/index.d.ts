import { adexchangeseller_v1 } from './v1';
import { adexchangeseller_v1_1 } from './v1.1';
import { adexchangeseller_v2_0 } from './v2.0';
export declare const VERSIONS: {
    'v1.1': typeof adexchangeseller_v1_1.Adexchangeseller;
    'v1': typeof adexchangeseller_v1.Adexchangeseller;
    'v2.0': typeof adexchangeseller_v2_0.Adexchangeseller;
};
export declare function adexchangeseller(version: 'v1_1'): adexchangeseller_v1_1.Adexchangeseller;
export declare function adexchangeseller(options: adexchangeseller_v1_1.Options): adexchangeseller_v1_1.Adexchangeseller;
export declare function adexchangeseller(version: 'v1'): adexchangeseller_v1.Adexchangeseller;
export declare function adexchangeseller(options: adexchangeseller_v1.Options): adexchangeseller_v1.Adexchangeseller;
export declare function adexchangeseller(version: 'v2_0'): adexchangeseller_v2_0.Adexchangeseller;
export declare function adexchangeseller(options: adexchangeseller_v2_0.Options): adexchangeseller_v2_0.Adexchangeseller;
