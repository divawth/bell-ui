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
    '*': function (newValue, oldValue, keypath: string) {
      if (Yox.array.has(['name', 'icon', 'label', 'disabled'], keypath)) {
        this.fire('update.tabPanel')
      }
    }
  },

  events: {
    'selected.tabs': function (_, data) {
      this.set({
        isActive: this.get('id') == data.value
      })
    }
  },

  afterMount() {
    let me = this
    let name = me.get('name')
    if (name == NULL) {
      let tabs = findComponentUpward(me.$parent, '${prefix}tabs')
      name = Yox.array.indexOf(tabs.$children, me)
    }
    me.set('id', name)
    me.fire('add.tabPanel')
  },

  beforeDestroy() {
    this.fire('remove.tabPanel')
  }
})
