import CheckboxTpl from './template/Checkbox.html'

export default {
  template: CheckboxTpl,

  model: 'modelValue',

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
    indeterminate: {
      type: 'boolean'
    },
    value: {
      type: ['string', 'numeric', 'boolean']
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'string'
    }
  },

  computed: {
    isChecked () {
      return this.get('checked') ? true : false
    }
  },

  events: {
    updateCheckboxValue(event, data) {
      let me = this;
      let isChecked = Yox.is.array(data.value)
        && Yox.array.has(data.value, me.get('value'));
      me.set({
        isChecked: isChecked
      });
    },
    updateCheckboxType(event, data) {
      this.set({
        type: data.type
      });
    },
    updateCheckboxDisabled(event, data) {
      this.set({
        disabled: data.disabled
      });
    }
  },

  methods: {
    click() {
      let me = this;
      if (me.get('disabled')) {
        return;
      }
      let isChecked = me.get('isChecked');
      me.fire(
        'change',
        {
          isChecked: !isChecked,
          value: me.get('value')
        }
      );
      me.set({
        isChecked: !isChecked
      });
    }
  }
};