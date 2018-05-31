export default {
    template: `
        <div class="bell-form
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>
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