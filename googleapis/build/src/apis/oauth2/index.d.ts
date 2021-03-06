import { oauth2_v1 } from './v1';
import { oauth2_v2 } from './v2';
export declare const VERSIONS: {
    'v1': typeof oauth2_v1.Oauth2;
    'v2': typeof oauth2_v2.Oauth2;
};
export declare function oauth2(version: 'v1'): oauth2_v1.Oauth2;
export declare function oauth2(options: oauth2_v1.Options): oauth2_v1.Oauth2;
export declare function oauth2(version: 'v2'): oauth2_v2.Oauth2;
export declare function oauth2(options: oauth2_v2.Options): oauth2_v2.Oauth2;
