import Yox from 'yox';
import template from './template/Input.hbs';
import { FALSE, TRUE, RAW_BOOLEAN, RAW_STRING, RAW_NUMERIC, RAW_OBJECT, } from '../constant';
import { oneOf, } from '../util';
var TEXT_TYPE_PASSWORD = 'password';
var TEXT_TYPE_TEXTAREA = 'textarea';
var TEXT_TYPE_TEXT = 'text';
var ROWS_HEIGHT = 22;
export default Yox.create({
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
            isSecure: TRUE,
            isFocus: FALSE,
            currentType: this.get('type'),
            TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
            TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
            TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,
        };
    },
    filters: {
        isBoolean: function (value) {
            return Yox.is.boolean(value);
        }
    },
    watchers: {
        value: function (value) {
            this.fire('change.input', { value: value });
        },
        isSecure: function (isSecure) {
            this.set({
                currentType: isSecure
                    ? TEXT_TYPE_PASSWORD
                    : TEXT_TYPE_TEXT
            });
        }
    },
    methods: {
        blur: function () {
            this.set('isFocus', FALSE);
            this.fire('blur.input');
        },
        focus: function () {
            this.set('isFocus', TRUE);
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
        var me = this, doc = document;
        var onKeydown = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keydown.input');
                if (originalEvent.keyCode === 13) {
                    me.fire('enter.input');
                }
            }
        };
        var onKeyup = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keyup.input');
            }
        };
        var onKeypress = function (event) {
            var originalEvent = event.originalEvent;
            if (me.$refs && originalEvent.target == me.$refs.input) {
                me.fire('keypress.input');
            }
        };
        Yox.dom.on(doc, 'keydown', onKeydown);
        Yox.dom.on(doc, 'keyup', onKeyup);
        Yox.dom.on(doc, 'keypress', onKeypress);
        me.on('beforeDestroy.hook', function () {
            Yox.dom.off(doc, 'keydown', onKeydown);
            Yox.dom.off(doc, 'keyup', onKeyup);
            Yox.dom.off(doc, 'keypress', onKeypress);
        });
    }
});
//# sourceMappingURL=Input.js.map