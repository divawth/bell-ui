import Yox from 'yox'

import template from './template/LayoutContent.hbs'

import {
  RAW_STRING
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}LayoutContent',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})