export declare const WEEKS: string[];
export declare const SECOND = 1000;
export declare const MINUTE: number;
export declare const HOUR: number;
export declare const DAY: number;
export declare const STABLE_DURATION: number;
export declare const MONTHS: string[];
export declare const RAW_TYPE_DATE = "date";
export declare const RAW_TYPE_DATE_RANGE = "dateRange";
export declare const RAW_TYPE_WEEK = "week";
export declare const RAW_TYPE_YEAR = "year";
export declare const RAW_TYPE_MONTH = "month";
export interface SimpleMonth {
    timestamp: number;
    year: number;
    month: number;
    text: string;
}
export interface SimpleDate {
    timestamp: number;
    year: number;
    month: number;
    date: number;
}
export interface SimpleRange {
    start: SimpleDate;
    end: SimpleDate;
}
export interface DateRow {
    start: SimpleDate;
    end: SimpleDate;
    list: SimpleDate[];
}
export interface Shortcut {
    text: string;
    onClick: () => Date | Date[];
}
export declare function toSimpleDate(date: Date | number): SimpleDate;
export declare function toDate(date: Date | number): Date;
export declare function toTimestamp(date: Date | number | void): number;
export declare function offsetMonth(timestamp: number, offset: number): number;
export declare function createYearViewDatasource(startYear: number, count: number): number[][];
export declare function createMonthViewDatasource(year: number): SimpleMonth[][];
export declare function createDateViewDatasource(timestamp: number): DateRow[];
/**
 * yyyy -> 2019
 * M    -> 1
 * MM   -> 01
 * d    -> 1
 * dd   -> 01
 */
export declare function formatDate(date: Date, format: string): string;
