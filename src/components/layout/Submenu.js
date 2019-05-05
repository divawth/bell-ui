import template from './template/Submenu.html'
import { findComponentUpward, contains } from '../util'

export default {
  propTypes: {
    name: {
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
      isOpen: false,
      isActive: false,
      activeName: null,
      mode: null,
      theme: null,
      isCollapsed: false
    }
  },

  events: {
    themeChanged(event, data) {
      this.set('theme', data.theme)
    },
    isCollapsedChanged(event, data) {
      this.set('isCollapsed', data.isCollapsed)
    },
    menuItemSelected(event, data) {
      if (event.phase < 0) {
        this.set('isActive', data.name === this.get('activeName'))
      }
      if (event.phase > 0) {
        this.set('activeName', data.name)
        if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
          this.toggle('isOpen')
        }
      }
    }
  },

  methods: {
    clickMenuItem() {
      this.toggle('isOpen')
    },
    mouseenter() {
      if (!this.get('isCollapsed')) {
        return
      }
      this.set('isOpen', true)
    },
    mouseleave() {
      if (!this.get('isCollapsed')) {
        return
      }
      this.set('isOpen', false)
    }
  },
   
  afterMount () {
    let element = findComponentUpward(this, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
      'isActive': element.get('activeName') === this.get('name'),
      'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0 
    })
  }
}