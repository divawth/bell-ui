import Yox from 'yox'

import template from './template/Analysis.hbs'
// import './style/Analysis.styl'

import Icon from '../icon/Icon'
import Tooltip from '../tooltip/Tooltip'
import Skeleton from '../skeleton/Skeleton'

import {
  TRUE,
  RAW_TOP,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Analysis',

  propTypes: {
    title: {
      type: RAW_STRING,
      required: TRUE,
    },
    value: {
      type: [RAW_STRING, RAW_NUMBER],
    },
    tooltip: {
      type: RAW_STRING,
    },
    loading: {
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
      RAW_TOP,
    }
  },

  components: {
    Icon,
    Tooltip,
    Skeleton,
  },

})