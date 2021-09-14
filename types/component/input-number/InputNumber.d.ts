import { CustomEventInterface, YoxInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    customClassName: unknown;
    customPrecision: unknown;
    customMin: unknown;
    customMax: unknown;
    upDisabled: unknown;
    downDisabled: unknown;
}, {
    value: unknown;
}, unknown, {
    handleFocus(event: CustomEventInterface): void;
    handleBlur(event: CustomEventInterface): void;
    handleInput(event: CustomEventInterface): void;
    handleKeydown(event: CustomEventInterface): void;
    handleKeyup(event: CustomEventInterface): void;
    handleEnter(event: CustomEventInterface): void;
    handleUp(event: CustomEventInterface): void;
    handleDown(event: CustomEventInterface): void;
    handleCompositionStart(event: CustomEventInterface): void;
    handleCompositionEnd(event: CustomEventInterface): void;
    updateInputValue(value: any): void;
    changeValue(): void;
    correctValue(): void;
    fireChange(value: any): void;
    getTextInput(): HTMLInputElement;
    getNumberInput(): HTMLInputElement;
}> & ThisType<{
    handleFocus(event: CustomEventInterface): void;
    handleBlur(event: CustomEventInterface): void;
    handleInput(event: CustomEventInterface): void;
    handleKeydown(event: CustomEventInterface): void;
    handleKeyup(event: CustomEventInterface): void;
    handleEnter(event: CustomEventInterface): void;
    handleUp(event: CustomEventInterface): void;
    handleDown(event: CustomEventInterface): void;
    handleCompositionStart(event: CustomEventInterface): void;
    handleCompositionEnd(event: CustomEventInterface): void;
    updateInputValue(value: any): void;
    changeValue(): void;
    correctValue(): void;
    fireChange(value: any): void;
    getTextInput(): HTMLInputElement;
    getNumberInput(): HTMLInputElement;
} & YoxInterface>;
export default _default;
