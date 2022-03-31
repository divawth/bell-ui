import Yox from 'yox'

import template from './template/Space.hbs'
// import './style/Space.styl'

import {
  NULL,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  supportFlexGap,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Space',

  propTypes: {
    size: {
      type: [RAW_NUMERIC, RAW_ARRAY],
      value: [8, 10],
    },
    align: {
      type: oneOf(['start', 'end', 'center', 'baseline']),
      value: 'center',
    },
    block: {
      type: RAW_BOOLEAN,
    },
    vertical: {
      type: RAW_BOOLEAN,
    },
    autoWrap: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      supportFlexGap,
    }
  },

  computed: {
    sizeArray() {

      const size = this.get('size')
      if (size == NULL) {
        return
      }

      // 配置两个方向的间距
      if (Yox.is.array(size) && (size[0] > 0 || size[1] > 0)) {
        return size
      }

      // 配置一个方向的间距
      const value = toNumber(size)
      if (value > 0) {
        return [value]
      }

    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const sizeArray = this.get('sizeArray')
      if (sizeArray) {
        const gapStyle: Record<string, string> = {}
        const horizontalGap = sizeArray[0]
        const verticalGap = sizeArray[1]
        if (supportFlexGap) {
          if (horizontalGap > 0) {
            gapStyle.columnGap = toPixel(horizontalGap)
          }
          if (verticalGap > 0) {
            gapStyle.rowGap = toPixel(verticalGap)
          }
        }
        else if (this.get('vertical')
          || (verticalGap > 0 && this.get('autoWrap'))
        ) {
          gapStyle.marginBottom = toPixel(-verticalGap)
        }
        if (Yox.object.keys(gapStyle).length > 0) {
          result.push(gapStyle)
        }
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
    itemStyle(): Record<string, string> | void {
      if (supportFlexGap) {
        return
      }
      const sizeArray = this.get('sizeArray')
      if (sizeArray) {
        const result: Record<string, string> = {}
        const horizontalGap = sizeArray[0]
        const verticalGap = sizeArray[1]
        if (this.get('vertical')) {
          if (verticalGap > 0) {
            result.marginBottom = toPixel(verticalGap)
          }
        }
        else {
          if (horizontalGap > 0) {
            result.marginRight = toPixel(horizontalGap)
          }
          if (verticalGap > 0 && this.get('autoWrap')) {
            result.marginBottom = toPixel(verticalGap)
          }
        }
        if (Yox.object.keys(result).length > 0) {
          return result
        }
      }
    },
  }

})
