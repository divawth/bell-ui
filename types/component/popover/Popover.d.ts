import { YoxInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<unknown, {
    disabled: unknown;
}, unknown, {
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayRect(): {
        x: any;
        y: any;
        width: any;
    };
    refreshOverlayRect(): void;
    setOverlayRect(el: HTMLElement, x: number | void, y: number | void, width: number | void): void;
}> & ThisType<{
    enter(): void;
    leave(): void;
    fireOpen(): void;
    fireClose(): void;
    toggleVisible(): void;
    getOverlayRect(): {
        x: any;
        y: any;
        width: any;
    };
    refreshOverlayRect(): void;
    setOverlayRect(el: HTMLElement, x: number | void, y: number | void, width: number | void): void;
} & YoxInterface>;
export default _default;
