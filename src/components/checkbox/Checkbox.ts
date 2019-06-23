import Yox from 'yox'

import template from './template/Checkbox.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

import {
  isDef,
  findComponentUpward,
} from '../util'

export default Yox.create({

  model: 'checked',

  propTypes: {
    label: {
      type: RAW_STRING
    },
    value: {
      type: [RAW_STRING, RAW_BOOLEAN],
      required: TRUE
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
    'change.checkboxGroup': function (event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set({
          checked: Yox.array.has(
            data.selected,
            this.get('value')
          )
        })
      }
    }
  },

  watchers: {
    checked(checked) {
      this.fire(
        'change.checkbox',
        {
          checked: checked,
          value: this.get('value')
        }
      )
    }
  },

  beforeCreate(options) {
    const checkboxGroup = findComponentUpward(options.parent, '${prefix}checkboxGroup')
    if (checkboxGroup) {
      const props = options.props || (options.props = {})
      Yox.object.extend(
        props,
        {
          type: isDef(props.type) ? props.type : checkboxGroup.get('type'),
          disabled: isDef(props.disabled) ? props.disabled : checkboxGroup.get('disabled'),
          checked: Yox.array.has(checkboxGroup.get('selected'), props.value),
          name: isDef(props.name) ? props.name : checkboxGroup.get('name'),
          size: isDef(props.size) ? props.size : checkboxGroup.get('size')
        }
      )
    }
  }

})
