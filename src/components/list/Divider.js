export default {
    template: `
        <li class="bell-list-divider
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>
        </li>
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