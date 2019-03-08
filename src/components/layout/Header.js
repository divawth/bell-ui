export default {
  template: `
<div class="bell-layout-header bell-col-span-24
  {{#if className}} {{className}}{{/if}}"
  {{#if style}} style="{{style}}"{{/if}}
>
  {{#if hasSlot('left')}}
    <div class="bell-layout-header-left">
      <slot name="left" />
    </div>
  {{/if}}

  {{#if hasSlot('center') || hasSlot('children')}}
    <div class="bell-layout-header-center">
      <slot name="center" />
      <slot name="children" />
    </div>
  {{/if}}

  {{#if hasSlot('right')}}
    <div class="bell-layout-header-right">
      <slot name="right" />
    </div>
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