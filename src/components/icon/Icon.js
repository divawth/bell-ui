export default {
    template: `
        <span class="bell-icon bell-icon-{{type}}
        {{#if className}} {{className}}{{/if}}"
        style="font-size: {{size}}px;">
        </span>
    `,
    propTypes: {
        type: {
            type: 'string'
        },
        size: {
            type: 'number'
        },
        className: {
            type: 'string'
        }
    }
}