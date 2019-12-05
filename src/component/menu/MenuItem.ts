import Yox from 'yox'

import template from './template/MenuItem.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}MenuItem',

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
    const menu = findComponentUpward(options.parent, '${prefix}Menu')
    return {
      isActive: menu.get('activeName') === this.get('name'),
    }
  },

  events: {
    'activeName.menu': function (_, data) {
      this.set('isActive', data.activeName === this.get('name'))
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
