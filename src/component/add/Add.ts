import Yox from 'yox'

import template from './template/Add.hbs'
// import './style/Add.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

import { toPixel } from '../util'

export default Yox.define({

  template,

  name: '${prefix}Add',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    width: {
      type: RAW_NUMERIC,
      value: 100,
    },
    height: {
      type: RAW_NUMERIC,
      value: 100,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    vertical: {
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

      const width = this.get('width')
      const height = this.get('height')

      if (this.get('block')) {
        result.push({
          height: toPixel(height),
        })
      }
      else {
        result.push({
          width: toPixel(width),
          height: toPixel(height),
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
  },

  components: {
    Icon,
  }

})
