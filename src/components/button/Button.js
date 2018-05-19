export default {
    template: `
<button class="bell-button
    {{#if type}} {{type}}{{/if}}
    {{#if shape}} {{shape}}{{/if}}
    {{#if size}} {{size}}{{/if}}
    {{#if long}} bell-button-long{{/if}}
    {{#if className}} {{className}}{{/if}}
    {{#if !label && !children && icon}} bell-icon-only{{/if}}
"{{#if disabled}} disabled{{/if}} on-click="click">

    {{#if icon}}
        <i class="bell-icon bell-icon-{{icon}}"></i>
    {{/if}}

    {{#if label}}
        <span>
            {{label}}
        </span>
    {{else}}
        <slot name="children" />
    {{/if}}
</button>
    `,
    propTypes: {
        type: {
            type: 'string'
        },
        label: {
            type: 'string'
        },
        shape: {
            type: 'string'
        },
        icon: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        long: {
            type: ['string', 'boolean']
        },
        disabled: {
            type: ['string', 'boolean']
        },
        className: {
            type: 'string'
        }
    }
}