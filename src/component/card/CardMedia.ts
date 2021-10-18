import Yox from 'yox'

import template from './template/CardMedia.hbs'

import {
  RAW_STRING,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CardMedia',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },
})
