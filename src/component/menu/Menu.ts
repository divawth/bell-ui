import Yox from 'yox'

import template from './template/Menu.hbs'
// import './style/Menu.styl'

import {
  TRUE,

  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,

  RAW_HORIZONTAL,
  RAW_VERTICAL,
  RAW_INLINE,
  RAW_LIGHT,
  RAW_THEME_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Menu',

  propTypes: {
    mode: {
      type: oneOf([RAW_HORIZONTAL, RAW_VERTICAL, RAW_INLINE]),
      value: RAW_HORIZONTAL,
    },
    theme: {
      type: oneOf(RAW_THEME_ARRAY),
      value: RAW_LIGHT,
    },
    collapsed: {
      type: RAW_BOOLEAN,
    },
    activeName: {
      type: RAW_STRING,
    },
    openNames: {
      type: RAW_ARRAY,
      value() {
        return []
      }
    },
    inner: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    activeName(activeName: boolean) {
      this.fire(
        {
          type: 'activeName',
          ns: 'menu',
        },
        { activeName },
        TRUE
      )
    },
    openNames(openNames: boolean) {
      this.fire(
        {
          type: 'openNames',
          ns: 'menu',
        },
        { openNames },
        TRUE
      )
    },
    collapsed(collapsed: boolean) {
      this.fire(
        {
          type: 'change',
          ns: 'menu',
        },
        { collapsed },
        TRUE
      )
    },
    theme(theme) {
      this.fire(
        {
          type: 'change',
          ns: 'menu',
        },
        { theme },
        TRUE
      )
    },
    mode(mode) {
      this.fire(
        {
          type: 'change',
          ns: 'menu',
        },
        { mode },
        TRUE
      )
    },
  },

  events: {
    click: {
      listener(event, data) {
        if (event.phase === Yox.Event.PHASE_UPWARD
          && !this.get('inner')
        ) {
          this.fire(
            {
              type: 'change',
              ns: 'menu',
            },
            {
              activeName: data.name
            }
          )
        }
      },
      ns: 'menuItem',
    },
    isOpen: {
      listener(event, data) {
        if (event.phase === Yox.Event.PHASE_UPWARD
          && !this.get('inner')
        ) {

          const { isOpen, name } = data

          let openNames = this.get('openNames')
          if (openNames) {
            openNames = this.copy(openNames)
          }
          else {
            openNames = []
          }

          if (isOpen) {
            openNames.push(name)
          }
          else {
            Yox.array.remove(openNames, name)
          }

          this.fire(
            {
              type: 'change',
              ns: 'menu',
            },
            {
              openNames,
            }
          )

        }
      },
      ns: 'subMenu',
    }
  }
})