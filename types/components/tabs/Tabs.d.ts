interface Tab {
    id: string;
    icon: string;
    label: string;
    disabled: boolean;
}
declare const _default: import("yox").ComponentOptions<unknown, {
    value: unknown;
}, {
    'add.tabPanel': unknown;
    'remove.tabPanel': unknown;
    'update.tabPanel': unknown;
}, {
    handleCloseTab(tab: Tab): void;
    handleClickTab(tab: Tab): void;
    getActiveIndex(): number;
}> & ThisType<{
    handleCloseTab(tab: Tab): void;
    handleClickTab(tab: Tab): void;
    getActiveIndex(): number;
} & import("yox").YoxInterface>;
export default _default;
