import template from '../template/DateYear.hbs';
import { RAW_STRING } from '../../constant';
import { isDate } from '../../util';
import Yox from 'yox';
export default Yox.create({
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
        var checkedYear = '';
        if (this.get('value')) {
            checkedYear = this.get('value').getFullYear();
        }
        return {
            modeYear: year,
            checkedYear: checkedYear,
            years: []
        };
    },
    watchers: {
        value: function (value) {
            var checkedYear = '';
            if (value) {
                checkedYear = value.getFullYear();
            }
            this.set({ checkedYear: checkedYear });
        }
    },
    methods: {
        prev: function () {
            this.decrease('modeYear', 12);
            this.getYearList(this.get('modeYear'));
        },
        next: function () {
            this.increase('modeYear', 12);
            this.getYearList(this.get('modeYear'));
        },
        click: function (year) {
            this.set({
                checkedYear: year
            });
            this.fire('change.year', {
                year: year
            });
        },
        getYearList: function (startYear) {
            var years = [];
            for (var item = startYear; item < startYear + 12; item++) {
                years.push(item);
            }
            this.set({
                modeYear: startYear,
                years: years
            });
        }
    },
    afterMount: function () {
        this.getYearList(this.get('modeYear'));
        if (this.get('value')) {
            this.fire('change.year', {
                year: this.get('checkedYear')
            });
        }
    }
});
//# sourceMappingURL=DateYear.js.map