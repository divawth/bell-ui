import Yox from 'yox'

import template from './template/CardFooter.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CardFooter',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

})