import Yox from 'yox';
import template from './template/Radio.hbs';
import { FALSE, RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC, } from '../constant';
import { findComponentUpward, } from '../util';
export default Yox.define({
    propTypes: {
        label: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMERIC, RAW_BOOLEAN, RAW_STRING]
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        checked: {
            type: RAW_BOOLEAN
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
            isChecked: FALSE,
            name: '',
            isDisabled: this.get('disabled')
        };
    },
    events: {
        updateRadioValue: function (_, data) {
            this.set({
                isChecked: data.value == this.get('value')
            });
        }
    },
    methods: {
        click: function () {
            var me = this;
            if (me.get('isDisabled')) {
                return;
            }
            me.fire('radioValueChange', {
                value: me.get('value')
            });
            return;
        }
    },
    afterMount: function () {
        var radiogroup = findComponentUpward(this.$parent, '${prefix}radiogroup');
        if (radiogroup) {
            this.set({
                name: radiogroup.get('name'),
                isDisabled: this.get('disabled') || radiogroup.get('disabled'),
                isChecked: this.get('checked') || radiogroup.get('value') == this.get('value')
            });
        }
    }
});
//# sourceMappingURL=Radio.js.map