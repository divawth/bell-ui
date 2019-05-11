import template from './template/MenuItem.html'
import { findComponentUpward } from '../util'
import {
  NULL,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

export default {
  propTypes: {
    name: {
      type: RAW_STRING
    },
    hash: {
      type: RAW_STRING
    },
    disabled: {
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
      mode: NULL,
      isActive: FALSE,
      isCollapsed: FALSE
    }
  },

  events: {
    menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('name'))
      }
    },
    isCollapsedChanged(_, data) {
      this.set('isCollapsed', data.isCollapsed)
    }
  },

  methods: {
    click() {
      this.fire('menuItemSelected', {
        name: this.get('name')
      })
    }
  },

  afterMount () {
    let element = findComponentUpward(this, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'isActive': element.get('activeName') === this.get('name')
    })
  }
}