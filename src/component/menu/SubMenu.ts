import Yox, { CustomEventInterface } from 'yox'

import Icon from '../icon/Icon'
import Dropdown from '../dropdown/Dropdown'
import template from './template/SubMenu.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_INLINE,
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
      type: RAW_STRING,
    }
  },

  data(options) {

    const menu = findComponentUpward(options.parent, '${prefix}Menu')
    const name = this.get('name')
    const openNames = menu.get('openNames')

    return {
      isOpen: openNames && Yox.array.has(openNames, name),
      isActive: menu.get('activeName') === name,
      mode: menu.get('mode'),
      collapsed: menu.get('collapsed'),
    }
  },

  watchers: {
    isOpen(isOpen) {
      const name = this.get('name')
      if (name) {
        this.fire(
          'isOpen.subMenu',
          {
            isOpen,
            name,
          }
        )
      }
    }
  },

  events: {
    'activeName.menu': function (_, data) {
      this.set('isActive', data.activeName === this.get('name'))
    },
    'openNames.menu': function (_, data) {
      this.set('isOpen', data.openNames && Yox.array.has(data.openNames, this.get('name')))
    },
    'collapsed.menu': function (_, data) {
      this.set('collapsed', data.collapsed)
    },
    'click.menuItem': function () {
      if (this.get('mode') !== RAW_INLINE) {
        this.set('isOpen', FALSE)
      }
    }
  },

  methods: {
    handleOutsideClick(event: CustomEventInterface) {
      event.stop()
      this.set('isOpen', FALSE)
    }
  },

  components: {
    Icon,
    Dropdown,
  }

})