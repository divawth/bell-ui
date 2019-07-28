import Yox from 'yox'

import template from './template/Switch.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  propTypes: {
    type: {
      type: RAW_STRING,
    },
    size: {
      type: RAW_STRING,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    checked: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    loading: {
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

  model: 'checked',

  methods: {
    click() {
      this.fire(
        'change.switch',
        {
          checked: this.toggle('checked')
        }
      )
    }
  }
})