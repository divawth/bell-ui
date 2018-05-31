export default {
    template: `
        <ul class="bell-list
            {{#if className}} {{className}}{{/if}}
            {{#if border}} bell-border{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </ul>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        border: {
            type: 'boolean'
        }
    }
};