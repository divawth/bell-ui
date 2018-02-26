export default {
    template: `
        <div class="bell-sub-menu
        {{#if className}} {{className}}{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}>
            <slot name="children" />
        </div>
    `,
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
}