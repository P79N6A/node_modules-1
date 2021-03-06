import { content_v2 } from './v2';
import { content_v2sandbox } from './v2sandbox';
export declare const VERSIONS: {
    'v2': typeof content_v2.Content;
    'v2sandbox': typeof content_v2sandbox.Content;
};
export declare function content(version: 'v2'): content_v2.Content;
export declare function content(options: content_v2.Options): content_v2.Content;
export declare function content(version: 'v2sandbox'): content_v2sandbox.Content;
export declare function content(options: content_v2sandbox.Options): content_v2sandbox.Content;
