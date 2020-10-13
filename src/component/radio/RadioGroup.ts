import Yox from 'yox'

import template from './template/RadioGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_NUMBER,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_SIZE_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}RadioGroup',

  propTypes: {
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    name: {
      type: RAW_STRING,
      required: TRUE,
    },
    value: {
      type: [RAW_NUMBER, RAW_BOOLEAN, RAW_STRING],
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    vertical: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    button: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    },
  },

  watchers: {
    disabled(disabled) {
      this.fire(
        {
          type: 'change',
          ns: 'radioGroup',
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
          ns: 'radioGroup',
        },
        {
          value,
        },
        TRUE
      )
    }
  },
  events: {
    change: {
      listener(event, data) {
        event.stop()
        // 只关心选中的
        if (!data.checked) {
          return
        }
        this.set('value', data.value)
      },
      ns: 'radio',
    }
  }
})
