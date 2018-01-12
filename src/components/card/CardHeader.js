export default {
    template: `
<div class="bell-card-header">

    {{$children}}

    <div class="bell-card-header-detail">
        {{#if title}}
        <div class="bell-card-header-title
        {{#if titleClass}} {{titleClass}}{{/if}}
        ">
            {{title}}
        </div>
        {{/if}}

        {{#if subTitle}}
        <div class="bell-card-header-sub-title
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