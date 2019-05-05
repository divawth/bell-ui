import template from './template/MenuGroup.html'
import { findComponentUpward } from '../util'

export default {
  propTypes: {
    title: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template, 

  data() {
    return {
      mode: null,
      theme: null
    }
  },

  events: {
    themeChanged(event, data) {
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
}