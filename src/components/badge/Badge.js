export default {
  template: `
<div class="bell-badge
{{#if type}} bell-badge-{{type}}{{/if}}
{{#if className}} {{className}}{{/if}}
" {{#if style}} style="{{style}}"{{/if}}
>

{{#if hasSlot('children')}}
  <slot name="children" />
{{/if}}

{{#if !hidden}}
  {{#if dot}}
    <span class="bell-badge-dot"></span>
  {{else}}
    <span class="bell-badge-count
      {{#if !hasSlot('children')}} bell-badge-count-alone{{/if}}
    ">
      {{getText(count, maxCount)}}
    </span>
  {{/if}}
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
    count: {
      type: 'numeric'
    },
    maxCount: {
      type: 'numeric'
    },
    dot: {
      type: 'boolean'
    },
    hidden: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    }
  },

  filters: {
    getText(count, maxCount) {
      maxCount = Yox.is.number(maxCount) ? +maxCount : 1;
      let countStr = Yox.is.number(count) ? +count : 0;

      return maxCount < countStr
        ? maxCount + '+'
        : count;
    }
  }
};