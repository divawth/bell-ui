export default {
    template: `
        <div class="bell-menu">
            {{$children}}
        </div>
    `,

    events: {
        setActiveMenu: function (event, data) {
            var me = this;
            me.$children.some(child => {
                if (child.$options.props.name == data.name) {
                    $(child.$el).addClass('bell-active')
                }
                else {
                    $(child.$el).removeClass('bell-active')
                }
            });
        }
    },

    afterMount: function (argument) {
        var me = this;

    }
}