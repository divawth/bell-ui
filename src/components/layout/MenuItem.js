export default {
    template: `
        <div class="bell-menu-item" data-name="{{name}}" on-click="handleClick(name)">
            {{$children}}
        </div>
    `,

    propTypes: {
        name: {
            type: 'string'
        },
        to: {
            type: 'string'
        },

        disabled: {
            type: 'boolean'
        }
    },

    methods: {
        handleClick: function (name) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            if (me.get('to')) {
                location.href = me.get('to');
            }

            me.fire(
                'setActiveMenu',
                {
                    name: name
                }
            );
        }
    }
}