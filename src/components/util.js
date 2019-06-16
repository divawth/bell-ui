const element = document.createElement('div')

const prefixs = ['Webkit', 'Moz', 'O', 'ms']

function testCSS(property) {

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

export function onTransitionEnd(el, callback) {
  if (transitionEnd) {
    Yox.dom.on(el, transitionEnd, callback)
  }
  else {
    Yox.nextTick(callback)
  }
}

export const requestAnimationFrame = (
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    return window.setTimeout(callback, 1000 / 60)
  }
)

export function contains(element, target) {
  if (element.contains && element.contains(target)) {
    return true
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true
  }
  return false
}

export function findComponentUpward(context, componentName) {
  if (typeof componentName === 'string') {
    componentName = [ componentName ]
  } else {
    componentName = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || componentName.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }

  return parent
}

export function oneOf(values) {
  return function (key, value) {
    if (!Yox.array.has(values, value)) {
      Yox.logger.warn(`${key} 期望是 ${values.join(',')} 中的值，实际传值 ${value}。`)
    }
    return true
  }
}

export function isDate() {
  return function (key, value) {
    if (value instanceof Date) {
      return true
    }
    Yox.logger.warn(`${key} 期望是 Date 类型，实际传值 ${value}。`)
  }
}

export function scrollTop(element, from = 0, to, duration = 500, endCallback) {

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
      element.scrollTop = duration
    }
    requestAnimationFrame(function () {
      scroll(duration, end, step)
    })
  }
  scroll(from, to, step)
}

export function getType(value) {
  return Object.prototype.toString.call(value).toLowerCase().slice(8, -1)
}
