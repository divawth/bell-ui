import { CustomEventInterface, YoxInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
    visible: unknown;
}, {
    'add.selectOption': unknown;
    'remove.selectOption': unknown;
    'click.selectOption': unknown;
}, {
    handleToggleClick(): void;
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    notifyOptionSelected(option: YoxInterface): void;
    notifyOptionUnselected(option: YoxInterface): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
}> & ThisType<{
    handleToggleClick(): void;
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveOption(event: CustomEventInterface, index: number): void;
    notifyOptionSelected(option: YoxInterface): void;
    notifyOptionUnselected(option: YoxInterface): void;
    decreaseHoverIndex(): void;
    increaseHoverIndex(): void;
    selectOption(): void;
} & YoxInterface>;
export default _default;
