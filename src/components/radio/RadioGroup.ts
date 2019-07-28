import Yox from 'yox'

import template from './template/RadioGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({
  name: '${prefix}radioGroup',
  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    },
    name: {
      type: RAW_STRING,
    },
    value: {
      type: RAW_STRING,
    },
    size: {
      type: RAW_STRING,
    },
    type: {
      type: RAW_STRING,
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
    }
  },

  template,

  events: {
    'change.radio': function (event, data) {
      event.stop()

      const options = {
        value: data.value
      }
      this.set(options)
      this.fire(
        'change.radioGroup',
        options,
        TRUE
      )
      this.fire(
        'change.radioGroup',
        options
      )
    }
  }
})
