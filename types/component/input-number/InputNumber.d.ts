import { CustomEventInterface, YoxInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    customClassName: unknown;
    upDisabled: unknown;
    downDisabled: unknown;
}, {
    value: unknown;
}, unknown, {
    handleFocus(event: CustomEventInterface): void;
    handleBlur(event: CustomEventInterface): void;
    handleEnter(event: CustomEventInterface): void;
    updateInputValue(value: any): void;
    fireChange(value: any): void;
}> & ThisType<{
    handleFocus(event: CustomEventInterface): void;
    handleBlur(event: CustomEventInterface): void;
    handleEnter(event: CustomEventInterface): void;
    updateInputValue(value: any): void;
    fireChange(value: any): void;
} & YoxInterface>;
export default _default;
