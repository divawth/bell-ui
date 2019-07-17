import Yox, { CustomEvent, Data } from 'yox'

import template from './template/MenuGroup.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  NULL,
  RAW_STRING
} from '../constant'

export default Yox.define({
  propTypes: {
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

  template,

  data() {
    return {
      mode: NULL,
      theme: NULL
    }
  },

  events: {
    themeChanged(_: CustomEvent, data: Data) {
      this.set('theme', data.theme)
    }
  },

  afterMount () {
    let element = findComponentUpward(this.$parent, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
    })
  }
})