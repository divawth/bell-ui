import Yox from 'yox'

import template from './template/CheckboxGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
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

  model: 'selected',

  name: '${prefix}checkboxGroup',

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
    selected: {
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
    'change.checkboxGroup': function (event) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        event.stop()
      }
    },
    'change.checkbox': function (event, data) {
      event.stop()

      const selected = this.copy(this.get('selected'))
      const { length } = selected
      if (data.checked) {
        if (!Yox.array.has(selected, data.value)) {
          selected.push(data.value)
        }
      }
      else {
        Yox.array.remove(selected, data.value)
      }

      if (selected.length !== length) {
        this.set({ selected })
      }
    }
  },
  watchers: {
    selected(selected) {
      this.fire(
        'change.checkboxGroup',
        { selected },
        TRUE
      )
    }
  }
})