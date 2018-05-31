export default {
    template: `
        <div class="bell-layout-header bell-col-span-24
            {{#if className}} {{className}}{{/if}}"
            {{#if style}} style="{{style}}"{{/if}}
        >
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