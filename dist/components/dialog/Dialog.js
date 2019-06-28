import Yox from 'yox';
import template from './template/Dialog.hbs';
import { TRUE, FALSE, RAW_STRING, RAW_BOOLEAN, } from '../constant';
import { onTransitionEnd, } from '../util';
var CLASS_OPEN = '${prefix}dialog-open';
var CLASS_LEAVE = '${prefix}dialog-leave';
export default Yox.define({
    propTypes: {
        title: {
            type: RAW_STRING,
            value: '温馨提示'
        },
        open: {
            type: RAW_BOOLEAN
        },
        closable: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    model: 'open',
    watchers: {
        open: function (isOpen) {
            var element = this.$el;
            if (isOpen) {
                Yox.dom.addClass(element, CLASS_OPEN);
            }
            else {
                Yox.dom.addClass(element, CLASS_LEAVE);
                onTransitionEnd(element, function () {
                    Yox.dom.removeClass(element, CLASS_OPEN);
                    Yox.dom.removeClass(element, CLASS_LEAVE);
                });
            }
        }
    },
    methods: {
        close: function () {
            this.set('open', FALSE);
        }
    },
    afterMount: function () {
        Yox.dom.append(document.body, this.$el);
    },
    beforeDestroy: function () {
        Yox.dom.remove(document.body, this.$el);
    }
});
//# sourceMappingURL=Dialog.js.map