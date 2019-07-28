import Yox from 'yox'

import template from './template/CheckboxGroup.hbs'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_TYPE_ARRAY,
  RAW_SIZE_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  model: 'selected',

  name: '${prefix}checkboxGroup',

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    selected: {
      type: RAW_ARRAY,
      value() {
        return []
      }
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
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

  template,

  events: {
    'change.checkboxGroup': function (event) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        event.stop()
      }
    },
    'change.checkbox': function (event, data) {
      const me = this
      const selected = me.copy(me.get('selected'))
      if (data.checked) {
        if (!Yox.array.has(selected, data.value)) {
          selected.push(data.value)
        }
      }
      else {
        Yox.array.remove(selected, data.value)
      }
      me.set({ selected })
      event.stop()
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