import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/MenuItem.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    hash: {
      type: RAW_STRING,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {
    const menu = findComponentUpward(options.parent, '${prefix}menu')
    return {
      mode: menu.get('mode'),
      isActive: menu.get('activeName') === this.get('name'),
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
    },
    'click.menuItem': function () {
      let name = this.get('name')
      this.fire('menuItemSelected', { name })
    }
  }

})
