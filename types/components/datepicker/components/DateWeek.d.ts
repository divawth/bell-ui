import { DateType } from '../type';
declare const _default: import("yox").ComponentOptions<{
    currentYear: unknown;
    currentMonth: unknown;
}, unknown, unknown, {
    changeDate(offset: number): void;
    prevYear(): void;
    prevMonth(): void;
    nextYear(): void;
    nextMonth(): void;
    click(date: DateType[]): void;
    refresh(start: number): void;
    getDatasource(start: number, end: number, date: DateType, checkedDateTime: number): any[];
    createRenderData(modeDate: Date, checkedDateTime: number): any[];
    format(list: DateType[]): any[];
}> & ThisType<{
    changeDate(offset: number): void;
    prevYear(): void;
    prevMonth(): void;
    nextYear(): void;
    nextMonth(): void;
    click(date: DateType[]): void;
    refresh(start: number): void;
    getDatasource(start: number, end: number, date: DateType, checkedDateTime: number): any[];
    createRenderData(modeDate: Date, checkedDateTime: number): any[];
    format(list: DateType[]): any[];
} & import("yox").YoxInterface>;
export default _default;
