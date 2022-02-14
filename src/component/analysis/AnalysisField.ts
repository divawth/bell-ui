import Yox from 'yox'

import template from './template/AnalysisField.hbs'
// import './style/AnalysisField.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  RAW_NUMBER,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}AnalysisField',

  propTypes: {
    label: {
      type: RAW_STRING,
      required: TRUE,
    },
    value: {
      type: [RAW_STRING, RAW_NUMBER],
    },
    up: {
      type: RAW_BOOLEAN,
    },
    down: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  components: {
    Icon,
  }

})