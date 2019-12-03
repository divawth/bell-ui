import Yox from 'yox'

import template from './template/ListItem.hbs'

import {
  FALSE,
  RAW_STRING,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}listItem',

  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {
    const list = findComponentUpward(options.parent, '${prefix}list')
    return {
      clickable: list
        ? list.get('clickable')
        : FALSE
    }
  }

})
