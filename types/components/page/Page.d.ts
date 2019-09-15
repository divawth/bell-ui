declare const _default: import("yox").ComponentOptions<{
    pageList: unknown;
    pageSizeList: unknown;
    count: unknown;
}, {
    current: unknown;
}, {
    'change.select': unknown;
    'enter.input': unknown;
}, {
    showError(error: string): void;
    jump(): void;
    changePage(page: number): void;
}> & ThisType<{
    showError(error: string): void;
    jump(): void;
    changePage(page: number): void;
} & import("yox").YoxInterface>;
export default _default;
