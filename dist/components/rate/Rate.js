import Yox from 'yox';
import template from './template/Rate.hbs';
import { FALSE, RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC, RAW_ARRAY, } from '../constant';
export default Yox.create({
    propTypes: {
        count: {
            type: RAW_NUMERIC,
            value: 5
        },
        value: {
            type: RAW_NUMERIC
        },
        half: {
            type: RAW_BOOLEAN
        },
        readOnly: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        showTexts: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        texts: {
            type: RAW_ARRAY
        },
        type: {
            type: RAW_STRING,
            value: 'warning'
        },
        icon: {
            type: RAW_STRING,
            value: 'star'
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
        return {
            hoverValue: -1
        };
    },
    computed: {
        activeValue: function () {
            return this.get('hoverValue') < 0 ? this.get('value') : this.get('hoverValue');
        }
    },
    filters: {
        getValue: function (index) {
            var texts = this.get('texts');
            return texts && texts[index - 1];
        }
    },
    methods: {
        handleMove: function (event, index) {
            if (this.get('readOnly')) {
                return;
            }
            event = event.originalEvent.originalEvent;
            var isHalf = event && event.target.getAttribute('data-type') == 'half';
            if (isHalf) {
                index -= 0.5;
            }
            this.set({
                hoverValue: index
            });
        },
        handleLeave: function () {
            if (this.get('readOnly')) {
                return;
            }
            this.set({
                hoverValue: this.get('value') >= 0 ? this.get('value') : -1
            });
        },
        handleClick: function (event, index) {
            if (this.get('readOnly')) {
                return;
            }
            event = event.originalEvent.originalEvent;
            var isHalf = event && event.target.getAttribute('data-type') == 'half';
            if (isHalf) {
                index -= 0.5;
            }
            this.set({
                value: index
            });
            this.fire('change', {
                value: index
            });
        }
    }
});
//# sourceMappingURL=Rate.js.map