export default {
    template: `
        <div class="bell-card-title
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}

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