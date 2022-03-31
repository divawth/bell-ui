import Yox from 'yox'

import template from './template/ResizeObserver.hbs'
// import './style/ResizeObserver.styl'

import {
  RAW_NUMERIC,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import { toNumber } from '../util'

export default Yox.define({

  template,

  name: '${prefix}ResizeObserver',

  propTypes: {
    delay: {
      type: RAW_NUMERIC,
    }
  },

  afterMount() {

    const me = this
    const element = me.$el
    const delay = toNumber(me.get('delay'), 0)

    let timerRef: any
    let timerTimestamp: number
    let actualWidth: number
    let actualHeight: number

    const handleResize = function (width: number, height: number) {
      if (width > 0 && height > 0) {
        actualWidth = width
        actualHeight = height

        // 需要延时的情况下，
        if (delay > 0) {
          const now = Date.now()
          const rest = timerTimestamp > 0 ? now - timerTimestamp : delay
          if (!timerRef) {
            timerTimestamp = now
            timerRef = setTimeout(
              fireResize,
              rest
            )
            return
          }
          if (rest > 0) {
            clearTimeout(timerRef)
            timerRef = setTimeout(
              fireResize,
              delay
            )
            return
          }
        }
        fireResize()

      }
    }

    const fireResize = function () {
      if (timerRef) {
        timerTimestamp = 0
        clearTimeout(timerRef)
      }
      console.log(element, actualWidth, actualHeight, Date.now())
      me.fire(
        {
          type: 'resize',
          ns: 'resizeObserver',
        },
        {
          width: actualWidth,
          height: actualHeight,
        }
      )
    }

    handleResize(element.clientWidth, element.clientHeight)

    // @ts-ignore
    if (ResizeObserver) {
      // @ts-ignore
      const resizeObserver = new ResizeObserver(
        function (entries) {
          const { width, height } = entries[0].contentRect
          handleResize(width, height)
        }
      )
      resizeObserver.observe(element)

      const destroy = function (component) {
        if (component === me) {
          resizeObserver.disconnect()
          Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
        }
      }
      Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)
    }

  }

})
