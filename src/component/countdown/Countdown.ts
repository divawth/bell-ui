import Yox from 'yox'

import template from './template/Countdown.hbs'
// import './style/Countdown.styl'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  toNumber,
  formatMillisecond,
} from '../util'

const SECOND = 1000

export default Yox.define({

  template,

  name: '${prefix}Countdown',

  propTypes: {
    value: {
      type: RAW_NUMERIC,
    },
    step: {
      type: RAW_NUMERIC,
    },
    format: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    formatedValue() {
      const value = toNumber(this.get('value'))
      const format = this.get('format') || 'HH:mm:ss'
      return formatMillisecond(value, { format })
    }
  },

  afterMount() {

    const me = this

    let timer: number | void
    let step: number

    const clearTimer = function () {
      if (timer) {
        clearInterval(timer)
        timer = UNDEFINED
      }
    }

    const next = function () {
      const value = toNumber(me.get('value'))
      let isFinish: boolean
      if (value > 0) {
        const newValue = Math.max(value - step, 0)
        me.set('value', newValue)
        isFinish = newValue == 0
        me.fire(
          {
            type: 'change',
            ns: 'countdown'
          },
          {
            value: newValue,
          }
        )
      }
      else {
        isFinish = TRUE
      }

      if (isFinish) {
        clearTimer()
        me.fire(
          {
            type: 'finish',
            ns: 'countdown'
          }
        )
      }
    }

    me.watch(
      'step',
      function (newValue) {
        step = toNumber(newValue, SECOND)
        clearTimer()
        if (step > 0) {
          timer = window.setInterval(next, step)
        }
      },
      TRUE
    )

    const destroy = function (component) {
      if (component === me) {
        clearTimer()
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }

})
