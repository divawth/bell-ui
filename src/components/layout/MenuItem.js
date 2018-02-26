export default {
    template: `
        <div class="bell-menu-item
        {{#if isActive}} bell-active{{/if}}
        " on-click="click(name)">
            <slot name="children" />
        </div>
    `,

    propTypes: {
        name: {
            type: 'string'
        },
        hash: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        }
    },

    data: function () {
        return {
            isActive: false
        }
    },

    events: {
        activeMenuChange: function (event, data) {
            var me = this;
            me.set({
                isActive: me.get('name') === data.name
            });
        }
    },

    methods: {
        click: function (name) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('hash')) {
                location.href = me.get('hash');
            }
            me.set({
                isActive: true
            });

            me.fire(
                'menuItemActive',
                {
                    name: name
                }
            );
        }
    }
}