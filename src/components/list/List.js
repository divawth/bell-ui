export default {
  template: `
<ul class="bell-list
  {{#if className}} {{className}}{{/if}}
  {{#if border}} bell-list-border{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>
  {{#if hasSlot('subHeader')}}
    <div class="bell-list-header">
      <slot name="subHeader" />
    </div>
  {{/if}}

  {{#if hasSlot('children')}}
    <slot name="children" />
  {{/if}}
</ul>
    `,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    border: {
      type: 'boolean',
      value: true
    }
  }
};