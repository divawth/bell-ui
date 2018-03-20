export default {
    template: `
        <div class="bell-datepicker-month">
            <div class="bell-datepicker-header">
                <span class="bell-datepicker-header-button" on-click="prev()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-left"></i>
                </span>

                <span class="bell-text-medium">
                    {{modeYear}} 年 ~ {{modeYear + 12}} 年
                </span>

                <span class="bell-datepicker-header-button" on-click="next()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-right"></i>
                </span>
            </div>
            <div class="bell-datepicker-body">
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
        </div>
    `,

    propTypes: {
        startYear: {
            type: ['string', 'number']
        }
    },

    data: function () {
        let me = this;
        return {
            modeYear: me.get('startYear'),
            checkedYear: '',
            years: []
        }
    },

    methods: {
        prev: function () {
            var me = this;
            me.decrease('modeYear', 12);
            me.getYearList(me.get('modeYear'));
        },
        next: function () {
            var me = this;
            me.increase('modeYear', 12);
            me.getYearList(me.get('modeYear'));
        },
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
        },
        getYearList: function (startYear) {
            var me = this;
            var years = [];
            for (var item = startYear; item < startYear + 12; item++) {
                years.push(item);
            }
            me.set({
                modeYear: startYear,
                years: years
            });
        }
    },

    afterMount: function () {
        var me = this;
        var today = new Date();
        var start = me.get('startYear');
        start = start ? start : today.getFullYear();
        me.getYearList(start);
    }
}