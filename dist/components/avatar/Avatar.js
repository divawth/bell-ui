import Yox from 'yox';
import template from './template/Avatar.hbs';
import { TRUE, RAW_STRING, RAW_NUMERIC, RAW_SIZE_ARRAY, RAW_DEFAULT, RAW_SHAPE_CIRCLE, RAW_SHAPE_ROUND, } from '../constant';
import { oneOf, supportTransform, } from '../util';
var SPACE_HORIZONTAL = 8;
export default Yox.create({
    propTypes: {
        shape: {
            type: oneOf([RAW_SHAPE_CIRCLE, RAW_SHAPE_ROUND]),
            value: RAW_SHAPE_ROUND
        },
        size: {
            type: oneOf(RAW_SIZE_ARRAY),
            value: RAW_DEFAULT
        },
        text: {
            type: RAW_STRING
        },
        src: {
            type: RAW_STRING
        },
        srcset: {
            type: RAW_STRING
        },
        fontSize: {
            type: RAW_NUMERIC
        },
        bgColor: {
            type: RAW_STRING
        },
        color: {
            type: RAW_STRING,
            value: '#FFF'
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
            supportTransform: supportTransform,
        };
    },
    afterMount: function () {
        if (supportTransform) {
            var me_1 = this;
            me_1.watch('text', {
                watcher: function () {
                    me_1.nextTick(function () {
                        var $el = me_1.$el, $refs = me_1.$refs;
                        if (!$el || !$refs) {
                            return;
                        }
                        var textSpan = $refs.textSpan;
                        var scale = textSpan && textSpan.offsetWidth
                            ? ($el.offsetWidth - SPACE_HORIZONTAL) / textSpan.offsetWidth
                            : 1;
                        me_1.set('transform', "scale(" + Math.min(scale, 1) + ") translateX(-50%)");
                    });
                },
                immediate: TRUE
            });
        }
    }
});
//# sourceMappingURL=Avatar.js.map