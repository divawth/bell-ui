import { CustomEventInterface } from 'yox';
import { Shortcut } from './util';
declare const _default: import("yox").ComponentOptions<{
    defaultSimpleDate: unknown;
    formatedValues: unknown;
}, unknown, {
    'change.input': unknown;
    'clear.input': unknown;
    'change.date': unknown;
    'change.year': unknown;
    'change.month': unknown;
    'change.week': unknown;
    'change.range': unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveItem(event: CustomEventInterface, index: number): void;
    handleShortcutClick(data: Shortcut): void;
    handleOutsideClick(event: CustomEventInterface): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveItem(event: CustomEventInterface, index: number): void;
    handleShortcutClick(data: Shortcut): void;
    handleOutsideClick(event: CustomEventInterface): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
} & import("yox").YoxInterface>;
export default _default;
