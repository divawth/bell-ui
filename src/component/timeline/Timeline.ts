import Yox from 'yox'

import template from './template/Timeline.hbs'
// import './style/Timeline.styl'

import {
  FALSE,
  RAW_BOOLEAN,
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Timeline',

  propTypes: {
    pending: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },
})
