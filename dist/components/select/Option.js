import template from './template/Option.html';
import { RAW_STRING, RAW_NUMERIC } from '../constant';
export default {
    propTypes: {
        value: {
            type: [RAW_STRING, RAW_NUMERIC]
        },
        text: {
            type: [RAW_STRING, RAW_NUMERIC]
        },
        index: {
            type: [RAW_STRING, RAW_NUMERIC],
            require: true
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    events: {
        optionHoveredChange: function (_, data) {
            var isHover = data.index == this.get('index');
            this.set({
                isHover: isHover
            });
            if (isHover && !this.get('isSelected')) {
                this.set({
                    isSelected: data.selected
                });
            }
        },
        optionSelectedChange: function (_, data) {
            var value = this.get('value');
            var values = data.value;
            var isSelected = Yox.is.array(values) ? values.indexOf(value) >= 0 : values == value;
            this.set({
                isSelected: isSelected
            });
            if (isSelected) {
                this.fire('selectedOptionChange');
            }
        }
    },
    data: function () {
        return {
            isSelected: false,
            isHover: false
        };
    },
    methods: {
        click: function () {
            this.fire('optionSelect');
        }
    },
    afterMount: function () {
        this.fire('optionAdd', {
            value: this.get('value'),
            text: this.get('text'),
            index: this.get('index')
        });
    },
    beforeDestroy: function () {
        this.fire('optionRemove');
    }
};
//# sourceMappingURL=Option.js.map