import Yox from 'yox'

import template from './template/Radio.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({
  propTypes: {
    label: {
      type: RAW_STRING,
    },
    value: {
      type: [ RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING ]
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
  template,

  data() {
    return {
      name: '',
      isChecked: FALSE,
      isDisabled: this.get('disabled') === TRUE
    }
  },

  events: {
    'change.radioGroup': function (_, data) {
      this.set({
        isChecked: data.value == this.get('value')
      })
    }
  },

  methods: {
    click() {
      this.fire(
        'change.radio',
        {
          value: this.get('value')
        }
      )
    }
  },

  afterMount() {
    let radioGroup = findComponentUpward(this.$parent, '${prefix}radioGroup')
    if (radioGroup) {
      this.set({
        name: radioGroup.get('name'),
        isDisabled: this.get('disabled') || radioGroup.get('disabled') === TRUE,
        isChecked: this.get('checked') || radioGroup.get('value') == this.get('value')
      })
    }
  }

})
