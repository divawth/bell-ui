export default {
    template: `
        <button class="bell-button
            {{#if className}} {{className}}{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if shape}} {{shape}}{{/if}}
            {{#if size}} {{size}}{{/if}}
            {{#if fluid}} bell-button-fluid{{/if}}
            {{#if !label && !children && icon}} bell-icon-only{{/if}}
        "{{#if disabled}} disabled{{/if}} on-click="click"
        {{#if style}} style="{{style}}"{{/if}}>

            {{#if hasSlot('leftIcon')}}
                <slot name="leftIcon" />
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

            {{#if hasSlot('rightIcon')}}
                <slot name="rightIcon" />
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
        fluid: {
            type: ['numeric', 'boolean']
        },
        disabled: {
            type: ['numeric', 'boolean']
        }
    }
};