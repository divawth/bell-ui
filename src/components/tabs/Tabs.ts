import Yox from 'yox'

import template from './template/Tabs.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,

  RAW_SMALL,
  RAW_LARGE,

  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_DEFAULT,
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

  template,

  name: '${prefix}tabs',

  propTypes: {
    type: {
      type: oneOf(['card']),
    },
    size: {
      type: oneOf([RAW_DEFAULT, RAW_SMALL, RAW_LARGE]),
      value: RAW_DEFAULT,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    value: {
      type: RAW_NUMERIC,
      value: 0,
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
      tabs: [],
    }
  },

  events: {
    'add.tabPanel': function (event) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        const { target } = event
        this.append(
          'tabs',
          {
            id: target.get('id'),
            icon: target.get('icon'),
            label: target.get('label'),
            disabled: target.get('disabled'),
          }
        )
        this.updateIndicator()
      }
    },
    'remove.tabPanel': function (event) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        const me = this
        const { target } = event
        const tabId = target.get('id')
        const tabs: Tab[] = me.get('tabs')
        const newTabs = tabs.filter(function (item) {
          return item.id !== tabId
        })
        me.set({
          tabs: newTabs
        })
        if (me.get('value') === tabId) {
          me.set('value', newTabs[0] ? newTabs[0].id : UNDEFINED)
        }
        me.updateIndicator()
      }
    },
    'update.tabPanel': function (event) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {

        const me = this
        const { target } = event
        const tabId = target.get('id')
        const tabs: Tab[] = me.get('tabs')

        Yox.array.each(
          tabs,
          function (item, index) {
            if (item.id === tabId) {
              me.set(
                `tabs.${index}`,
                {
                  id: tabId,
                  icon: target.get('icon'),
                  label: target.get('label'),
                  disabled: target.get('disabled'),
                }
              )
              me.updateIndicator()
              return FALSE
            }
          }
        )

      }
    }
  },

  watchers: {
    value(value) {
      this.updateIndicator()
      this.fire(
        'selected.tabs',
        { value },
        TRUE
      )
    },
  },

  methods: {
    handleCloseTab(tab: Tab) {
      this.fire('tabRemove.tabs', tab)
    },
    handleClickTab(tab: Tab) {
      this.set({
        value: tab.id,
      })
    },
    updateIndicator() {
      const me = this
      me.nextTick(
        function () {
          const { $el, $refs } = me
          if (!$el || !$refs) {
            return
          }
          const { indicator } = $refs
          if (!indicator) {
            return
          }
          const index = me.getActiveIndex()
          const result = $el.getElementsByClassName('${prefix}tabs-tab')
          if (result[index]) {
            const tabElement = result[index] as HTMLElement
            const indicatorElement = indicator as HTMLElement
            indicatorElement.style.left = tabElement.offsetLeft + 'px'
            indicatorElement.style.width = tabElement.offsetWidth + 'px'
          }
        }
      )
    },
    getActiveIndex() {
      const value = this.get('value')
      const tabs: Tab[] = this.get('tabs')

      let index = 0

      Yox.array.each(
        tabs,
        function (item, key) {
          if (item.id === value) {
            index = key
            return FALSE
          }
        }
      )
      return index

    }
  },

  afterMount() {
    this.updateIndicator()
  }
})
