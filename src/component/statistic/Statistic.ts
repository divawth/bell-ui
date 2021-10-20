import Yox from 'yox'

import template from './template/Statistic.hbs'
// import './style/Statistic.styl'

import {
  TRUE,
  RAW_NUMBER,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Statistic',

  propTypes: {
    title: {
      type: RAW_STRING,
      required: TRUE,
    },
    value: {
      type: [RAW_STRING, RAW_NUMBER],
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    prefix: {
      type: RAW_STRING,
    },
    suffix: {
      type: RAW_STRING,
    },
    color: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  }
})