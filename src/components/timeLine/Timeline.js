export default {
  template: `
<ul class="bell-time-line
  {{#if pending}} bell-time-line-padding{{/if}}
">
  {{#if hasSlot('children')}}
      <slot name="children" />
  {{/if}}
</ul>
  `,
  propTypes: {
    pending: {
      type: 'boolean'
    }
  }
}