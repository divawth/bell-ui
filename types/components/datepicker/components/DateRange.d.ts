import { SimpleDate } from '../util';
declare const _default: import("yox").ComponentOptions<{
    startDate: unknown;
    endDate: unknown;
    startDatasource: unknown;
    endDatasource: unknown;
    checkedStartTimestamp: unknown;
    checkedEndTimestamp: unknown;
    computedCheckedStartTimestamp: unknown;
    computedCheckedEndTimestamp: unknown;
}, {
    checkedStartDate: unknown;
    checkedEndDate: unknown;
}, unknown, {
    offsetStart(offset: number): void;
    offsetEnd(offset: number): void;
    hover(item: SimpleDate): void;
    leave(): void;
    click(item: SimpleDate): void;
}> & ThisType<{
    offsetStart(offset: number): void;
    offsetEnd(offset: number): void;
    hover(item: SimpleDate): void;
    leave(): void;
    click(item: SimpleDate): void;
} & import("yox").YoxInterface>;
export default _default;
