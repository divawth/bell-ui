import Yox from 'yox'

import template from './template/AnchorLink.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({

  propTypes: {
    href: {
      type: RAW_STRING
    },
    title: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template
})
