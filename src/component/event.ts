import Yox, { CustomEventInterface, Listener } from 'yox'

const emitter = new Yox()

/**
 * 有些组件会调用 `event.stop()` 阻止事件冒泡
 *
 * 但是，有些地方需要监听全局点击事件，这些组件的点击事件不能被忽略
 *
 * 因此，我们加一个全局方法，让组件再调用 `event.stop()` 之后再调用 `fireClickEvent()`
 *
 * @param event
 */
export function fireClickEvent(event: CustomEventInterface, isFromPopover?: boolean) {
  // event 一般会被调用 `event.stop()`
  // 如果直接 fire 原事件，相当于 fire 了一个 stoped 事件，这是不对的
  emitter.fire(
    new Yox.Event('click', event.originalEvent),
    { isFromPopover }
  )
}

export function onClickEvent(listener: Listener) {
  emitter.on('click', listener)
}

export function offClickEvent(listener: Listener) {
  emitter.off('click', listener)
}
