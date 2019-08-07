import { UNDEFINED, NULL, DOCUMENT } from './constant'
import Yox, { CustomEventInterface, Listener, YoxInterface } from 'yox';

const element = DOCUMENT.createElement('div')

const prefixs = ['Webkit', 'Moz', 'O', 'ms']

function testCSS(property: string) {

  const upperCase = property.charAt(0).toUpperCase()
                + property.slice(1)

  const list = (property
            + ' '
            + prefixs.join(upperCase + ' ')
            + upperCase).split(' ')

  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i] in element.style) {
      return list[i]
    }
  }

}

const transitionEnd = testCSS('transition') ? 'transitionend' : ''

export const supportTransform = testCSS('transform') ? true : false

export function onTransitionEnd(el: HTMLElement, callback: () => void) {
  if (transitionEnd) {
    Yox.dom.on(
      el,
      transitionEnd,
      function (event: CustomEventInterface) {
        Yox.dom.off(el, transitionEnd, event.listener as Listener)
        callback()
      }
    )
  }
  else {
    Yox.nextTick(callback)
  }
}

export const requestAnimationFrame = (
  window['webkitRequestAnimationFrame'] ||
  window['mozRequestAnimationFrame'] ||
  window['msRequestAnimationFrame'] ||
  function (callback) {
    return window.setTimeout(callback, 1000 / 60)
  }
)

export function contains(element: HTMLElement, target: HTMLElement) {
  if (element.contains && element.contains(target)) {
    return true
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true
  }
  return false
}

export function isDef(value: any) {
  return value !== UNDEFINED
}

export function toNumber(value: any, defaultValue?: any) {
  return Yox.is.numeric(value)
    ? +value
    : defaultValue !== UNDEFINED
      ? defaultValue as number
      : 0
}

export function findComponentUpward(parent, componentName: string | string[]) {
  if (typeof componentName === 'string') {
    componentName = [ componentName ]
  }
  else {
    componentName = componentName
  }

  while (parent) {
    let { name } = parent.$options
    if (name && Yox.array.has(componentName, name)) {
      break
    }
    else {
      parent = parent.$parent
    }
  }

  return parent
}

export function oneOf(values: string[]) {
  return function (key: string, value: string) {
    if (!Yox.array.has(values, value)) {
      Yox.logger.warn(`${key} 期望是 ${values.join(',')} 中的值，实际传值 ${value}。`)
    }
    return true
  }
}

export function isDate() {
  return function (key: string, value: Date) {
    if (value instanceof Date) {
      return true
    }
    Yox.logger.warn(`${key} 期望是 Date 类型，实际传值 ${value}。`)
  }
}

export function isDateValue() {
  return function (key: string, value: Date | Date[]) {
    if (value instanceof Date) {
      return true
    }
    else if (Yox.is.array(value)) {
      return value.filter(date => date instanceof Date).length === value.length
    }
    Yox.logger.warn(`${key} 期望是 Date 类型，实际传值 ${value}。`)
  }
}

export function scrollTop(
  element: HTMLElement | Window,
  from: number = 0,
  to: number,
  duration: number = 500,
  endCallback?: () => void
) {

  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let duration = (start + step > end) ? end : start + step
    if (start > end) {
      duration = (start - step < end) ? end : start - step
    }

    if (element === window) {
      window.scrollTo(duration, duration)
    } else {
      (element as HTMLElement).scrollTop = duration
    }
    requestAnimationFrame(function () {
      scroll(duration, end, step)
    })
  }
  scroll(from, to, step)
}

export function getType(value: any) {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1)
}

export function debounce(
  fn: (event: CustomEventInterface) => void,
  time: number,
  immediate: boolean
) {
  let timer: any
  return function () {
    if (timer) return
    let args = Array.prototype.slice.call(arguments)
    if (immediate) {
      fn.apply(NULL, args)
    }
    timer = setTimeout(function () {
      if (!immediate) fn.apply(NULL, args)
      clearTimeout(timer)
      timer = NULL
    }, time)
  }
}