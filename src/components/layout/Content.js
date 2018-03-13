export default {
    template: `
        <div class="bell-layout-content bell-col-span{{#if hasSider}}-18{{else}}-24{{/if}}
        {{#if className}} {{className}}{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}>
            <slot name="children" />
        </div>
    `,

    events: {
        hasSider: function (value) {
            this.set({
                hasSider: value
            });
        }
    },

    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    }
}