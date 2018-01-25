export default {
    template: `
        <div class="bell-datepicker-table-year">
            {{#each years:index}}
                <span
                    class="bell-datepicker-col
                    {{#if checkedYear == this}} bell-datepicker-col-checked{{/if}}"
                    on-click="click(this)"
                >
                    {{this}}
                </span>
            {{/each}}
        </div>
    `,

    propTypes: {
        start: {
            type: ['string', 'number']
        },
        end: {
            type: ['string', 'number']
        }
    },

    data: function () {
        let me = this;
        return {
            checkedYear: '',
            years: []
        }
    },

    methods: {
        click: function (year) {

            var me = this;

            me.set({
                checkedYear: year
            });
            me.fire(
                'yearChange',
                {
                    year: year
                }
            );
        }
    },

    afterMount: function () {
        var me = this;
        var start = me.get('start');
        start = start ? start : 2010;

        var end = me.get('end');
        end = end ? end : 2019;

        var years = [];
        for (var item = start; item <= end; item++) {
            years.push(item);
        }
        me.set({
            years: years
        });
    },
    beforeDestroy: function () {
        var me = this;
    }
}