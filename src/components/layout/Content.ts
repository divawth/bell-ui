import Yox from 'yox'

import template from './template/Content.hbs'

import {
  FALSE,
  TRUE,
  RAW_STRING
} from '../constant'

export default Yox.create({
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  events: {
    hasSider() {
      this.set({
        hasSider: TRUE
      })
    }
  },

  data() {
    return {
      hasSider: FALSE
    }
  }
})