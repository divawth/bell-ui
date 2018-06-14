export default {
    template: `
        <div class="bell-card-title
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            {{#if hasSlot('title')}}
                <span class="bell-card-title-text
                    {{#if titleClass}} {{titleClass}}{{/if}}
                ">
                    <slot name="title" />
                </span>
            {{/if}}

            {{#if hasSlot('extra')}}
                <span class="bell-card-title-extra">
                    <slot name="extra" />
                </span>
            {{/if}}

            {{#if hasSlot('subTitle')}}
                <div class="bell-card-sub-title
                    {{#if subTitleClass}} {{subTitleClass}}{{/if}}
                ">
                    <slot name="subTitle" />
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
        titleClass: {
            type: 'string'
        },
        subTitleClass: {
            type: 'string'
        }
    }
};