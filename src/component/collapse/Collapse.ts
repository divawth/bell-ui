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
      value: FALSE,
    },
    simple: {
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
    open: {
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
