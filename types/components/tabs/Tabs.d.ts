interface Tab {
    id: string;
    icon: string;
    label: string;
    disabled: boolean;
}
declare const _default: import("yox").ComponentOptions<{
    translateStyle: unknown;
}, {
    value: unknown;
}, {
    tabPanelRemove: unknown;
    tabsValueUpdate: unknown;
    tabPanelAdd: unknown;
}, {
    close(data: Tab): void;
    click(data: Tab): void;
}> & ThisType<{
    close(data: Tab): void;
    click(data: Tab): void;
} & import("yox").YoxInterface>;
export default _default;
