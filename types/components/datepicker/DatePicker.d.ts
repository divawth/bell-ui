import { Shortcut } from './util';
declare const _default: import("yox").ComponentOptions<{
    defaultSimpleDate: unknown;
    dateText: unknown;
}, unknown, {
    'change.input': unknown;
    'clear.input': unknown;
    'change.date': unknown;
    'change.year': unknown;
    'change.month': unknown;
    'change.week': unknown;
    'change.range': unknown;
}, {
    shortcutClick(data: Shortcut): void;
    open(): void;
    close(): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
    clear(): void;
    ok(): void;
}> & ThisType<{
    shortcutClick(data: Shortcut): void;
    open(): void;
    close(): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
    clear(): void;
    ok(): void;
} & import("yox").YoxInterface>;
export default _default;
