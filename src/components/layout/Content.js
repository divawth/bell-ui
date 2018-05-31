export default {
    template: `
        <div class="bell-layout-content bell-col-span
            {{#if hasSider}}-18{{else}}-24{{/if}}
            {{#if className}} {{className}}{{/if}}"
            {{#if style}} style="{{style}}"{{/if}}
        >
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,

    events: {
        childrenHasSider(value) {
            this.set({
                hasSider: value
            });
        }
    },

    data() {
        return {
            hasSider: false
        }
    },

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        }
    }
};