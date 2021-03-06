import { redis_v1beta1 } from './v1beta1';
export declare const VERSIONS: {
    'v1beta1': typeof redis_v1beta1.Redis;
};
export declare function redis(version: 'v1beta1'): redis_v1beta1.Redis;
export declare function redis(options: redis_v1beta1.Options): redis_v1beta1.Redis;
