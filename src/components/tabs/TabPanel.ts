import Yox from 'yox'

import template from './template/TabPanel.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  NULL,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    icon: {
      type: RAW_STRING,
    },
    label: {
      type: RAW_STRING,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      id: 0,
      isActive: FALSE,
    }
  },

  watchers: {
    name() {
      this.fire('update.tabPanel')
    },
    icon() {
      this.fire('update.tabPanel')
    },
    label() {
      this.fire('update.tabPanel')
    },
    disabled() {
      this.fire('update.tabPanel')
    },
  },

  events: {
    'selected.tabs': function (_, data) {
      this.set({
        isActive: this.get('id') == data.value
      })
    }
  },

  afterMount() {

    const me = this
    const tabs = findComponentUpward(me.$parent, '${prefix}tabs')

    let name = me.get('name')
    if (name == NULL) {
      name = Yox.array.indexOf(tabs.$children, me)
    }

    me.set({
      id: name,
      isActive: tabs.get('value') == name
    })

    me.fire('add.tabPanel')

  },

  beforeDestroy() {
    this.fire('remove.tabPanel')
  }
})
