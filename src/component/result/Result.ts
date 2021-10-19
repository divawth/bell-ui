import Yox from 'yox'

import template from './template/Result.hbs'
// import './style/Result.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_STATUS_ARRAY,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Result',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    subTitle: {
      type: RAW_STRING,
    },
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
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