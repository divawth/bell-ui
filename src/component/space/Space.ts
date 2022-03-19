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
    sizeValue() {

      const size = this.get('size')
      if (size == NULL) {
        return
      }

      // 配置两个方向的间距
      if (Yox.is.array(size)) {
        return `${size[1]}px ${size[0]}px`
      }

      // 配置一个方向的间距
      const value = toNumber(size)
      if (value > 0) {
        return toPixel(value)
      }

    }
  }

})
