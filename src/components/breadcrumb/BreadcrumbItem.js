export default {
  template: `
<span class="bell-breadcrumb-item bell-text
  {{#if className}} {{className}}{{/if}}
" {{#if style}} style="{{style}}"{{/if}}>
  <a {{#if to}}href="{{to}}"{{/if}} class="bell-breadcrumb-link">
    {{#if hasSlot('children')}}
      <slot name="children" />
    {{/if}}
  </a>
  <span class="bell-breadcrumb-gap">
    {{#if separator}}
      {{separator}}
    {{else}}
      /
    {{/if}}
  </span>
</span>
  `,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    separator: {
      type: 'string'
    }
  }
};