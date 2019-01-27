import { blogger_v2 } from './v2';
import { blogger_v3 } from './v3';
export declare const VERSIONS: {
    'v2': typeof blogger_v2.Blogger;
    'v3': typeof blogger_v3.Blogger;
};
export declare function blogger(version: 'v2'): blogger_v2.Blogger;
export declare function blogger(options: blogger_v2.Options): blogger_v2.Blogger;
export declare function blogger(version: 'v3'): blogger_v3.Blogger;
export declare function blogger(options: blogger_v3.Options): blogger_v3.Blogger;
