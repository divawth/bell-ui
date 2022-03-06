declare const _default: import("yox").ComponentOptions<{
    pageList: unknown;
    pageSizeList: unknown;
    count: unknown;
}, {
    current: unknown;
}, unknown[], {
    showError(error: string): void;
    jump(): void;
    setCurrent(current: number): void;
    decreaseCurrent(step: number): void;
    increaseCurrent(step: number): void;
}> & ThisType<{
    showError(error: string): void;
    jump(): void;
    setCurrent(current: number): void;
    decreaseCurrent(step: number): void;
    increaseCurrent(step: number): void;
} & import("yox").YoxInterface>;
export default _default;
