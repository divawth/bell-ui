export default {
    template: `
        <div class="bell-menu">
            {{$children}}
        </div>
    `,

    propTypes: {
        activeName: {
            type: 'string'
        }
    },

    events: {
        setActiveMenu: function (event, data) {
            this.updateChild(data.name);
        }
    },

    methods: {
        updateChild: function (activeName) {
            var me = this;
            me.$children.some(child => {
                if (child.$options.props.name == activeName) {
                    $(child.$el).addClass('bell-active');
                }
                else {
                    $(child.$el).removeClass('bell-active');
                }
            });
        }
    },

    watchers: {
        activeName: function (activeName) {
            this.updateChild(activeName);
        }
    }
}