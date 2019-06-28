import Yox from 'yox';
import template from './template/TimePicker.hbs';
import { RAW_STRING, RAW_NUMBER, RAW_FUNCTION, } from '../constant';
export default Yox.define({
    propTypes: {
        unit: {
            type: RAW_STRING,
            value: '分'
        },
        onChange: {
            type: RAW_FUNCTION
        },
        tens: {
            type: RAW_NUMBER,
            value: 0
        },
        ones: {
            type: RAW_NUMBER,
            value: 0
        }
    },
    template: template,
    watchers: {
        tens: function (val) {
            var ones = this.get('ones');
            var result = val * 10 + ones;
            this.get('onChange') && this.get('onChange')(result);
        },
        ones: function (val) {
            var tens = this.get('tens');
            var result = tens * 10 + val;
            this.get('onChange') && this.get('onChange')(result);
        }
    },
    methods: {
        upTens: function () {
            this.decrease('tens', 1, 0);
        },
        downTens: function () {
            this.increase('tens', 1, 5);
        },
        upOnes: function () {
            this.decrease('ones', 1, 0);
        },
        downOnes: function () {
            this.increase('ones', 1, 9);
        }
    },
    afterMount: function () {
    },
    beforeDestroy: function () {
    }
});
//# sourceMappingURL=TimePicker.js.map