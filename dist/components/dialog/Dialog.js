import template from './template/Dialog.html';
import { RAW_STRING, RAW_BOOLEAN, TRUE } from '../constant';
export default {
    propTypes: {
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
                Yox.dom.addClass(element, '${prefix}dialog-open');
            }
            else {
                Yox.dom.addClass(element, '${prefix}dialog-leave');
                setTimeout(function () {
                    Yox.dom.removeClass(element, '${prefix}dialog-open');
                    Yox.dom.removeClass(element, '${prefix}dialog-leave');
                }, 300);
            }
        }
    },
    methods: {
        maskClick: function () {
            this.set('open', false);
        },
        close: function () {
            this.set('open', false);
        }
    },
    afterMount: function () {
        Yox.dom.append(document.body, this.$el);
    },
    beforeDestroy: function () {
        Yox.dom.remove(document.body, this.$el);
    }
};
//# sourceMappingURL=Dialog.js.map