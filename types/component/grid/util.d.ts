import { Watcher } from 'yox';
declare type breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export declare const responsiveArray: breakpoint[];
export declare function getBreakpoint(): any;
export declare function watchBreakpoint(watcher: Watcher): void;
export declare function unwatchBreakpoint(watcher: Watcher): void;
export declare function parseGutter(breakpoint: breakpoint | void, gutter: string | number | object | void): any;
export {};
