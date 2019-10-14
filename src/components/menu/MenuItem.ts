import Yox from 'yox'

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

  name: '${prefix}menuItem',

  propTypes: {
    name: {
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
      collapsed: FALSE,
    }
  },

  events: {
    'clickItem.menu': function (_, data) {
      this.set('isActive', data.name === this.get('name'))
    },
    'collapse.menu': function (_, data) {
      this.set('collapsed', data.collapsed)
    },
  },

  methods: {
    click() {
      this.fire(
        'click.menuItem',
        {
          name: this.get('name')
        }
      )
    }
  }

})
