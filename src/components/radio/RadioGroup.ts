import Yox from 'yox'

import template from './template/RadioGroup.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  name: '${prefix}radiogroup',
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    },
    name: {
      type: RAW_STRING
    },
    value: {
      type: RAW_STRING
    },
    size: {
      type: RAW_STRING
    },
    type: {
      type: RAW_STRING
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    vertical: {
      type: RAW_BOOLEAN
    },
    button: {
      type: RAW_BOOLEAN
    }
  },

  template,

  events: {
    radioValueChange(_, data) {
      this.set({
        value: data.value
      })
      this.fire(
        'updateRadioValue',
        {
          value: data.value
        },
        TRUE
      )
      this.fire(
        'change.radiogroup',
        {
          value: data.value
        }
      )
    }
  }
})
