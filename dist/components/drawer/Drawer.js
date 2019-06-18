import template from './template/Drawer.html';
import { RAW_STRING, RAW_BOOLEAN, TRUE, FALSE } from '../constant';
export default {
    propTypes: {
        title: {
            type: RAW_STRING
        },
        width: {
            type: RAW_STRING,
            value: 256
        },
        height: {
            type: RAW_STRING,
            value: 256
        },
        maskClosable: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        closable: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        placement: {
            type: RAW_STRING,
            value: 'left'
        },
        mask: {
            type: RAW_BOOLEAN,
            value: TRUE
        },
        open: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    model: 'open',
    template: template,
    watchers: {
        open: function (isOpen) {
            var element = this.$el;
            if (isOpen) {
                Yox.dom.addClass(element, '${prefix}drawer-open');
                this.fire('open.drawer');
            }
            else {
                Yox.dom.addClass(element, '${prefix}drawer-leave');
                setTimeout(function () {
                    Yox.dom.removeClass(element, '${prefix}drawer-open');
                    Yox.dom.removeClass(element, '${prefix}drawer-leave');
                }, 300);
                this.fire('close.drawer');
            }
        }
    },
    computed: {
        contentStyle: function () {
            var style = '';
            if (this.get('placement') === 'left'
                || this.get('placement') === 'right') {
                var width = +this.get('width');
                if (width < 100) {
                    style = "width: " + width + "%;";
                }
                else {
                    style = "width: " + width + "px;";
                }
            }
            else {
                var height = +this.get('height');
                if (height < 100) {
                    style = "height: " + height + "%;";
                }
                else {
                    style = "height: " + height + "px;";
                }
            }
            return style;
        }
    },
    afterMount: function () {
        Yox.dom.append(document.body, this.$el);
    },
    beforeDestroy: function () {
        Yox.dom.remove(document.body, this.$el);
    }
};
//# sourceMappingURL=Drawer.js.map