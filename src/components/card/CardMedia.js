export default {
    template: `
<div class="bell-card-media">

    <slot name="children" />

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