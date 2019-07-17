import { CustomEvent } from 'yox';
declare const _default: import("yox").ComponentOptions<{
    percent: unknown;
}, unknown, unknown, {
    handleTouchStart(event: CustomEvent): void;
    handleTouchEnd(event: CustomEvent): void;
    handleTouchMove(event: CustomEvent): void;
    handleDragMouseMove(event: CustomEvent): void;
    handleMouseDown(event: CustomEvent): void;
    handleDragMouseEnd(): void;
    onDragStart(): void;
    onDragStop(): void;
    onDragUpdate(event: TouchEvent | MouseEvent): void;
    setValue(event: TouchEvent | MouseEvent): void;
}> & ThisType<{
    handleTouchStart(event: CustomEvent): void;
    handleTouchEnd(event: CustomEvent): void;
    handleTouchMove(event: CustomEvent): void;
    handleDragMouseMove(event: CustomEvent): void;
    handleMouseDown(event: CustomEvent): void;
    handleDragMouseEnd(): void;
    onDragStart(): void;
    onDragStop(): void;
    onDragUpdate(event: TouchEvent | MouseEvent): void;
    setValue(event: TouchEvent | MouseEvent): void;
} & import("yox").YoxInterface>;
export default _default;
