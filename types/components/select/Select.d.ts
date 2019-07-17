import { CustomEvent } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
}, {
    selectedOptionChange: unknown;
    optionAdd: unknown;
    optionRemove: unknown;
    optionSelect: unknown;
}, {
    clear(): void;
    setArrayValue(text: string, values: string[]): any;
    tagClose(event: CustomEvent, text: string, index: number): void;
    toggleMenu(): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
}> & ThisType<{
    clear(): void;
    setArrayValue(text: string, values: string[]): any;
    tagClose(event: CustomEvent, text: string, index: number): void;
    toggleMenu(): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
} & import("yox").YoxInterface>;
export default _default;
