import template from '../template/DateMonth.hbs';
import { RAW_STRING } from '../../constant';
import { MONTHS } from '../function/constant';
import { isDate } from '../../util';
import Yox from 'yox';
export default Yox.define({
    propTypes: {
        startDate: {
            type: isDate()
        },
        value: {
            type: isDate()
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
        var year = new Date().getFullYear();
        if (this.get('startDate')) {
            year = this.get('startDate').getFullYear();
        }
        var checkedMonth = '';
        var checkedYear = '';
        if (this.get('value')) {
            checkedYear = this.get('value').getFullYear();
            checkedMonth = this.get('value').getMonth();
        }
        return {
            checkedMonth: checkedMonth,
            checkedYear: checkedYear,
            modeYear: year,
            months: MONTHS
        };
    },
    watchers: {
        value: function (value) {
            var checkedMonth = '';
            var checkedYear = '';
            if (value) {
                checkedYear = value.getFullYear();
                checkedMonth = value.getMonth();
            }
            this.set({
                checkedYear: checkedYear,
                checkedMonth: checkedMonth
            });
        }
    },
    methods: {
        click: function (month) {
            var year = this.get('modeYear');
            this.set({
                checkedYear: year,
                checkedMonth: month
            });
            this.fire('change.month', {
                year: year,
                month: month + 1
            });
        }
    },
    afterMount: function () {
        if (this.get('value')) {
            this.fire('change.month', {
                year: this.get('checkedYear'),
                month: this.get('checkedMonth') + 1
            });
        }
    }
});
//# sourceMappingURL=DateMonth.js.map