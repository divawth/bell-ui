import { DateType } from '../type';
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
    currentDate: unknown;
}, {
    'clear.datepicker': unknown;
}, {
    changeDateList(offset: number): void;
    addDates(date: DateType): void;
    click(date: DateType): void;
    getDateString(date: DateType): string;
    getDateIndex(item: DateType, list: string[]): number;
    getDataSource(start: number, end: number, modeDate: DateType, currentDate: DateType, selectedDates: string[]): any[];
    createRenderData(modeDate: DateType, currentDate: DateType, selectedDates: string[]): any[];
}> & ThisType<{
    changeDateList(offset: number): void;
    addDates(date: DateType): void;
    click(date: DateType): void;
    getDateString(date: DateType): string;
    getDateIndex(item: DateType, list: string[]): number;
    getDataSource(start: number, end: number, modeDate: DateType, currentDate: DateType, selectedDates: string[]): any[];
    createRenderData(modeDate: DateType, currentDate: DateType, selectedDates: string[]): any[];
} & import("yox").YoxInterface>;
export default _default;
