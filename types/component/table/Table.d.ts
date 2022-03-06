import { Data, CustomEventInterface } from 'yox';
interface ButtonConfig {
    type: string | void;
    text: string | void;
    size: string | void;
    shape: string | void;
    onClick: (item: Data, index: number) => void;
}
declare const _default: import("yox").ComponentOptions<{
    allChecked: unknown;
}, {
    selection: unknown;
}, unknown, {
    allCheckedChange(event: CustomEventInterface, data: Record<string, any>): void;
    rowCheckedChange(event: CustomEventInterface, data: Record<string, any>, index: number): void;
    clickButton(button: ButtonConfig, item: Record<string, any>, index: number): void;
    sortColumn(key: string, order: string): void;
    updateColumnWidths(): void;
}> & ThisType<{
    allCheckedChange(event: CustomEventInterface, data: Record<string, any>): void;
    rowCheckedChange(event: CustomEventInterface, data: Record<string, any>, index: number): void;
    clickButton(button: ButtonConfig, item: Record<string, any>, index: number): void;
    sortColumn(key: string, order: string): void;
    updateColumnWidths(): void;
} & import("yox").YoxInterface>;
export default _default;
