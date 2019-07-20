import { CustomEventInterface } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    percent: unknown;
}, unknown, unknown, {
    handleTouchStart(event: CustomEventInterface): void;
    handleTouchEnd(event: CustomEventInterface): void;
    handleTouchMove(event: CustomEventInterface): void;
    handleDragMouseMove(event: CustomEventInterface): void;
    handleMouseDown(event: CustomEventInterface): void;
    handleDragMouseEnd(): void;
    onDragStart(): void;
    onDragStop(): void;
    onDragUpdate(event: TouchEvent | MouseEvent): void;
    setValue(event: TouchEvent | MouseEvent): void;
}> & ThisType<{
    handleTouchStart(event: CustomEventInterface): void;
    handleTouchEnd(event: CustomEventInterface): void;
    handleTouchMove(event: CustomEventInterface): void;
    handleDragMouseMove(event: CustomEventInterface): void;
    handleMouseDown(event: CustomEventInterface): void;
    handleDragMouseEnd(): void;
    onDragStart(): void;
    onDragStop(): void;
    onDragUpdate(event: TouchEvent | MouseEvent): void;
    setValue(event: TouchEvent | MouseEvent): void;
} & import("yox").YoxInterface>;
export default _default;
