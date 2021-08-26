import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    componentWidth: unknown;
    needSecond: unknown;
    hourList: unknown;
    minuteList: unknown;
    secondList: unknown;
    hasValue: unknown;
}, unknown, {
    'change.timePanel': unknown;
    'submit.timePanel': unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    handleOutsideClick(event: CustomEventInterface): void;
    fireChange(hour: number, minute: number, second: number): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    handleOutsideClick(event: CustomEventInterface): void;
    fireChange(hour: number, minute: number, second: number): void;
} & import("yox").YoxInterface>;
export default _default;
