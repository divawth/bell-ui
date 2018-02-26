export default {
    template: `
<div class="bell-button
    {{#if type}} bell-{{type}}{{/if}}
    {{#if shape}} bell-{{shape}}{{/if}}
    {{#if size}} bell-{{size}}{{/if}}
    {{#if long}} bell-long{{/if}}
    {{#if disabled}} bell-disabled{{/if}}
    {{#if className}} {{className}}{{/if}}
" on-click="click">

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