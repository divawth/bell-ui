import Yox from 'yox'

import template from './template/RadioGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_SIZE_COMMON,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}radioGroup',

  propTypes: {
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    name: {
      type: RAW_STRING,
    },
    value: {
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
        'change.radioGroup',
        {
          disabled,
        },
        TRUE
      )
    },
    value(value) {
      this.fire(
        'change.radioGroup',
        {
          value,
        },
        TRUE
      )
    }
  },
  events: {
    'change.radio': function (event, data) {
      event.stop()
      // 只关心选中的
      if (!data.checked) {
        return
      }
      const options = {
        value: data.value
      }
      this.set(options)
      this.fire(
        'change.radioGroup',
        options
      )
    }
  }
})
