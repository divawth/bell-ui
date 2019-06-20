import Yox from 'yox';
import template from './template/BackTop.html';
import { FALSE, RAW_STRING, RAW_NUMERIC, } from '../constant';
import { scrollTop, } from '../util';
export default {
    propTypes: {
        bottom: {
            type: RAW_NUMERIC,
            value: 30
        },
        right: {
            type: RAW_NUMERIC,
            value: 30
        },
        height: {
            type: RAW_NUMERIC
        },
        duration: {
            type: RAW_NUMERIC,
            value: 1000
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
            isShow: FALSE
        };
    },
    events: {
        click: function () {
            var me = this, parentElement = me.$parent.$el;
            scrollTop(parentElement, parentElement.scrollTop, 0, me.get('duration'));
        }
    },
    afterMount: function () {
        var me = this, parentElement = me.$parent.$el, onRefresh = function () {
            me.set({
                isShow: parentElement.scrollTop >= (me.get('height') || parentElement.clientHeight)
            });
        };
        Yox.dom.on(parentElement, 'scroll', onRefresh);
        Yox.dom.on(document, 'resize', onRefresh);
        me.once('beforeDestroy.hook', function () {
            Yox.dom.off(parentElement, 'scroll', onRefresh);
            Yox.dom.off(document, 'resize', onRefresh);
        });
    }
};
//# sourceMappingURL=BackTop.js.map