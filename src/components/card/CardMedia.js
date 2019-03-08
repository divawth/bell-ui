export default {
  template: `
<div class="bell-card-media
  {{#if className}} {{className}}{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>

  {{#if hasSlot('children')}}
    <slot name="children" />
  {{/if}}

  <div class="bell-card-media-detail">

    {{#if title}}
      <div class="bell-card-media-title
        {{#if titleClass}} {{titleClass}}{{/if}}
      ">
        {{title}}
      </div>
    {{/if}}

    {{#if subTitle}}
      <div class="bell-card-media-sub-title
        {{#if subTitleClass}} {{subTitleClass}}{{/if}}
      ">
        {{subTitle}}
      </div>
    {{/if}}

  </div>
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
    },
    titleClass: {
      type: 'string'
    },
    subTitle: {
      type: 'string'
    },
    subTitleClass: {
      type: 'string'
    }
  }
};