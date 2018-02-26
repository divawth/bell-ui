export default {
    template: `
<div class="bell-card-title">

    <slot name="children" />

    {{#if title}}
    <div class="bell-card-title-text
    {{#if titleClass}} {{titleClass}}{{/if}}
    ">
        {{title}}
    </div>
    {{/if}}

    {{#if subTitle}}
    <div class="bell-card-sub-title
    {{#if subTitleClass}} {{subTitleClass}}{{/if}}
    ">
        {{subTitle}}
    </div>
    {{/if}}
</div>
    `,

    propTypes: {
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
}