
import FormItemTpl from './template/FormItem.html'

export default {
  template: FormItemTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    prop: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    labelWidth: {
      type: 'number',
      value: 80
    },
    required: {
      type: 'boolean'
    },
    rules: {
      type: 'number'
    },
    errorMsg: {
      type: 'string'
    }
  },

  data() {
    return {
      rules: [],
      defaultValue: ''
    }
  },
  events: {
    setRules(event, data) {
      let me = this;
      let prop = me.get('prop');
      let defaultValue = data.value && data.value[prop];
      let rules = data.rules && data.rules[prop];
      me.set({
        rules,
        defaultValue
      });
    }
  }
};