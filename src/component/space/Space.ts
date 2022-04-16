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
  toNumber,
  spaceListStyle,
  spaceItemStyle,
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
      return spaceListStyle(
        this.get('sizeArray'),
        this.get('vertical'),
        this.get('autoWrap'),
        this.get('style')
      )
    },
    itemStyle(): Record<string, string> | void {
      return spaceItemStyle(
        this.get('sizeArray'),
        this.get('vertical'),
        this.get('autoWrap')
      )
    },
  }

})
