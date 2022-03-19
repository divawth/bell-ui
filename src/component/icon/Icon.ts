import Yox from 'yox'

import template from './template/Icon.hbs'
// import './style/Icon.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toPixel,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Icon',

  propTypes: {
    name: {
      type: RAW_STRING,
      required: TRUE,
    },
    size: {
      type: RAW_NUMERIC,
    },
    color: {
      type: RAW_STRING,
    },
    spin: {
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
    inlineStyle(): object[] | void {
      const result: object[] = []

      const customStyle: Record<string, string> = {}

      const color = this.get('color')
      const size = this.get('size')

      if (color) {
        customStyle.color = color
      }
      if (size > 0) {
        customStyle.fontSize = toPixel(size)
      }

      if (Yox.object.keys(customStyle).length > 0) {
        result.push(customStyle)
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
  }
})