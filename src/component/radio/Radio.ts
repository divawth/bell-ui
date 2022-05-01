import Yox from 'yox'

import template from './template/Radio.hbs'
// import './style/Radio.styl'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  model: 'checked',

  name: '${prefix}Radio',

  propTypes: {
    value: {
      type: [RAW_NUMBER, RAW_BOOLEAN, RAW_STRING],
      required: TRUE,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    checked: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  events: {
    change: {
      listener(_, data) {
        if (data.value !== UNDEFINED) {
          const value = this.get('value')
          const oldChecked = this.get('checked')
          const newChecked = data.value == value
          if (oldChecked !== newChecked) {
            this.set({
              checked: newChecked
            })
            this.fireChange(newChecked, value)
          }
        }
        if (data.disabled !== UNDEFINED) {
          this.set('disabled', data.disabled)
        }
      },
      ns: 'radioGroup',
    }
  },

  methods: {
    onClick() {
      const checked = TRUE
      this.set({
        checked,
      })
      this.fireChange(
        checked,
        this.get('value')
      )
    },
    fireChange(checked: boolean, value: string | number | boolean) {
      this.fire(
        {
          type: 'change',
          ns: 'radio',
        },
        {
          checked,
          value,
        }
      )
    }
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const radioGroup = findComponentUpward(options.parent, '${prefix}RadioGroup')
    if (radioGroup) {
      if (props.disabled === UNDEFINED) {
        props.disabled = radioGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = radioGroup.get('value') == props.value
      }
    }

  }

})
