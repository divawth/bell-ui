import { Validator } from './util/validate.js'
import FormTpl from './template/Form.html'

export default {
  template: FormTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    value: {
      type: 'object'
    },
    rules: {
      type: 'object'
    },
    messages: {
      type: 'object'
    },
    inline: {
      type: 'boolean'
    },
    labelPosition: {
      type: ['left', 'right', 'top'],
      value: 'left'
    },
    labelWidth: {
      type: 'number'
    },
    showMessage: {
      type: 'boolean'
    }
  },
  methods: {
    validate(callback) {
      let me = this;
      const validator = new Validator(
        function (rule, value, errorType, messgae) {
          return errorType
        }
      );
      let errors = validator.validate(
        me.get('value'),
        me.get('rules'),
        me.get('messages')
      );
      let isValid = !errors;
      if (isValid) {
        callback(true)
      }
      else {
        callback(false, errors);
      }
    }
  },
  afterMount() {
    let me = this;
    me.fire(
      'setRules',
      {
        rules: me.get('rules'),
        value: me.get('value')
      },
      true
    );
  }
};