import template from './template/Checkbox.html'
import { findComponentUpward } from '../util'

export default {

  model: 'checked',

  propTypes: {
    label: {
      type: 'string'
    },
    indeterminate: {
      type: 'boolean'
    },
    value: {
      type: ['string', 'numeric', 'boolean'],
      require: true
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
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
        checked: Yox.array.has(checkboxGroup.get('selected'), this.get('value'))
      })
    }
  }
}