import Yox from 'yox'

import template from './template/Tabs.hbs'

import {
  TRUE,
  FALSE,

  RAW_TINY,
  RAW_SMALL,
  RAW_LARGE,

  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
} from '../constant'

import {
  oneOf,
} from '../util'

interface Tab {
  id: string,
  icon: string,
  label: string,
  disabled: boolean,
}

export default Yox.define({

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
      type: RAW_BOOLEAN,
      value: FALSE
    },
    animated: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    value: {
      type: RAW_NUMERIC,
      value: 0
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
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
      const me = this
      const value = me.get('value')
      const tabs: Tab[] = me.get('tabsList')

      let index = 0

      Yox.array.each(
        tabs,
        (item, key) => {
          if (item.id == value) {
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
        let tabsList: Tab[] = this.copy(this.get('tabsList'))
        tabsList = tabsList.filter(function (item) {
          return item.id !== data.id
        })
        this.set({ tabsList })
      }
    },
    tabsValueUpdate(event, data: Tab) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        let me = this
        let tabsList: Tab[] = me.copy(me.get('tabsList'))
        tabsList.forEach(function (item) {
          if (item.id === data.id) {
            item = data
          }
        })
        me.set({ tabsList })
      }
    },
    tabPanelAdd(event, data: Tab) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.append('tabsList', data)
      }
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'tabSelected.tabs',
        { value },
        TRUE
      )
    }
  },

  methods: {
    close(data: Tab) {
      this.fire('tabRemove.tabs', data)
    },
    click(data: Tab) {
      if (data.disabled) {
        return
      }
      this.set({
        value: data.id
      })
    }
  }
})
