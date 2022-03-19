import Yox from 'yox'

import template from './template/Card.hbs'
// import './style/Card.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ALWAYS,
  RAW_HOVER,
  RAW_NEVER,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Card',

  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
    },
    shadow: {
      type: oneOf([RAW_ALWAYS, RAW_HOVER, RAW_NEVER]),
      value: RAW_ALWAYS,
    },
    width: {
      type: RAW_NUMERIC,
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

      const width = this.get('width')
      if (width) {
        result.push({
          width: toPixel(width)
        })
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