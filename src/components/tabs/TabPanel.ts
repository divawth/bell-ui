import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/TabPanel.hbs'

import {
  findComponentUpward,
} from '../util'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  propTypes: {
    name: {
      type: RAW_STRING
    },
    icon: {
      type: RAW_STRING
    },
    label: {
      type: RAW_STRING
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE
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
      id: 0,
      isActive: FALSE
    }
  },

  watchers: {
    '*': function (newValue, oldValue, keypath: string) {
      let pathArray = ['name', 'icon', 'label', 'disabled']
      if (pathArray.indexOf(keypath) >= 0) {
        this.upsert('tabPanelUpdate')
      }
    }
  },

  events: {
    tabSelected(_: CustomEventInterface, data: Data) {
      this.set({
        isActive: this.get('id') == data.value
      })
    }
  },

  methods: {
    upsert(name: string) {
      let me = this
      me.fire(
        name,
        {
          label: me.get('label'),
          icon: me.get('icon'),
          disabled: me.get('disabled'),
          id: me.get('id')
        }
      )
    }
  },

  afterMount() {
    let me = this
    let name = me.get('name')
    if (name == null) {
      let element = findComponentUpward(me.$parent, '${prefix}tabs')
      name = Yox.array.indexOf(element.$children, me)
    }
    me.set('id', name)
    me.upsert('tabPanelAdd')
  },

  beforeDestroy() {
    this.upsert('tabPanelRemove')
  }
})