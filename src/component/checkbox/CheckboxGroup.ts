import Yox from 'yox'

import template from './template/CheckboxGroup.hbs'

import {
  TRUE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}CheckboxGroup',

  propTypes: {
    value: {
      type: RAW_ARRAY,
      value() {
        return []
      }
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    vertical: {
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
    disabled(disabled) {
      this.fire(
        {
          type: 'change',
          ns: 'checkboxGroup',
        },
        {
          disabled,
        },
        TRUE
      )
    },
    value(value) {
      this.fire(
        {
          type: 'change',
          ns: 'checkboxGroup',
        },
        {
          value
        },
        TRUE
      )
    }
  },
  events: {
    change: {
      listener(event, data) {
        event.stop()

        const value = this.copy(this.get('value'))
        const { length } = value

        if (data.checked) {
          if (!Yox.array.has(value, data.value)) {
            value.push(data.value)
          }
        }
        else {
          Yox.array.remove(value, data.value)
        }

        if (value.length !== length) {
          this.set({ value })
          this.fire(
            {
              type: 'change',
              ns: 'checkboxGroup',
            },
            {
              value
            },
          )
        }
      },
      ns: 'checkbox',
    }
  },
})