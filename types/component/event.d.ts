import { CustomEventInterface, Listener } from 'yox';
/**
 * 有些组件会调用 `event.stop()` 阻止事件冒泡
 *
 * 但是，有些地方需要监听全局点击事件，这些组件的点击事件不能被忽略
 *
 * 因此，我们加一个全局方法，让组件再调用 `event.stop()` 之后再调用 `fireClickEvent()`
 *
 * @param event
 */
export declare function fireClickEvent(event: CustomEventInterface, isFromPopover?: boolean): void;
export declare function onClickEvent(listener: Listener): void;
export declare function offClickEvent(listener: Listener): void;
export declare function startDrag(): void;
export declare function endDrag(): void;
export declare function isClickEvent(): boolean;
