import Yox, { CustomEventInterface } from 'yox'

import Icon from '../icon/Icon'
import Popover from '../popover/Popover'
import template from './template/SubMenu.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_INLINE,
  RAW_CUSTOM,
  RAW_HORIZONTAL,
  RAW_BOTTOM,
  RAW_RIGHT_START,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}SubMenu',

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {

    const menu = findComponentUpward(options.parent, '${prefix}Menu')
    const name = this.get('name')
    const openNames = menu.get('openNames')
    return {
      RAW_CUSTOM,
      RAW_HORIZONTAL,
      RAW_BOTTOM,
      RAW_RIGHT_START,
      isOpen: openNames && Yox.array.has(openNames, name),
      isActive: menu.get('activeName') === name,
      mode: menu.get('mode'),
      theme: menu.get('theme'),
      collapsed: menu.get('collapsed'),
    }
  },

  watchers: {
    isOpen(isOpen) {
      const name = this.get('name')
      if (name) {
        this.fire(
          {
            type: 'isOpen',
            ns: 'subMenu',
          },
          {
            isOpen,
            name,
          }
        )
      }
    }
  },

  events: {
    activeName: {
      listener(_, data) {
        this.set('isActive', data.activeName === this.get('name'))
      },
      ns: 'menu',
    },
    openNames: {
      listener(_, data) {
        this.set('isOpen', data.openNames && Yox.array.has(data.openNames, this.get('name')))
      },
      ns: 'menu',
    },
    change: {
      listener(_, data) {
        this.set(data)
      },
      ns: 'menu',
    },
    click: {
      listener() {
        if (this.get('mode') !== RAW_INLINE) {
          this.set('isOpen', FALSE)
        }
      },
      ns: 'menuItem',
    },
    outside: {
      listener(event) {

        event.stop()

        this.set('isOpen', FALSE)

      },
      ns: 'popover',
    }
  },

  components: {
    Icon,
    Popover,
  }

})