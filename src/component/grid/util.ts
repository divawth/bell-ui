import Yox, { Watcher } from 'yox'
import { TRUE, UNDEFINED } from '../constant'

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

const store = new Yox({
  data: {
    breakpoint: UNDEFINED,
  }
})

Yox.array.each(
  responsiveArray,
  function (key) {
    const matchMediaQuery = responsiveMap[key]
    const listener = (event: { matches: boolean }) => {
      if (event.matches) {
        store.set('breakpoint', key)
      }
    }
    const mql = window.matchMedia(matchMediaQuery)
    mql.addListener(listener)
    listener(mql)
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