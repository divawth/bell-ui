export default {
  template: `
<div class="bell-tooltip-inner-content
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
    },
  },

  afterMount() {
    let me = this;
    me.fire(
      'hasTooltipItem'
    );
  }
};