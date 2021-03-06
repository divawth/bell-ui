interface Tab {
    name: string;
    icon: string;
    label: string;
    disabled: boolean;
}
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
}, {
    add: unknown;
    remove: unknown;
    update: unknown;
}, {
    handleCloseTab(tab: Tab): void;
    handleClickTab(tab: Tab): void;
}> & ThisType<{
    handleCloseTab(tab: Tab): void;
    handleClickTab(tab: Tab): void;
} & import("yox").YoxInterface>;
export default _default;
