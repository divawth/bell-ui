import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, unknown, {
    update: unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    handleOutsideClick(event: CustomEventInterface): void;
    selectOption(value: any): void;
    deselectOption(value: any): void;
    updateSelectedOptions(value: any): void;
    fireChange(value: any): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    handleOutsideClick(event: CustomEventInterface): void;
    selectOption(value: any): void;
    deselectOption(value: any): void;
    updateSelectedOptions(value: any): void;
    fireChange(value: any): void;
} & import("yox").YoxInterface>;
export default _default;
