import template from './template/Tabs.html'
import {
  TRUE,
  FALSE,
  
  RAW_TINY,
  RAW_SMALL,
  RAW_LARGE,

  RAW_STRING,
  RAW_NUMERIC
} from '../constant'
import { oneOf } from '../util'

export default {

  name: '${prefix}tabs',

  propTypes: {
    type: {
      type: oneOf(['line', 'card']),
      value: 'line'
    },
    size: {
      type: oneOf([ RAW_TINY, RAW_SMALL, RAW_LARGE, 'default' ])
    },
    closable: {
      type: 'boolean',
      value: FALSE
    },
    animated: {
      type: 'boolean',
      value: TRUE
    },
    value: {
      type: RAW_NUMERIC,
      value: 0
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
      tabsList: []
    }
  },

  computed: {
    translateStyle() {
      let me = this
      let index = 0
      Yox.array.each(
        me.get('tabsList'),
        (item, key) => {
          if (item.id == me.get('value')) {
            index = key
            return FALSE
          }
        }
      )
      return index * (-100) + '%'
    }
  },

  events: {
    tabPanelRemove(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        let tabsList = this.copy(this.get('tabsList'))
        tabsList = tabsList.filter(function (item) {
          return item.id !== data.id
        })
        this.set({ tabsList })
      }
    },
    tabsValueUpdate(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        let me = this
        let tabsList = me.copy(me.get('tabsList'))
        tabsList.forEach(function (item) {
          if (item.id === data.id) {
            item = data
          }
        })
        me.set({ tabsList })
      }
    },
    tabPanelAdd(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.append('tabsList', data)
      }
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'tabSelected',
        { value },
        TRUE
      )
    }
  },

  methods: {
    close (data) {
      this.fire('tabRemove', data)
    },
    click(data) {
      if (data.disabled) return
      this.set({
        value: data.id
      })
    }
  }
}