import Yox from 'yox'

import template from './template/Collapse.hbs'
// import './style/Collapse.styl'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Collapse',

  propTypes: {
    value: {
      type: [RAW_STRING, RAW_NUMBER, RAW_ARRAY],
    },
    accordion: {
      type: RAW_BOOLEAN,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  watchers: {
    value(value) {
      this.fire(
        {
          type: 'change',
          ns: 'collapse',
        },
        {
          value,
        },
        TRUE
      )
    }
  },

  events: {
    toggle: {
      listener(event, data) {
        if (event.phase === Yox.Event.PHASE_UPWARD) {
          event.stop()

          let { name, opened } = data

          let value = this.get('value')

          if (this.get('accordion')) {
            value = opened ? name : UNDEFINED
          }
          else {
            value = Yox.is.array(value) ? this.copy(value) : []
            if (opened) {
              if (!Yox.array.has(value, name, FALSE)) {
                value.push(name)
              }
            }
            else {
              Yox.array.remove(value, name, FALSE)
            }
          }

          this.set('value', value)

        }
      },
      ns: 'collapseItem'
    }
  }

})
