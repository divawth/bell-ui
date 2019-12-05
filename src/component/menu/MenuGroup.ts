import Yox from 'yox'

import template from './template/MenuGroup.hbs'

import {
  RAW_STRING,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}MenuGroup',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {
    const menu = findComponentUpward(options.parent, '${prefix}Menu')
    return {
      mode: menu.get('mode'),
    }
  },

})