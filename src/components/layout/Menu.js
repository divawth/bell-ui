export default {
    template: `
        <div class="bell-menu
        {{#if mode}} bell-menu-{{mode}}{{/if}}"
        {{#if style}} style="{{style}}"{{if}}>
            <slot name="children" />
        </div>
    `,

    propTypes: {
        mode: {
            type: 'string'
        },
        activeName: {
            type: 'string'
        },
        style: {
            type: 'string'
        }
    },

    events: {
        menuItemActive: function (event, data) {
            this.updateActiveName(data.name);
        }
    },

    methods: {
        updateActiveName: function (name) {
            var me = this;
            me.fire(
                'activeMenuChange',
                {
                    name: name
                },
                true
            );
        }
    },

    watchers: {
        activeName: function (activeName) {
            this.updateActiveName(activeName);
        }
    }
}