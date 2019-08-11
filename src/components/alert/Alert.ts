import Yox from 'yox'

import template from './template/Alert.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    icon: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    center: {
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

  data() {
    return {
      RAW_TYPE_PRIMARY,
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR,
    }
  }
})
