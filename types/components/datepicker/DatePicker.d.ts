import { DateType, DateRangeType, ShortcutType } from './type';
declare const _default: import("yox").ComponentOptions<{
    autoClose: unknown;
    isOpen: unknown;
}, unknown, {
    'change.input': unknown;
    'clear.input': unknown;
    'change.date': unknown;
    'change.year': unknown;
    'change.month': unknown;
    'change.week': unknown;
    'change.daterange': unknown;
}, {
    shortcutClick(data: ShortcutType): void;
    focus(): void;
    close(): void;
    formatDate(start: DateType, end?: DateType): string;
    dateChange(date: DateType): void;
    dateRangeChange(data: DateRangeType): void;
    clear(): void;
    ok(): void;
}> & ThisType<{
    shortcutClick(data: ShortcutType): void;
    focus(): void;
    close(): void;
    formatDate(start: DateType, end?: DateType): string;
    dateChange(date: DateType): void;
    dateRangeChange(data: DateRangeType): void;
    clear(): void;
    ok(): void;
} & import("yox").YoxInterface>;
export default _default;
