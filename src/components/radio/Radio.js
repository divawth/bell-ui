import RadioTpl from './template/Radio.html'

export default {
  template: RadioTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    value: {
      type: ['numeric', 'boolean', 'string']
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    }
  },

  data() {
    let me = this;
    return {
      isChecked: me.get('checked'),
      name: '',
      isDisabled: me.get('disabled'),
    }
  },

  events: {
    updateRadioName(event, data) {
      this.set({
        name: data.name
      });
    },
    updateRadioValue(event, data) {
      this.set({
        isChecked: data.value == this.get('value')
      });
    },
    updateRadioDisabled(event, data) {
      this.set({
        isDisabled: data.disabled
      });
    }
  },

  methods: {
    click() {
      let me = this;
      if (me.get('isDisabled')) {
        return;
      }

      me.fire(
        'radioValueChange',
        {
          value: me.get('value')
        }
      );
      return;
    }
  }
};