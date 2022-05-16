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
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

import {
  onClickEventByEnterPress,
} from '../event'

export default Yox.define({

  template,

  model: 'checked',

  name: '${prefix}Checkbox',

  propTypes: {
    value: {
      type: [RAW_STRING, RAW_NUMBER, RAW_BOOLEAN],
      required: TRUE,
    },
    indeterminate: {
      type: RAW_BOOLEAN,
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

  data() {
    return {
      isFocus: FALSE,
    }
  },

  events: {
    change: {
      listener(_, data) {
        if (data.value !== UNDEFINED) {
          const value = this.get('value')
          const checked = Yox.array.has(data.value, value)
          this.setChecked(checked)
        }
        if (data.disabled !== UNDEFINED) {
          this.set('disabled', data.disabled)
        }
      },
      ns: 'checkboxGroup',
    }
  },

  methods: {
    onClick() {
      this.setChecked(!this.get('checked'))
    },
    setChecked(checked: boolean) {
      if (this.get('checked') === checked) {
        return
      }
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
        }
      )
    },
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const checkboxGroup = findComponentUpward(options.parent, '${prefix}CheckboxGroup')
    if (checkboxGroup) {
      if (props.disabled === UNDEFINED) {
        props.disabled = checkboxGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = Yox.array.has(checkboxGroup.get('value'), props.value)
      }
    }

  },

  afterMount() {
    onClickEventByEnterPress(this)
  }

})
