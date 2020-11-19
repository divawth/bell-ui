import Yox from 'yox'

import template from './template/Checkbox.hbs'
// import './style/Checkbox.styl'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  model: 'checked',

  name: '${prefix}Checkbox',

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    value: {
      type: [RAW_STRING, RAW_NUMBER, RAW_BOOLEAN],
      required: TRUE,
    },
    indeterminate: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    checked: {
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

  data() {
    return {
      isFocus: FALSE,
    }
  },

  events: {
    change: {
      listener(_, data) {
        const value = this.get('value')
        const oldChecked = this.get('checked')
        const newChecked = Yox.array.has(data.value, value)
        if (oldChecked !== newChecked) {
          this.set({
            checked: newChecked
          })
          this.fire(
            {
              type: 'change',
              ns: 'checkbox',
            },
            {
              checked: newChecked,
              value,
            }
          )
        }
      },
      ns: 'checkboxGroup',
    }
  },

  methods: {
    onChange(event) {
      const { target } = event.originalEvent
      const { checked } = target
      this.set({
        checked,
      })
      this.fire(
        {
          type: 'change',
          ns: 'checkbox',
        },
        {
          checked,
          value: this.get('value'),
          target,
        }
      )
    }
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const checkboxGroup = findComponentUpward(options.parent, '${prefix}CheckboxGroup')
    if (checkboxGroup) {
      if (props.name === UNDEFINED) {
        props.name = checkboxGroup.get('name')
      }

      if (props.disabled === UNDEFINED) {
        props.disabled = checkboxGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = Yox.array.has(checkboxGroup.get('value'), props.value)
      }
    }

  }

})
