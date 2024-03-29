import Yox from 'yox'

import template from './template/List.hbs'
// import './style/List.styl'

import Spin from '../spin/Spin'
import ListEmpty from './ListEmpty'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}List',

  propTypes: {
    simple: {
      type: RAW_BOOLEAN,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    clickable: {
      type: RAW_BOOLEAN,
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  components: {
    Spin,
    ListEmpty,
  }

})
