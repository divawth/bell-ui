import template from './template/Input.html';
import { RAW_BOOLEAN, RAW_STRING, RAW_NUMERIC, RAW_OBJECT } from '../constant';
import { oneOf } from '../util';
var TEXT_TYPE_PASSWORD = 'password';
var TEXT_TYPE_TEXTAREA = 'textarea';
var TEXT_TYPE_TEXT = 'text';
var ROWS_HEIGHT = 22;
export default {
    propTypes: {
        value: {
            type: RAW_STRING
        },
        size: {
            type: RAW_STRING
        },
        search: {
            type: RAW_BOOLEAN
        },
        enterButton: {
            type: [RAW_BOOLEAN, RAW_STRING]
        },
        autoSize: {
            type: [RAW_BOOLEAN, RAW_OBJECT]
        },
        type: {
            type: RAW_STRING
        },
        status: {
            type: RAW_STRING
        },
        placeholder: {
            type: RAW_STRING
        },
        rows: {
            type: RAW_NUMERIC,
            value: 2
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        clearable: {
            type: RAW_BOOLEAN
        },
        secure: {
            type: RAW_BOOLEAN
        },
        prefix: {
            type: RAW_STRING
        },
        suffix: {
            type: RAW_STRING
        },
        autocomplete: {
            type: oneOf(['on', 'off'])
        },
        wrap: {
            type: oneOf(['hard', 'soft'])
        },
        spellcheck: {
            type: RAW_BOOLEAN
        },
        readonly: {
            type: RAW_BOOLEAN
        },
        maxLength: {
            type: RAW_NUMERIC
        },
        style: {
            type: RAW_STRING
        },
        className: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
        return {
            isSecure: true,
            isFocus: false,
            currentType: this.get('type'),
            TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,
            isBoolean: function (value) {
                return Yox.is.boolean(value);
            }
        };
    },
    watchers: {
        value: function (value) {
            this.fire('change.input', { value: value });
        },
        isSecure: function (isSecure) {
            this.set({
                currentType: isSecure ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
            });
        }
    },
    methods: {
        blur: function () {
            this.set('isFocus', false);
            this.fire('blur.input');
        },
        focus: function () {
            this.set('isFocus', true);
            this.fire('focus.input');
        },
        clear: function () {
            this.set('value', '');
            this.fire('clear.input');
        },
        search: function () {
            this.fire('search.input', {
                value: this.get('value')
            });
        }
    },
    computed: {
        textComputedStyle: function () {
            var size = this.get('autoSize');
            if (size) {
                var minRows = 2;
                var maxRows = 2;
                var height = 2;
                if (Yox.is.object(size)) {
                    minRows = size.minRows;
                    maxRows = size.maxRows;
                    height = this.get('value') ? this.get('value').split('\n').length : minRows;
                    return "min-height: " + minRows * ROWS_HEIGHT + "px;max-height: " + maxRows * ROWS_HEIGHT + "px;height: " + height * ROWS_HEIGHT + "px;";
                }
                else {
                    height = this.get('value') ? this.get('value').split('\n').length : minRows;
                    return "min-height: " + minRows * ROWS_HEIGHT + "px;height: " + height * ROWS_HEIGHT + "px;";
                }
            }
            else {
                return "height: " + this.get('rows') * ROWS_HEIGHT + "px";
            }
        }
    },
    afterMount: function () {
        var me = this;
        me.documentKeydownHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keydown.input');
                if (event.keyCode === 13) {
                    me.fire('enter.input');
                }
            }
        };
        me.documentKeyupHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keyup.input');
            }
        };
        me.documentKeypressHandler = function (event) {
            event = event.originalEvent;
            if (me.$refs && event.target == me.$refs.input) {
                me.fire('keypress.input');
            }
        };
        Yox.dom.on(document, 'keydown', me.documentKeydownHandler);
        Yox.dom.on(document, 'keyup', me.documentKeyupHandler);
        Yox.dom.on(document, 'keypress', me.documentKeypressHandler);
    },
    beforeDestroy: function () {
        Yox.dom.off(document, 'keydown', this.documentKeydownHandler);
        Yox.dom.off(document, 'keyup', this.documentKeyupHandler);
        Yox.dom.off(document, 'keypress', this.documentKeypressHandler);
    }
};
//# sourceMappingURL=Input.js.map