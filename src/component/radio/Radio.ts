import Yox from 'yox'

import template from './template/Radio.hbs'
// import './style/Radio.styl'

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

  name: '${prefix}Radio',

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    value: {
      type: [RAW_NUMBER, RAW_BOOLEAN, RAW_STRING],
      required: TRUE,
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
        if (data.value !== UNDEFINED) {
          this.set('checked', data.value == this.get('value'))
        }
        if (data.disabled !== UNDEFINED) {
          this.set('disabled', data.disabled)
        }
      },
      ns: 'radioGroup',
    }
  },

  watchers: {
    checked(checked) {
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
    }
  },

  beforeCreate(options) {

    const props = options.props || (options.props = {})

    const radioGroup = findComponentUpward(options.parent, '${prefix}RadioGroup')
    if (radioGroup) {
      if (props.name === UNDEFINED) {
        props.name = radioGroup.get('name')
      }

      if (props.disabled === UNDEFINED) {
        props.disabled = radioGroup.get('disabled')
      }

      if (props.checked === UNDEFINED) {
        props.checked = radioGroup.get('value') == props.value
      }
    }

  }

})
