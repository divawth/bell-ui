import { UNDEFINED, NULL, DOCUMENT, TRUE, FALSE, WINDOW, BODY, RAW_TYPE_SUCCESS, RAW_TYPE_WARNING, RAW_TYPE_ERROR } from './constant'
import Yox, { Listener } from 'yox'

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

export const isMac = /Macintosh/i.test(navigator.userAgent)
export const supportTransform = testCSS('transform') ? TRUE : FALSE
export const supportFlexGap = testCSS('gap') ? TRUE : FALSE

export function onTransitionEnd(el: HTMLElement, callback: () => void) {
  // 如果 el 已经被隐藏，则直接调用 callback
  if (transitionEnd && (el.offsetWidth || el.offsetHeight)) {
    const listener = function () {
      Yox.dom.off(el, transitionEnd, listener as Listener)
      callback()
    }
    Yox.dom.on(
      el,
      transitionEnd,
      listener
    )
  }
  else {
    Yox.nextTick(callback)
  }
}


const supportPageOffset = WINDOW.pageXOffset !== UNDEFINED
const isCSS1Compat = DOCUMENT.compatMode === 'CSS1Compat'

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

export function readElementRectInfo(element: HTMLElement, callback: (rect: object) => void) {

  const rectInfo = element.getBoundingClientRect()
  if (rectInfo.width > 0 || rectInfo.height > 0) {
    callback(rectInfo)
    return
  }

  setTimeout(
    function () {
      readElementRectInfo(element, callback)
    },
    20
  )

}

export function contains(element: HTMLElement, target: HTMLElement) {
  if (element.contains && element.contains(target)) {
    return TRUE
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return TRUE
  }
  return FALSE
}

