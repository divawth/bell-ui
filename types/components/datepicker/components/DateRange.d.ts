import { DateType } from '../type';
declare const _default: import("yox").ComponentOptions<{
    startModeDateYear: unknown;
    startModeDateMonth: unknown;
    endModeDateYear: unknown;
    endModeDateMonth: unknown;
}, {
    value: unknown;
}, {
    'clear.datepicker': unknown;
}, {
    changeStartModeDate(offset: number): void;
    changeEndModeDate(offset: number): void;
    startPrevYear(): void;
    startPrevMonth(): void;
    startNextYear(): void;
    startNextMonth(): void;
    endPrevYear(): void;
    endPrevMonth(): void;
    endNextYear(): void;
    endNextMonth(): void;
    hover(date: DateType): void;
    click(date: DateType): void;
    refresh(start: number, end: number): void;
    getDataSource(start: number, end: number, date: DateType, checkedStartDate?: DateType, checkedEndDate?: DateType): any[];
    createRenderData(date: Date, checkedStartDate?: DateType, checkedEndDate?: DateType): any[];
}> & ThisType<{
    changeStartModeDate(offset: number): void;
    changeEndModeDate(offset: number): void;
    startPrevYear(): void;
    startPrevMonth(): void;
    startNextYear(): void;
    startNextMonth(): void;
    endPrevYear(): void;
    endPrevMonth(): void;
    endNextYear(): void;
    endNextMonth(): void;
    hover(date: DateType): void;
    click(date: DateType): void;
    refresh(start: number, end: number): void;
    getDataSource(start: number, end: number, date: DateType, checkedStartDate?: DateType, checkedEndDate?: DateType): any[];
    createRenderData(date: Date, checkedStartDate?: DateType, checkedEndDate?: DateType): any[];
} & import("yox").YoxInterface>;
export default _default;
