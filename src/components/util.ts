import { UNDEFINED, NULL, DOCUMENT, TRUE, FALSE, WINDOW, BODY } from './constant'
import Yox, { CustomEventInterface, Listener } from 'yox'

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

export const screenWidth = WINDOW.screen.availWidth

const transitionEnd = testCSS('transition') ? 'transitionend' : ''

export const supportTransform = testCSS('transform') ? TRUE : FALSE

export function onTransitionEnd(el: HTMLElement, callback: () => void) {
  // 如果 el 已经被隐藏，则直接调用 callback
  if (transitionEnd && (el.offsetWidth || el.offsetWidth)) {
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


const supportPageOffset = WINDOW.pageXOffset !== UNDEFINED
const isCSS1Compat = (DOCUMENT.compatMode || '') === 'CSS1Compat'

export function getPageX() {
  return supportPageOffset
    ? WINDOW.pageXOffset
    : isCSS1Compat
      ? DOCUMENT.documentElement.scrollLeft
      : BODY.scrollLeft
}

export function getPageY() {
  return supportPageOffset
    ? WINDOW.pageYOffset
    : isCSS1Compat
      ? DOCUMENT.documentElement.scrollTop
      : BODY.scrollTop
}

export const requestAnimationFrame = (
  WINDOW.requestAnimationFrame ||
  WINDOW['webkitRequestAnimationFrame'] ||
  WINDOW['mozRequestAnimationFrame'] ||
  WINDOW['msRequestAnimationFrame'] ||
  function (callback) {
    return WINDOW.setTimeout(callback, 1000 / 60)
  }
)

export function contains(element: HTMLElement, target: HTMLElement) {
  if (element.contains && element.contains(target)) {
    return TRUE
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return TRUE
  }
  return FALSE
}

export function toNumber(value: any, defaultValue?: any) {
  return Yox.is.numeric(value)
    ? +value
    : defaultValue !== UNDEFINED
      ? defaultValue as number
      : 0
}

export function toString(value: any, defaultValue?: any) {
  if (value == NULL) {
    return defaultValue !== UNDEFINED
      ? defaultValue as string
      : ''
  }
  return '' + value
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
  return function (key: string, value: string, componentName: string | undefined) {
    if (!Yox.array.has(values, value)) {
      Yox.logger.warn(`${key} 期望是 ${values.join(',')} 中的值，实际传值 [${value}]。`, componentName)
    }
    return TRUE
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

    if (element === WINDOW) {
      WINDOW.scrollTo(duration, duration)
    }
    else {
      (element as HTMLElement).scrollTop = duration
    }
    requestAnimationFrame(function () {
      scroll(duration, end, step)
    })
  }
  scroll(from, to, step)
}