export function toNumber(value: any, defaultValue?: any): any {
  return Yox.is.numeric(value)
    ? +value
    : defaultValue !== UNDEFINED
      ? defaultValue
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

export function toBoolean(value: any) {
  return Yox.is.boolean(value)
    ? value
    : FALSE
}

export function toPixel(value: number) {
  return value + 'px'
}

export function toPercent(value: number) {
  return value + '%'
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

export function oneOf(values: any[]) {
  return function (key: string, value: any, componentName: string | undefined) {

    // 只需要检测有值的情况
    if (value === UNDEFINED) {
      return
    }

    // 传值在枚举值中
    if (Yox.array.has(values, value, FALSE)) {
      return
    }

    Yox.logger.warn(`${key} 期望是 ${values.join(',')} 中的值，实际传值 [${value}]。`, componentName)

  }
}

export function getNowTime() {
  return Date.now()
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export function formatMillisecond(
  value: number,
  options: {
    format: string,
    trimDay?: boolean,
    trimHour?: boolean,
  }
) {

  let { format, trimDay, trimHour } = options

  const showDay = format.indexOf('d') >= 0
  const showHour = format.indexOf('H') >= 0
  const showMinute = format.indexOf('m') >= 0
  const showSecond = format.indexOf('s') >= 0

  let day = 0
  if (showDay) {
    day = Math.floor(value / DAY)
    value %= DAY
  }

  let hour = 0
  if (showHour) {
    hour = Math.floor(value / HOUR)
    value %= HOUR
  }

  let minute = 0
  if (showMinute) {
    minute = Math.floor(value / MINUTE)
    value %= MINUTE
  }

  let second = 0
  if (showSecond) {
    second = Math.floor(value / SECOND)
    value %= SECOND
  }

  if (!day && trimDay) {
    format = format.replace(/dd:/, '').replace(/d:/, '')
    if (!hour && trimHour) {
      format = format.replace(/HH:/, '').replace(/H:/, '')
    }
  }

  return format
    .replace(/dd/, padStart(day))
    .replace(/d/, toString(day))
    .replace(/HH/, padStart(hour))
    .replace(/H/, toString(hour))
    .replace(/mm/, padStart(minute))
    .replace(/m/, toString(minute))
    .replace(/SSS/, padStart(value, 3))
    .replace(/ss/, padStart(second))
    .replace(/s/, toString(second))

}

export function padStart(value: number, length = 2) {

  const text = toString(value)

  const arrayLength = length - text.length + 1
  if (arrayLength > 0) {
    return new Array(arrayLength).join('0') + value
  }

  return text

}

export function scrollTo(
  element: HTMLElement | Window,
  from: number = 0,
  to: number,
  duration: number = 500,
  callback?: () => void
) {

  const difference = Math.abs(from - to)
  const step = duration > 0 ? Math.ceil(difference / duration * 50) : difference

  function scroll(start, end, step) {
    if (start === end) {
      if (callback) {
        callback()
      }
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

export function getStatusIconName(status: string) {
  return status === RAW_TYPE_SUCCESS
    ? 'checkbox-circle-fill'
    : status === RAW_TYPE_WARNING
      ? 'error-warning-fill'
      : status === RAW_TYPE_ERROR
        ? 'close-circle-fill'
        : 'information-fill'
}

export function spaceListStyle(gaps: number[] | void, vertical: boolean, autoWrap: boolean, style?: any): object[] | void {
  const result: object[] = []

  if (gaps) {
    const gapStyle: Record<string, string> = {}
    const horizontalGap = gaps[0]
    const verticalGap = gaps[1]
    if (supportFlexGap) {
      if (horizontalGap > 0) {
        gapStyle.columnGap = toPixel(horizontalGap)
      }
      if (verticalGap > 0) {
        gapStyle.rowGap = toPixel(verticalGap)
      }
    }
    else if (vertical
      || (verticalGap > 0 && autoWrap)
    ) {
      gapStyle.marginBottom = toPixel(-verticalGap)
    }
    if (Yox.object.keys(gapStyle).length > 0) {
      result.push(gapStyle)
    }
  }

  if (style) {
    result.push(style)
  }

  if (result.length > 0) {
    return result
  }
}

export function spaceItemStyle(gaps: number[] | void, vertical: boolean, autoWrap: boolean, style?: Record<string, string>): Record<string, string> | void {
  const result: Record<string, string> = style || {}
  if (!supportFlexGap && gaps) {
    const horizontalGap = gaps[0]
    const verticalGap = gaps[1]
    if (vertical) {
      if (verticalGap > 0) {
        result.marginBottom = toPixel(verticalGap)
      }
    }
    else {
      if (horizontalGap > 0) {
        result.marginRight = toPixel(horizontalGap)
      }
      if (verticalGap > 0 && autoWrap) {
        result.marginBottom = toPixel(verticalGap)
      }
    }
  }
  if (Yox.object.keys(result).length > 0) {
    return result
  }
}

export function setTreeCheckedKey(
  treeData: any[], checked: boolean,
  isTarget: (node: any, parents: any[]) => boolean,
  isChecked: (node: any, parents: any[]) => boolean,
  addChecked: (node: any, parents: any[]) => void,
  removeChecked: (node: any, parents: any[]) => void,
  interact?: boolean,
  isIndeterminate?: (node: any, parents: any[]) => boolean,
  addIndeterminate?: (node: any, parents: any[]) => void,
  removeIndeterminate?: (node: any, parents: any[]) => void) {

  let node: any

  const parents: any[] = []

  const handleNode = function (child: any) {

    if (isTarget(child, parents)) {
      node = child
      return FALSE
    }

    parents.unshift(child)
    if (child.children) {
      let result = UNDEFINED
      Yox.array.each(
        child.children,
        function (child) {
          return result = handleNode(child)
        }
      )
      if (result === FALSE) {
        return FALSE
      }
    }
    parents.shift()

  }

  Yox.array.each(
    treeData,
    handleNode
  )

  if (!node) {
    return
  }

  const addNode = function (node: any, addChildren?: boolean) {
    if (node.disabled) {
      return
    }
    if (!isChecked(node, parents)) {
      addChecked(node, parents)
    }
    if (addChildren === TRUE && node.children) {
      parents.unshift(node)
      Yox.array.each(
        node.children,
        function (node) {
          addNode(node, TRUE)
        }
      )
      parents.shift()
    }
  }

  const removeNode = function (node: any, removeChildren?: boolean) {
    if (node.disabled) {
      return
    }
    removeChecked(node, parents)
    if (removeChildren === TRUE && node.children) {
      parents.unshift(node)
      Yox.array.each(
        node.children,
        function (node) {
          removeNode(node, TRUE)
        }
      )
      parents.shift()
    }
  }

  const FLAG_ALL_SELECTED = 1
  const FLAG_NONE_SELECTED = -1
  const FLAG_PART_SELECTED = 0

  const getNodeIndeterminate = function (node: any) {

    // 看下兄弟节点是否全部勾选
    const { children } = node
    const { length } = children

    let checkedCount = 0
    let indeterminateCount = 0

    for (let i = 0; i < length; i++) {
      if (isChecked(children[i], parents)) {
        checkedCount++
      }
      if (isIndeterminate && isIndeterminate(children[i], parents)) {
        indeterminateCount++
      }
    }

    if (checkedCount === 0) {
      return indeterminateCount > 0
        ? FLAG_PART_SELECTED
        : FLAG_NONE_SELECTED
    }

    if (checkedCount === length) {
      return FLAG_ALL_SELECTED
    }

    return FLAG_PART_SELECTED

  }

  const setNodeIndeterminate = function (node: any, indeterminate: number) {

    if (!interact) {
      return
    }

    if (indeterminate === FLAG_PART_SELECTED) {
      if (addIndeterminate && isIndeterminate && !isIndeterminate(node, parents)) {
        addIndeterminate(node, parents)
      }
    }
    else {
      if (removeIndeterminate) {
        removeIndeterminate(node, parents)
      }
    }

  }

  if (checked) {
    addNode(node, interact)
    setNodeIndeterminate(node, FLAG_ALL_SELECTED)
    if (interact) {
      Yox.array.each(
        parents.slice(),
        function (parent: any) {

          if (parent.disabled) {
            return FALSE
          }

          const indeterminate = getNodeIndeterminate(parent)

          parents.shift()

          if (indeterminate === FLAG_ALL_SELECTED) {
            addNode(parent)
          }
          else {
            removeNode(parent)
          }

          setNodeIndeterminate(parent, indeterminate)

        }
      )
    }
  }
  else {
    removeNode(node, interact)
    setNodeIndeterminate(node, FLAG_NONE_SELECTED)
    if (interact) {
      Yox.array.each(
        parents.slice(),
        function (parent) {

          if (parent.disabled) {
            return FALSE
          }

          const indeterminate = getNodeIndeterminate(parent)

          parents.shift()

          removeNode(parent)

          setNodeIndeterminate(parent, indeterminate)

        }
      )
    }
  }

}