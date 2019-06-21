import Yox from 'yox'

import template from './template/Item.hbs'

import {
  FALSE,
  RAW_BOOLEAN,
  RAW_STRING,
} from '../constant'

export default Yox.create({
  propTypes: {
    disableHover: {
      type: RAW_BOOLEAN
    },
    active: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      nestedIsShow: FALSE
    }
  },

  events: {
    click() {
      this.toggle('nestedIsShow')
    }
  },

})
