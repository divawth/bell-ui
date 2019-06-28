import Yox from 'yox';
import template from './template/Drawer.hbs';
import { TRUE, FALSE, RAW_STRING, RAW_BOOLEAN, } from '../constant';
import { onTransitionEnd, } from '../util';
var CLASS_OPEN = '${prefix}drawer-open';
var CLASS_LEAVE = '${prefix}drawer-leave';
export default Yox.define({
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
            var me = this, element = this.$el;
            if (isOpen) {
                Yox.dom.addClass(element, CLASS_OPEN);
                onTransitionEnd(element, function () {
                    me.fire('open.drawer');
                });
            }
            else {
                Yox.dom.addClass(element, CLASS_LEAVE);
                onTransitionEnd(element, function () {
                    Yox.dom.removeClass(element, CLASS_OPEN);
                    Yox.dom.removeClass(element, CLASS_LEAVE);
                    me.fire('close.drawer');
                });
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
//# sourceMappingURL=Drawer.js.map