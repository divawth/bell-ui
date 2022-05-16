import Yox, { CustomEventInterface, Listener } from 'yox'
import { DOCUMENT, RAW_EVENT_BEFORE_DESTROY, RAW_EVENT_KEYDOWN, TRUE, UNDEFINED } from './constant'

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
export function fireClickEvent(event?: CustomEventInterface, isFromPopover?: boolean) {
  // event 一般会被调用 `event.stop()`
  // 如果直接 fire 原事件，相当于 fire 了一个 stoped 事件，这是不对的
  emitter.fire(
    new Yox.Event('click', event ? event.originalEvent : UNDEFINED),
    { isFromPopover }
  )
}

export function onClickEvent(listener: Listener) {
  emitter.on('click', listener)
}

export function offClickEvent(listener: Listener) {
  emitter.off('click', listener)
}

let startDragTime = 0
let endDragTime = 0

export function startDrag() {
  startDragTime = Date.now()
  endDragTime = 0
}

export function endDrag() {
  endDragTime = Date.now()
}

export function isClickEvent() {
  // 拖拽结束时，mouseup 之后会紧接着触发 click，此时要判断间隔，如果大于 200ms 才算是 click
  if (endDragTime > 0) {
    return Date.now() - endDragTime > 200
  }
  return TRUE
}

export function onClickEventByEnterPress(instance: any) {

  const onKeydown = function (event: CustomEventInterface) {
    const originalEvent = event.originalEvent as KeyboardEvent
    if (originalEvent.keyCode === 13
      && instance.get('isFocus')
    ) {
      instance.onClick()
    }
  }
  Yox.dom.on(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown)

  const onDestroy = function (component: Yox) {
    if (component === instance) {
      Yox.dom.off(DOCUMENT, RAW_EVENT_KEYDOWN, onKeydown)
      Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, onDestroy)
    }
  }
  Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, onDestroy)

}