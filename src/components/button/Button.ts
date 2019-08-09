import Yox from 'yox'

import template from './template/Button.hbs'

import {
  FALSE,
  UNDEFINED,
  RAW_DEFAULT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_BORDER_NONE,
  RAW_BORDER_SOLID,
  RAW_BORDER_DASHED,
  RAW_SIZE_COMMON,
} from '../constant'

import {
  oneOf,
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: 'pure',
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    border: {
      type: oneOf([RAW_BORDER_NONE, RAW_BORDER_SOLID, RAW_BORDER_DASHED]),
      value: RAW_BORDER_SOLID,
    },
    shape: {
      type: RAW_STRING,
    },
    fluid: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    ghost: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const buttonGroup = findComponentUpward(options.parent, '${prefix}buttonGroup')
    if (buttonGroup) {

      // 有 group，则 size、shape 全听 group 的
      if (props.size !== UNDEFINED) {
        delete props.size
      }
      if (props.shape !== UNDEFINED) {
        delete props.shape
      }

      if (props.disabled === UNDEFINED) {
        props.disabled = buttonGroup.get('disabled')
      }
    }
    else {
      // 没有 group，则要给 type 和 size 默认值
      if (props.size === UNDEFINED) {
        props.size = RAW_DEFAULT
      }
    }

  }

})