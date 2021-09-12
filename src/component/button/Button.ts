import Yox from 'yox'

import template from './template/Button.hbs'
// import './style/Button.styl'

import Icon from '../icon/Icon'

import {
  UNDEFINED,
  RAW_SMALL,
  RAW_LARGE,
  RAW_DEFAULT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SHAPE_ROUND,
  RAW_SHAPE_CIRCLE,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_TYPE_DASHED,
  RAW_TYPE_LINK,
  RAW_TYPE_TEXT,
  RAW_TYPE_PURE,
} from '../constant'

import {
  oneOf,
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Button',

  propTypes: {
    type: {
      type: oneOf([
        RAW_TYPE_PRIMARY,
        RAW_TYPE_INFO,
        RAW_TYPE_SUCCESS,
        RAW_TYPE_WARNING,
        RAW_TYPE_ERROR,
        RAW_TYPE_DASHED,
        RAW_TYPE_LINK,
        RAW_TYPE_TEXT,
        RAW_TYPE_PURE,
      ]),
      value: RAW_TYPE_PURE,
    },
    size: {
      type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    shape: {
      type: oneOf([RAW_SHAPE_ROUND, RAW_SHAPE_CIRCLE]),
    },
    ghost: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  components: {
    Icon,
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const buttonGroup = findComponentUpward(options.parent, '${prefix}ButtonGroup')
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