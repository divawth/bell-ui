import { Validator } from './util/validate.js'
import template from './template/Form.html'
import { RAW_STRING, RAW_OBJECT, RAW_BOOLEAN, RAW_NUMERIC } from '../constant.js'

export default {
  propTypes: {
    value: {
      type: RAW_OBJECT
    },
    rules: {
      type: RAW_OBJECT
    },
    messages: {
      type: RAW_OBJECT
    },
    inline: {
      type: RAW_BOOLEAN
    },
    labelPosition: {
      type: ['left', 'right', 'top'],
      value: 'left'
    },
    labelWidth: {
      type: RAW_NUMERIC
    },
    showMessage: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,
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