import { YoxInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    disabled: unknown;
}, unknown, {
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayPosition(): {
        left: any;
        top: any;
    };
    refreshOverlayPosition(): void;
    setOverlayPosition(el: HTMLElement, left: number | void, top: number | void): void;
}> & ThisType<{
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayPosition(): {
        left: any;
        top: any;
    };
    refreshOverlayPosition(): void;
    setOverlayPosition(el: HTMLElement, left: number | void, top: number | void): void;
} & YoxInterface>;
export default _default;
