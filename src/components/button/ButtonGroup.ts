import Yox from 'yox'

import template from './template/ButtonGroup.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TINY,
  RAW_SMALL,
  RAW_LARGE,
  RAW_DEFAULT,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}buttonGroup',

  propTypes: {
    size: {
      type: oneOf([RAW_DEFAULT, RAW_LARGE, RAW_SMALL, RAW_TINY]),
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
      type: RAW_STRING,
    }
  },

})