import Yox, { CustomEventInterface } from 'yox'

import template from './template/Radio.hbs'
// import './style/Radio.styl'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMBER,
  RAW_BOOLEAN,
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
          const checked = data.value == value
          this.setChecked(checked)
        }
        if (data.disabled !== UNDEFINED) {
          this.set('disabled', data.disabled)
        }
      },
      ns: 'radioGroup',
    }
  },

  methods: {
    onClick(event?: CustomEventInterface) {
      if (event) {
        event.stop()
      }
      this.setChecked(TRUE)
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
          ns: 'radio',
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

    const radioGroup = findComponentUpward(options.parent, '${prefix}RadioGroup')
    if (radioGroup) {
      if (props.disabled === UNDEFINED) {
        props.disabled = radioGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = radioGroup.get('value') == props.value
      }
    }

  },

  afterMount() {
    onClickEventByEnterPress(this)
  }

})
