import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, unknown, {
    update: unknown;
    outside: unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    selectOption(value: any): void;
    deselectOption(value: any): void;
    updateSelectedOptions(selectedValue: any): void;
    fireChange(value: any): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    selectOption(value: any): void;
    deselectOption(value: any): void;
    updateSelectedOptions(selectedValue: any): void;
    fireChange(value: any): void;
} & import("yox").YoxInterface>;
export default _default;
