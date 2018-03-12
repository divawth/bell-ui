export default {
    template: `
        <div class="bell-layout
        {{#if hasSider}} has-sider{{/if}}
        {{#if className}} {{className}}{{/if}}"
        {{#if style}} style="{{style}}"{{/if}}>
            <slot name="children" />
        </div>
    `,

    data: function () {
        return {
            hasSider: false
        };
    },
    propTypes: {
        style: {
            type: 'string'
        },
        className: {
            type: 'string'
        }
    },
    events: {
        hasSider: function (event, data) {
            var me = this;
            me.set({
                hasSider: data.hasSider
            });
            return false;
        }
    }
}