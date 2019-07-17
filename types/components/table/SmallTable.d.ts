import { Data } from 'yox';
interface Row {
    text: string;
    size: string;
    action: (item: Data, index: number) => void;
}
declare const _default: import("yox").ComponentOptions<{
    checkAll: unknown;
}, unknown, {
    'clearCurrentRow.table': unknown;
    'selectAll.table': unknown;
}, {
    checkedChange(data: Record<string, any>, index: number): void;
    checkedAllChange(_: any, data: Record<string, any>): void;
    selectAll(): void;
    clearCurrentRow(): void;
    click(row: Row, item: Record<string, any>, index: number): void;
    rowClick(item: Record<string, any>, index: number): void;
    setChecked(value: boolean, force: boolean, index?: number): void;
}> & ThisType<{
    checkedChange(data: Record<string, any>, index: number): void;
    checkedAllChange(_: any, data: Record<string, any>): void;
    selectAll(): void;
    clearCurrentRow(): void;
    click(row: Row, item: Record<string, any>, index: number): void;
    rowClick(item: Record<string, any>, index: number): void;
    setChecked(value: boolean, force: boolean, index?: number): void;
} & import("yox").YoxInterface>;
export default _default;
