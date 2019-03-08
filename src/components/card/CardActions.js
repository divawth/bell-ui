export default {
  template: `
<div class="bell-card-actions
  {{#if className}} {{className}}{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>
  {{#if hasSlot('children')}}
    <slot name="children" />
  {{/if}}
</div>
  `,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  }
};