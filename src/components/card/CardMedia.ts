import Yox from 'yox'

import template from './template/CardMedia.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    title: {
      type: RAW_STRING,
    },
    subTitle: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})
