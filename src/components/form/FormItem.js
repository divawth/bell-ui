
import template from './template/FormItem.html'
import { RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN } from '../constant'

export default {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    },
    prop: {
      type: RAW_STRING
    },
    label: {
      type: RAW_STRING
    },
    labelWidth: {
      type: RAW_NUMERIC,
      value: 80
    },
    required: {
      type: RAW_BOOLEAN
    },
    rules: {
      type: RAW_NUMERIC
    },
    errorMsg: {
      type: RAW_STRING
    }
  },
  template,

  data() {
    return {
      rules: [],
      defaultValue: ''
    }
  },
  events: {
    setRules(_, data) {
      let me = this
      let prop = me.get('prop')
      let defaultValue = data.value && data.value[ prop ]
      let rules = data.rules && data.rules[ prop ]
      me.set({
        rules,
        defaultValue
      })
    }
  }
}