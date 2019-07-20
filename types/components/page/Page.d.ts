import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    current: unknown;
}, {
    change: unknown;
}, {
    showError(error: string): void;
    elevator(): void;
    pageSizeChange(event: CustomEventInterface, data: Record<string, any>): void;
    fastPrev(): void;
    fastNext(): void;
    prev(): void;
    next(): void;
    changePage(page: number): void;
    updateCount(): void;
}> & ThisType<{
    showError(error: string): void;
    elevator(): void;
    pageSizeChange(event: CustomEventInterface, data: Record<string, any>): void;
    fastPrev(): void;
    fastNext(): void;
    prev(): void;
    next(): void;
    changePage(page: number): void;
    updateCount(): void;
} & import("yox").YoxInterface>;
export default _default;
