import Yox from 'yox'

import template from './template/CheckboxGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}checkboxGroup',

  propTypes: {
    name: {
      type: RAW_STRING,
      required: TRUE,
    },
    value: {
      type: RAW_ARRAY,
      value() {
        return []
      }
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    vertical: {
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

  events: {
    'change.checkbox': function (event, data) {
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
      }
    }
  },
  watchers: {
    value(value) {
      this.fire(
        'change.checkboxGroup',
        { value },
        TRUE
      )
    }
  }
})