export default {
  template: `
<label class="bell-checkbox
  {{#if className}} {{className}}{{/if}}
  {{#if disabled}} bell-checkbox-disabled{{/if}}
  {{#if type}} bell-checkbox-{{type}}{{/if}}
  {{#if size}} bell-checkbox-{{size}}{{/if}}
  {{#if isChecked}} bell-active{{/if}}
  {{#if indeterminate}} bell-checkbox-indeterminate{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>

  <span class="bell-checkbox-wrapper
    {{#if isChecked}} bell-active{{/if}}
  " on-click="click()">
    <span class="bell-checkbox-inner"></span>
    <input class="bell-checkbox-input" type="checkbox" value="{{value}}" />
  </span>

  <span class="bell-checkbox-label">
    {{#if label}}
      {{label}}
    {{else}}
      {{#if hasSlot('children')}}
        <slot name="children" />
      {{/if}}
    {{/if}}
  </span>
</label>
  `,

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

  data() {
    return {
      isChecked: this.get('checked') ? true : false
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