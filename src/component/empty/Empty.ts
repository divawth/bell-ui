import Yox from 'yox'

import template from './template/Empty.hbs'
// import './style/Empty.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toPixel,
  toNumber,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Empty',

  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    space: {
      type: RAW_NUMERIC,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    inlineStyle() {

      const result: object[] = []

      const space = toNumber(this.get('space'))
      if (space > 0) {
        result.push({
          marginTop: toPixel(space),
          marginBottom: toPixel(space),
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }

    }
  },

})