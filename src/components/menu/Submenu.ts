import Yox, { YoxInterface } from 'yox'

import template from './template/Submenu.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_INLINE,
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
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {

    const menu = findComponentUpward(options.parent, '${prefix}menu')
    const name = this.get('name')

    let isOpen = FALSE
    let isActive = FALSE
    if (Yox.array.has(menu.get('openNames'), name)) {
      isOpen = TRUE
    }
    if (menu.get('activeName') === name) {
      isActive = TRUE
    }

    return {
      isOpen,
      isActive,
      mode: menu.get('mode'),
      collapsed: menu.get('collapsed'),
    }
  },

  events: {
    'collapse.menu': function (_, data) {
      this.set('collapsed', data.collapsed)
    },
    'clickItem.menu': function (_, data) {
      this.set('isActive', data.name === this.get('name'))
    },
    'click.menuItem': function () {
      if (this.get('mode') !== RAW_INLINE) {
        this.set('isOpen', FALSE)
      }
    }
  },

})