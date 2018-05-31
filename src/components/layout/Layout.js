export default {
    template: `
        <div class="bell-layout bell-row
            {{#if hasSider}} bell-col-span-24{{else}} column{{/if}}
            {{#if className}} {{className}}{{/if}}"
            {{#if style}} style="{{style}}"{{/if}}
        >
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,

    data() {
        return {
            hasSider: false
        };
    },

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        }
    },

    events: {
        hasSider(event, data) {
            let me = this;
            me.set({
                hasSider: data.hasSider
            });
            me.fire(
                'childrenHasSider',
                {},
                true
            );
            return false;
        }
    }
};