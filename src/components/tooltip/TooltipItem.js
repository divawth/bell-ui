export default {
    template: `
        <div class="bell-tooltip-inner-content">
            {{$children}}
        </div>
    `,
    afterMount: function () {
        var me = this;
        me.fire(
            'hasTooltipItem'
        );
    }
}