import Yox from 'yox'

import template from './template/Tabs.hbs'
// import './style/Tabs.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  UNDEFINED,

  RAW_SMALL,
  RAW_LARGE,

  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
} from '../constant'

import {
  oneOf,
} from '../util'

interface Tab {
  name: string,
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
      type: RAW_STRING,
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
    'add.tabPanel': function (event, data) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      const { target } = event
      const tabName = target.get('name')

      this.append(
        'tabs',
        {
          name: tabName,
          icon: target.get('icon'),
          label: target.get('label'),
          disabled: target.get('disabled'),
        }
      )

      if (data.isActive) {
        this.set({
          value: tabName,
        })
      }

    },
    'remove.tabPanel': function (event) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      const { target } = event
      const tabName = target.get('name')

      const tabs: Tab[] = this.get('tabs')
      const newTabs = tabs.filter(function (item) {
        return item.name !== tabName
      })
      this.set({
        tabs: newTabs
      })

      if (this.get('value') === tabName) {
        this.set('value', newTabs[0] ? newTabs[0].name : UNDEFINED)
      }

    },
    'update.tabPanel': function (event) {

      if (event.phase !== Yox.Event.PHASE_UPWARD) {
        return
      }

      const me = this
      const { target } = event
      const tabName = target.get('name')
      const tabs: Tab[] = me.get('tabs')

      Yox.array.each(
        tabs,
        function (item, index) {
          if (item.name === tabName) {
            me.set(
              `tabs.${index}`,
              {
                name: tabName,
                icon: target.get('icon'),
                label: target.get('label'),
                disabled: target.get('disabled'),
              }
            )
            return FALSE
          }
        }
      )

    }
  },

  watchers: {
    value(value) {
      this.fire(
        'change.tabs',
        { value },
        TRUE
      )
    },
  },

  methods: {
    handleCloseTab(tab: Tab) {
      this.fire(
        'tabRemove.tabs',
        {
          name: tab.name
        }
      )
    },
    handleClickTab(tab: Tab) {
      this.set({
        value: tab.name,
      })
    }
  },

  components: {
    Icon,
  }

})
