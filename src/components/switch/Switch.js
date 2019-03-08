export default {
  template: `
<div class="bell-switch
  {{#if type}} bell-switch-{{type}}{{/if}}
  {{#if size}} bell-switch-{{size}}{{/if}}
  {{#if disabled}} bell-switch-disabled{{/if}}
  {{#if checked}} bell-active{{/if}}
  {{#if className}} {{className}}{{/if}}
"{{#if style}} style="{{style}}"{{/if}} on-click="click()">

  <span class="bell-switch-button">
    <span class="bell-switch-on">
      {{#if hasSlot('checkedText')}}
        <slot name="checkedText" />
      {{/if}}
    </span>
    <span class="bell-switch-off">
      {{#if hasSlot('unCheckedText')}}
        <slot name="unCheckedText" />
      {{/if}}
    </span>
  </span>
  <input class="bell-switch-input" type="hidden" value="{{value}}" />
</div>
  `,

  model: 'checked',

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    checked: {
      type: 'boolean'
    }
  },

  methods: {
    click() {
      let me = this;
      if (me.get('disabled')) {
        return;
      }

      me.toggle('checked');
      me.fire(
        'change',
        {
          checked: me.get('checked')
        }
      );
    }
  }
};