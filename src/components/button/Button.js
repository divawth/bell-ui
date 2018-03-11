export default {
    template: `
<div class="bell-button
    {{#if type}} {{type}}{{/if}}
    {{#if shape}} border-{{shape}}{{/if}}
    {{#if size}} {{size}}{{/if}}
    {{#if long}} bell-button-long{{/if}}
    {{#if className}} {{className}}{{/if}}
"{{#if disabled}} disabled{{/if}} on-click="click">

    {{#if icon}}
        <i class="bell-icon {{icon}}"></i>
    {{/if}}

    <span>
        {{#if label}}
            {{label}}
        {{else}}
            <slot name="children" />
        {{/if}}
    </span>
</div>
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