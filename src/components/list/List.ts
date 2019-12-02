import Yox from 'yox'

import template from './template/List.hbs'
// import './style/List.styl'

import Spin from '../spin/Spin'
import Empty from '../empty/Empty'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}list',

  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    loading: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    clickable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  components: {
    Spin,
    Empty,
  }

})
