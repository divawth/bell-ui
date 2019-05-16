const contains = function(element, target) {
  if (element.contains && element.contains(target)) {
    return true
  }
  else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
    return true
  }
  return false
}

const findComponentUpward = function (context, componentName) {
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

const oneOf = function (values) {
  return function (props, key) {
    if (!Yox.array.has(values, props[ key ])) {
      Yox.logger.warn(`${key} 期望是 ${values.join(',')} 中的值，实际传值 ${props[key]}。`)
    }
    return true
  }
}

const scrollTop = function (element, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
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
    window.requestAnimationFrame(function () {
      scroll(duration, end, step)
    })
  }
  scroll(from, to, step)
}

export {
  contains,
  findComponentUpward,
  oneOf,
  scrollTop
}
