export default {
    template: `
        <ul class="bell-list
        {{#if border}} bell-border{{/if}}
        ">
            <slot name="children" />
        </ul>
    `,
    propTypes: {
        border: {
            type: 'boolean'
        }
    }
}