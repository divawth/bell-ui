import Yox from 'yox';
import template from './template/Slider.hbs';
import { requestAnimationFrame } from '../util';
import { TRUE, FALSE, RAW_ARRAY, RAW_NUMBER, RAW_STRING, RAW_BOOLEAN, } from '../constant';
export default Yox.create({
    propTypes: {
        type: {
            type: RAW_STRING
        },
        value: {
            type: [RAW_NUMBER, RAW_ARRAY],
            value: 40
        },
        max: {
            type: RAW_NUMBER,
            value: 100
        },
        min: {
            type: RAW_NUMBER,
            value: 0
        },
        step: {
            type: RAW_NUMBER,
            value: 1
        },
        disabled: {
            type: RAW_BOOLEAN,
            value: FALSE
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
            dragging: FALSE
        };
    },
    computed: {
        percent: function () {
            var range = this.get('max') - this.get('min');
            var percentNum = range > 0
                ? (this.get('value') - this.get('min')) / range * 100
                : 0;
            return percentNum > 100
                ? 100
                : (percentNum < 0 ? 0 : percentNum.toFixed(2));
        }
    },
    methods: {
        handleTouchStart: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.setValue(event);
            Yox.dom.on(document, 'touchmove', me.handleTouchMove);
            Yox.dom.on(document, 'touchup', me.handleTouchEnd);
            Yox.dom.on(document, 'touchend', me.handleTouchEnd);
            Yox.dom.on(document, 'touchcancel', me.handleTouchEnd);
            event.prevent();
            me.onDragStart(event);
        },
        handleTouchEnd: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            Yox.dom.off(document, 'touchmove', me.handleTouchMove);
            Yox.dom.off(document, 'touchup', me.handleTouchEnd);
            Yox.dom.off(document, 'touchend', me.handleTouchEnd);
            Yox.dom.off(document, 'touchcancel', me.handleTouchEnd);
            event.prevent();
            me.onDragStop(event);
        },
        handleTouchMove: function (event) {
            this.onDragUpdate(event);
        },
        handleDragMouseMove: function (event) {
            this.onDragUpdate(event);
        },
        handleMouseDown: function (event) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.setValue(event);
            Yox.dom.on(document, 'mousemove', me.handleDragMouseMove);
            Yox.dom.on(document, 'mouseup', me.handleDragMouseEnd);
            event.prevent();
            me.onDragStart();
        },
        handleDragMouseEnd: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            Yox.dom.off(document, 'mousemove', me.handleDragMouseMove);
            Yox.dom.off(document, 'mouseup', me.handleDragMouseEnd);
            me.onDragStop();
        },
        onDragStart: function () {
            this.set({
                dragging: TRUE
            });
            this.fire('dragStart');
        },
        onDragStop: function () {
            this.set({
                dragging: FALSE
            });
            this.fire('dragStop');
        },
        onDragUpdate: function (event) {
            var me = this;
            if (me.get('draging')) {
                return;
            }
            me.set('draging', TRUE);
            requestAnimationFrame(function () {
                me.set('draging', FALSE);
                if (!me.get('disabled')) {
                    me.setValue(event);
                }
            });
        },
        setValue: function (event) {
            event = event.originalEvent;
            var clientX = event.touches ? event.touches[0].clientX : event.clientX;
            var me = this;
            var element = me.$el;
            var oldValue = me.get('value');
            var elementLeft = element.getBoundingClientRect().left;
            var elementWidth = element.offsetWidth;
            var min = me.get('min');
            var max = me.get('max');
            var range = max - min;
            var value = 0;
            value = elementWidth && ((clientX - elementLeft) / elementWidth * range);
            value = Math.round(value / me.get('step')) * me.get('step') + min;
            value = parseFloat(value.toFixed(5));
            value = value > max
                ? max
                : (value < min ? min : value);
            if (value !== oldValue) {
                me.set({
                    value: value
                });
                me.fire('change.slider', {
                    value: value,
                    oldValue: oldValue
                });
            }
        }
    },
    afterMount: function () {
        var me = this;
        me.handleDragMouseMove = me.handleDragMouseMove.bind(me);
        me.handleDragMouseEnd = me.handleDragMouseEnd.bind(me);
        me.handleTouchMove = me.handleTouchMove.bind(me);
        me.handleTouchEnd = me.handleTouchEnd.bind(me);
    }
});
//# sourceMappingURL=Slider.js.map