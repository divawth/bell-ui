export default {
    template: `
        <span class="bell-icon bell-icon-{{type}}
        {{#if className}} {{className}}{{/if}}">
        </span>
    `,
    propTypes: {
        type: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
}