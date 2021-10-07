import { YoxInterface, Data } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    disabled: unknown;
}, unknown, {
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayPosition(): {
        left: string;
        top: string;
    };
    refreshOverlayPosition(): void;
    setOverlayStyle(el: HTMLElement, style: Data, clear?: boolean): void;
}> & ThisType<{
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayPosition(): {
        left: string;
        top: string;
    };
    refreshOverlayPosition(): void;
    setOverlayStyle(el: HTMLElement, style: Data, clear?: boolean): void;
} & YoxInterface>;
export default _default;
