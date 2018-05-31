export default {
    template: `
        <span class="bell-icon bell-icon-{{type}}
            {{#if className}} {{className}}{{/if}}"
            style="font-size: {{size}}px;{{#if style}} {{style}}{{/if}}"
        >
        </span>
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
        size: {
            type: 'number',
            value: 12
        }
    }
};