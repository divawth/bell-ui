import Yox from 'yox'

import template from './template/LoadingBar.hbs'
// import './style/LoadingBar.styl'

import {
  UNDEFINED,
  RAW_STRING,
  RAW_NUMBER,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
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
      type: RAW_NUMBER,
      value: 2,
    },
    percent: {
      type: RAW_NUMBER,
      value: 0,
    },
    color: {
      type: RAW_STRING,
    }
  },

  computed: {
    indicatorStyle() {
      const result: object[] = []

      const customStyle: Record<string, string> = {}

      const percent = this.get('percent')
      const height = this.get('height')
      const color = this.get('color')
      customStyle.width = toPercent(percent)
      customStyle.height = toPixel(height)
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
    const next = function () {
      me.timer = setTimeout(
        function () {
          if (!me.timer) {
            return
          }
          const value = me.increase('percent', Math.floor(Math.random() * 10), 98)
          if (value < 98) {
            next()
          }
        },
        300
      )
    }
    next()
  },

  beforeDestroy() {
    const me = this as any
    if (me.timer) {
      clearTimeout(me.timer)
      me.timer = UNDEFINED
    }
  }
})