import Yox from 'yox';
import template from './template/InputNumber.hbs';
import { FALSE, TRUE, RAW_FUNCTION, RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN, RAW_TYPE_ARRAY, } from '../constant';
import { oneOf, } from '../util';
export default Yox.create({
    propTypes: {
        formatter: {
            type: RAW_FUNCTION
        },
        status: {
            type: oneOf(RAW_TYPE_ARRAY)
        },
        max: {
            type: RAW_NUMERIC,
            value: 100
        },
        min: {
            type: RAW_NUMERIC,
            value: 0
        },
        value: {
            type: RAW_NUMERIC
        },
        step: {
            type: RAW_NUMERIC,
            value: 1
        },
        size: {
            type: RAW_STRING
        },
        editable: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        readonly: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        placeholder: {
            type: RAW_STRING
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
            isFocus: FALSE
        };
    },
    watchers: {
        value: function (value) {
            this.fire('change.inputNumber', { value: value });
        }
    },
    computed: {
        computedValue: function () {
            if (this.get('formatter')) {
                return this.get('formatter')(this.get('value'));
            }
            else {
                return this.get('value');
            }
        }
    },
    methods: {
        up: function () {
            this.increase('value', +this.get('step'), +this.get('max'));
        },
        down: function () {
            this.decrease('value', +this.get('step'), +this.get('min'));
        },
        blur: function () {
            this.set('isFocus', FALSE);
            this.fire('blur.inputNumber');
        },
        focus: function () {
            this.set('isFocus', TRUE);
            this.fire('focus.inputNumber');
        }
    },
    afterMount: function () {
        var me = this, doc = document;
        var onKeydown = function (event) {
            switch (event.originalEvent.keyCode) {
                case 38:
                    me.up();
                    break;
                case 40:
                    me.down();
                    break;
            }
        };
        Yox.dom.on(doc, 'keydown', onKeydown);
        me.on('beforeDestroy.hook', function () {
            Yox.dom.off(doc, 'keydown', onKeydown);
        });
    }
});
//# sourceMappingURL=InputNumber.js.map