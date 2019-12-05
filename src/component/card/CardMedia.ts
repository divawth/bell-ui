import Yox from 'yox'

import template from './template/CardMedia.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CardMedia',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})
