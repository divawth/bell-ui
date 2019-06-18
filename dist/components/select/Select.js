import template from './template/Select.html';
import { contains } from '../util';
import { RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC, NULL, FALSE, TRUE } from '../constant';
export default {
    propTypes: {
        clearable: {
            type: RAW_BOOLEAN
        },
        defaultText: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMERIC, RAW_STRING]
        },
        size: {
            type: RAW_STRING
        },
        type: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        placement: {
            type: RAW_STRING
        },
        multiple: {
            type: RAW_BOOLEAN
        },
        prefix: {
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
            count: 0,
            visible: FALSE,
            hoverIndex: 0,
            selectedIndex: NULL,
            selectedText: NULL,
        };
    },
    watchers: {
        value: function (value) {
            this.fire('optionSelectedChange', { value: value }, TRUE);
            this.fire('change', {
                value: value,
                text: this.get('selectedText'),
                index: this.get('selectedIndex')
            });
        }
    },
    events: {
        selectedOptionChange: function (event) {
            var option = event.target;
            if (!this.get('multiple')) {
                this.set({
                    selectedIndex: option.get('index'),
                    selectedText: option.get('text')
                });
            }
        },
        optionAdd: function () {
            this.increase('count');
        },
        optionRemove: function () {
            this.decrease('count');
        },
        optionSelect: function (event) {
            var me = this;
            var option = event.target;
            var value = option.get('value');
            var text = option.get('text');
            var index = option.get('index');
            if (me.get('multiple')) {
                me.set({
                    value: me.setArrayValue(value, me.get('value')),
                    selectedText: me.setArrayValue(text, me.get('selectedText')),
                    selectedIndex: index,
                    visible: TRUE
                });
            }
            else {
                me.set({
                    value: value,
                    selectedText: text,
                    selectedIndex: index,
                    visible: FALSE
                });
            }
        }
    },
    methods: {
        clear: function () {
            this.set({
                value: NULL,
                selectedText: NULL,
                selectedIndex: NULL
            });
            this.fire('clear.select');
        },
        setArrayValue: function (text, values) {
            values = this.copy(values);
            if (Yox.is.array(values)) {
                var index = values.indexOf(text);
                if (index >= 0) {
                    values.splice(index, 1);
                }
                else {
                    values.push(text);
                }
            }
            else {
                values = [text];
            }
            return values.length ? values : NULL;
        },
        tagClose: function (event, text, index) {
            var me = this;
            this.set({
                value: me.setArrayValue(me.get('value')[index], me.get('value')),
                selectedText: me.setArrayValue(text, me.get('selectedText'))
            });
            event.stop();
        },
        toggleMenu: function () {
            if (this.get('disabled')) {
                return;
            }
            this.toggle('visible');
        },
        decreaseHoverIndex: function () {
            var hoverIndex = this.get('hoverIndex');
            hoverIndex = hoverIndex <= 0 ? (this.get('count') - 1) : hoverIndex - 1;
            this.set({
                hoverIndex: hoverIndex
            });
            this.fire('optionHoveredChange', {
                index: hoverIndex
            }, TRUE);
        },
        increaseHoverIndex: function () {
            var hoverIndex = this.get('hoverIndex');
            hoverIndex = hoverIndex >= (this.get('count') - 1) ? 0 : hoverIndex + 1;
            this.set({
                hoverIndex: hoverIndex
            });
            this.fire('optionHoveredChange', {
                index: hoverIndex
            }, TRUE);
        },
        selectOption: function () {
            this.fire('optionHoveredChange', {
                index: this.get('hoverIndex'),
                selected: TRUE
            }, TRUE);
        }
    },
    afterMount: function () {
        var me = this;
        if (me.get('value') != NULL
            && me.get('selectedText') == NULL
            && me.get('selectedIndex') == NULL) {
            me.fire('optionSelectedChange', {
                value: me.get('value')
            }, TRUE);
        }
        me.documentClickHandler = function (e) {
            if (!me.get('visible')) {
                return;
            }
            var element = me.$el;
            var target = e.originalEvent.target;
            if (contains(element, target)) {
                return;
            }
            me.set({
                visible: FALSE
            });
        };
        me.documentKeydownHander = function (e) {
            if (!me.get('visible')) {
                return;
            }
            switch (e.originalEvent.keyCode) {
                case 40:
                    e.prevent();
                    me.increaseHoverIndex();
                    break;
                case 38:
                    e.prevent();
                    me.decreaseHoverIndex();
                    break;
                case 13:
                    me.selectOption();
                    break;
            }
        };
        Yox.dom.on(document, 'click', me.documentClickHandler);
        Yox.dom.on(document, 'keydown', me.documentKeydownHander);
    },
    beforeDestroy: function () {
        var me = this;
        Yox.dom.off(document, 'click', me.documentClickHandler);
        Yox.dom.off(document, 'keydown', me.documentKeydownHander);
    }
};
//# sourceMappingURL=Select.js.map