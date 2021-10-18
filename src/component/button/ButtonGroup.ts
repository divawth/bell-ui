import Yox from 'yox'

import template from './template/ButtonGroup.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SMALL,
  RAW_LARGE,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}ButtonGroup',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL]),
      value: RAW_DEFAULT,
    },
    shape: {
      type: oneOf([RAW_SHAPE_ROUND, RAW_SHAPE_CIRCLE]),
    },
    vertical: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

})