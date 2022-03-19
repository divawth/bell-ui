import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/LayoutSider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toNumber, toPixel,
} from '../util'

export default Yox.define({

  template,

  model: 'collapsed',

  name: '${prefix}LayoutSider',

  propTypes: {
    showTrigger: {
      type: RAW_BOOLEAN,
    },
    collapsed: {
      type: RAW_BOOLEAN,
    },
    width: {
      type: RAW_NUMERIC,
      value: 200
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    customWidth(): number {
      if (this.get('collapsed')) {
        return 80
      }
      return toNumber(this.get('width'))
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const customWidth = this.get('customWidth')
      if (customWidth) {
        result.push({
          flex: '0 0 ' + toPixel(customWidth),
          width: toPixel(customWidth),
          minWidth: toPixel(customWidth),
          maxWidth: toPixel(customWidth),
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
    triggerStyle(): Record<string, string> | void {
      const customWidth = this.get('customWidth')
      if (customWidth) {
        return {
          width: toPixel(customWidth)
        }
      }
    },
  },

  components: {
    Icon,
  }

})
