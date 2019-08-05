import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/MenuItem.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  NULL,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

export default Yox.define({
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
    menuItemSelected(event: CustomEventInterface, data: Data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('name'))
      }
    },
    isCollapsedChanged(_: CustomEventInterface, data: Data) {
      this.set('isCollapsed', data.isCollapsed)
    },
    'click.menuItem': function () {
      let name = this.get('name')
      this.fire('menuItemSelected', { name })
    }
  },

  afterMount () {
    let element = findComponentUpward(this.$parent, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'isActive': element.get('activeName') === this.get('name')
    })
  }
})
