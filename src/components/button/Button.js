export default {
    template: `
        <button class="bell-button
            {{#if className}} {{className}}{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if shape}} {{shape}}{{/if}}
            {{#if size}} {{size}}{{/if}}
            {{#if long}} bell-button-long{{/if}}
            {{#if !label && !children && icon}} bell-icon-only{{/if}}
        "{{#if disabled}} disabled{{/if}} on-click="click"
        {{#if style}} style="{{style}}"{{/if}}>

            {{#if icon}}
                <i class="bell-icon bell-icon-{{icon}}"></i>
            {{/if}}

            {{#if label}}
                <span>
                    {{label}}
                </span>
            {{else}}
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            {{/if}}
        </button>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
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
            type: ['numeric', 'boolean']
        },
        disabled: {
            type: ['numeric', 'boolean']
        }
    }
};