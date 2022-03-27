import Yox, { Watcher } from 'yox'

type breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const responsiveMap: Record<breakpoint, string> = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
}

export const responsiveArray: breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

function eachBreakpoints(callback: (breakpoint: breakpoint, mql: MediaQueryList) => void) {
  Yox.array.each(
    responsiveArray,
    function (key) {
      callback(
        key,
        window.matchMedia(responsiveMap[key])
      )
    }
  )
}

function getCurrentBreakpoint() {
  let result: breakpoint
  eachBreakpoints(
    function (breakpoint, mql) {
      if (mql.matches) {
        result = breakpoint
      }
    }
  )
  return result
}

const store = new Yox({
  data: {
    breakpoint: getCurrentBreakpoint(),
  }
})

eachBreakpoints(
  function (breakpoint, mql) {
    const listener = function (event: { matches: boolean }) {
      if (event.matches) {
        store.set('breakpoint', breakpoint)
      }
      else if (store.get('breakpoint') === breakpoint) {
        store.set(
          'breakpoint',
          getCurrentBreakpoint()
        )
      }
    }
    mql.addListener(listener)
  }
)

export function getBreakpoint() {
  return store.get('breakpoint')
}

export function watchBreakpoint(watcher: Watcher) {
  store.watch('breakpoint', watcher)
}

export function unwatchBreakpoint(watcher: Watcher) {
  store.unwatch('breakpoint', watcher)
}

export function parseGutter(breakpoint: breakpoint | void, gutter: string | number | object | void) {

  if (gutter > 0) {
    return gutter
  }
  else if (breakpoint && Yox.is.object(gutter)) {
    // 找最接近的
    const startIndex = responsiveArray.indexOf(breakpoint)
    if (startIndex >= 0) {
      for (let i = startIndex; i >= 0; i--) {
        const value = gutter[responsiveArray[i]]
        if (value > 0) {
          return value
        }
      }
    }
  }

}