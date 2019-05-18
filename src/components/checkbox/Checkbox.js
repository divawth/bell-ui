import template from './template/Checkbox.html'
import { findComponentUpward } from '../util'
import { RAW_STRING, RAW_BOOLEAN } from '../constant'

export default {

  model: 'checked',

  propTypes: {
    label: {
      type: RAW_STRING
    },
    value: {
      type: [RAW_STRING, RAW_BOOLEAN],
      require: true
    },
    indeterminate: {
      type: RAW_BOOLEAN
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    checked: {
      type: RAW_BOOLEAN
    },
    type: {
      type: RAW_STRING
    },
    size: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  events: {
    groupChange(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set({
          checked: Yox.array.has(data.selected, this.get('value'))
        })
      }
    }
  },

  watchers: {
    checked(checked) {
      this.fire(
        'change',
        {
          checked: checked,
          value: this.get('value')
        }
      )
    }
  },

  afterMount() {
    let checkboxGroup = findComponentUpward(this, '${prefix}checkboxGroup')
    if (checkboxGroup) {
      this.set({
        type: this.get('type') || checkboxGroup.get('type'),
        disabled: this.get('disabled') || checkboxGroup.get('disabled'),
        checked: Yox.array.has(checkboxGroup.get('selected'), this.get('value')),
        name: this.get('name') || checkboxGroup.get('name'),
        size: this.get('size') || checkboxGroup.get('size')
      })
    }
  }
}