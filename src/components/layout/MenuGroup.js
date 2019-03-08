export default {
  template: `
<div class="bell-menu-group
{{#if className}} {{className}}{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>

  <div class="bell-menu-group-title">
    {{title}}
  </div>

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
    },
    title: {
      type: 'string'
    }
  }
};