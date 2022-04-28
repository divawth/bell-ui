import Yox from 'yox'

import template from './template/LoadingBar.hbs'
// import './style/LoadingBar.styl'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMBER,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_STYLE_TYPE,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
  toPixel,
  toPercent,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}LoadingBar',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    height: {
      type: RAW_NUMERIC,
      value: 2,
    },
    percent: {
      type: RAW_NUMBER,
      value: 0,
    },
    color: {
      type: RAW_STRING,
    },
    manual: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    indicatorStyle() {
      const result: object[] = []

      const percent = this.get('percent')
      const height = this.get('height')
      const color = this.get('color')

      const customStyle: Record<string, string> = {
        width: toPercent(percent),
        height: toPixel(height),
      }

      if (color) {
        customStyle.color = color
      }

      result.push(customStyle)

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    }
  },

  afterMount() {

    const me = this as any

    let timer: number | undefined

    const next = function () {
      timer = window.setTimeout(
        function () {
          timer = UNDEFINED
          const value = me.increase('percent', Math.floor(Math.random() * 10), 98)
          if (value < 98) {
            next()
          }
        },
        300
      )
    }

    me.watch(
      'manual',
      function (manual: boolean) {
        if (manual) {
          if (timer) {
            clearTimeout(timer)
            timer = UNDEFINED
          }
        }
        else {
          next()
        }
      },
      TRUE
    )

    const destroy = function (component: any) {
      if (component === me) {
        if (timer) {
          clearTimeout(timer)
          timer = UNDEFINED
        }
        Yox.lifeCycle.off(RAW_EVENT_BEFORE_DESTROY, destroy)
      }
    }
    Yox.lifeCycle.on(RAW_EVENT_BEFORE_DESTROY, destroy)

  }

})