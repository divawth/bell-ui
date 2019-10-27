import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Result.hbs'

import {
  RAW_STRING,
  RAW_STATUS_ARRAY,
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

  name: '${prefix}result',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    content: {
      type: RAW_STRING,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
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
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR,
    }
  },

  components: {
    Icon,
  }

})