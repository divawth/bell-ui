export default {
    template: `
        <i class="{{#if type}}bell-icon bell-icon-{{type}}{{/if}}
            {{#if className}} {{className}}{{/if}}"
            style="font-size: {{size}}px;{{#if style}} {{style}}{{/if}}"
        >
        </i>
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
        size: function (value) {
            return value != null ? +value : 14;
        }
    }
};