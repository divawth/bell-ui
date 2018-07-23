export default {
    template: `
        <div class="bell-form-item
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        }
    }
};