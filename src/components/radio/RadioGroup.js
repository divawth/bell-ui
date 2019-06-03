import template from './template/RadioGroup.html'
import { RAW_STRING, RAW_BOOLEAN, TRUE } from '../constant'

export default {
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
}