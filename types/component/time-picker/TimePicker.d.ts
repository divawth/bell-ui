import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    componentWidth: unknown;
    needSecond: unknown;
    hourList: unknown;
    minuteList: unknown;
    secondList: unknown;
    hasValue: unknown;
}, unknown, {
    change: unknown;
    submit: unknown;
    outside: unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    fireChange(hour: number, minute: number, second: number): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    fireChange(hour: number, minute: number, second: number): void;
} & import("yox").YoxInterface>;
export default _default;
