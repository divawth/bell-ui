import { DateRow, SimpleDate } from '../util';
declare const _default: import("yox").ComponentOptions<{
    date: unknown;
    datasource: unknown;
    checkedTimestamp: unknown;
}, unknown, {
    'change.year': unknown;
    'change.month': unknown;
}, {
    inCurrentMonth(item: SimpleDate): boolean;
    offset(offset: number): void;
    click(row: DateRow): void;
}> & ThisType<{
    inCurrentMonth(item: SimpleDate): boolean;
    offset(offset: number): void;
    click(row: DateRow): void;
} & import("yox").YoxInterface>;
export default _default;
