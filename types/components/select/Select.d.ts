import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
}, {
    'selected.selectOption': unknown;
    'add.selectOption': unknown;
    'remove.selectOption': unknown;
    'click.selectOption': unknown;
}, {
    handleToggleClick(): void;
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
}> & ThisType<{
    handleToggleClick(): void;
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
} & import("yox").YoxInterface>;
export default _default;
