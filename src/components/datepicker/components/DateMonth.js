const MONTHS = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
];

export default {
    template: `
        <div class="bell-datepicker-table-month">
            {{#each months:index}}
                <span
                    class="bell-datepicker-col
                    {{#if checkedMonth == index}} bell-datepicker-col-checked{{/if}}"
                    on-click="click(index)"
                >
                    {{this}}
                </span>
            {{/each}}
        </div>
    `,

    propTypes: {
        year: {
            type: ['string', 'number']
        }
    },

    data: function () {
        let me = this;
        return {
            checkedMonth: '',
            months: MONTHS
        }
    },

    methods: {
        click: function (month) {

            var me = this;
            var year = me.get('year');
            year = year ? year : new Date().getFullYear();

            me.set({
                checkedMonth: month
            });
            me.fire(
                'monthChange',
                {
                    year: year,
                    month: month
                }
            );
        }
    },

    afterMount: function () {
        var me = this;
    },
    beforeDestroy: function () {
        var me = this;
    }
}