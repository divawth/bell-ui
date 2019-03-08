export default {
  template: `
<button class="bell-button
  {{#if className}} {{className}}{{/if}}
  {{#if type}} bell-button-{{type}}{{/if}}
  {{#if shape}} bell-button-{{shape}}{{/if}}
  {{#if size}} bell-button-{{size}}{{/if}}
  {{#if fluid}} bell-button-fluid{{/if}}
"{{#if disabled}} disabled{{/if}} on-click="click"
{{#if style}} style="{{style}}"{{/if}}>

  {{#if hasSlot('leftIcon')}}
    <slot name="leftIcon" />
  {{/if}}

  {{#if label}}
    <span>
      {{label}}
    </span>
  {{else if hasSlot('children')}}
    <slot name="children" />
  {{/if}}

  {{#if hasSlot('rightIcon')}}
    <slot name="rightIcon" />
  {{/if}}
</button>
  `,
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
    label: {
      type: 'string'
    },
    shape: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    fluid: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    }
  }
};