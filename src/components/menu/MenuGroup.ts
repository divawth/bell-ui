import Yox from 'yox'

import template from './template/MenuGroup.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  NULL,
  RAW_STRING
} from '../constant'

export default Yox.create({
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
    themeChanged(_, data) {
      this.set('theme', data.theme)
    }
  },

  afterMount () {
    let element = findComponentUpward(this, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
    })
  }
})