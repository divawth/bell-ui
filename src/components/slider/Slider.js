var SLIDER_TOOLTIP_MARGIN_TOP = 56;
var SLIDER_TOOLTIP_MARGIN_LEFT = 30;
var SLIDER_TOOLTIP_THUMB_WIDTH = 10;

export default {
    template: `
        <div class="bell-slider
            {{#if disabled}} disabled{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if dragging}} dragging{{/if}}
            "
            on-blur="handleBlur($event)"
            on-focus="handleFocus($event)"
            on-touchstart="handleTouchStart($event)"
            on-touchend="handleTouchEnd($event)"
            on-touchcancel="handleTouchEnd($event)"
            on-mousedown="handleMouseDown($event)"
            on-mouseup="handleMouseUp($event)"
            on-mouseenter="handleMouseEnter($event)"
            on-mouseleave="handleMouseLeave($event)"
        >

            <input type="hidden" disabled="{{disabled ? ' disabled' : ''}}" model="value">

            <div class="bell-slider-bg"></div>

            <div class="bell-slider-fill"
                style="{{fillStyle}}"
            ></div>

            <div class="bell-slider-thumb"
                style="{{thumbStyle}}"
                title="值：{{value}}；占比：{{percent + '%'}}"
            >
            </div>

            <div class="bell-tooltip{{#if dragging}} bell-show{{/if}}"
                style="{{tooltipStyle}}"
            >
                <div ref="tooltip" class="bell-tooltip-popper" data-placement="top">
                    <div class="bell-tooltip-arrow"></div>
                    <div class="bell-tooltip-inner">
                        {{percent}}%
                    </div>
                </div>
            </div>
        </div>
    `,
    propTypes: {
        value: {
            type: ['number', 'array'],
            value: 40
        },
        // 最大值
        max: {
            type: 'number',
            value: 100
        },
        // 最小值
        min: {
            type: 'number',
            value: 0
        },
        // 最小步数
        step: {
            type: 'number',
            value: 1
        },
        disabled: {
            type: 'boolean',
            value: false
        },
        range: {
            type: 'boolean',
            value: false
        },

        type: {
            type: 'string'
        },
        onDragStart: {
            type: 'function'
        },
        onDragStop: {
            type: 'function'
        },
        onChange: {
            type: 'function'
        }
    },
    data: function () {
        return {
            dragging: false
        }
    },

    computed: {
        percent: function () {
            var me = this;
            var min = me.get('min');
            var max = me.get('max');
            var value = me.get('value');

            var range = max - min;
            var percentNum = range > 0
                ? (value - min) / range * 100
                : 0;

            return percentNum > 100
                ? 100
                : (percentNum < 0 ? 0 : percentNum.toFixed(2));
        },
        fillStyle: function () {
            var me = this;
            return 'width: ' + me.get('percent') + '%';
        },

        tooltipStyle: function () {
            var me = this;
            if (!me.$refs) {
                if (me.get('percent')) {
                    return '';
                }
                return '';
            }

            var boundingRect = me.$refs.tooltip.getBoundingClientRect();
            var marginLeft = boundingRect.width / 2;
            marginLeft = !marginLeft
                        ? SLIDER_TOOLTIP_MARGIN_LEFT
                        : marginLeft - (SLIDER_TOOLTIP_THUMB_WIDTH / 2);

            var marginTop = +boundingRect.height;
            marginTop = !marginTop
                        ? SLIDER_TOOLTIP_MARGIN_TOP
                        : marginTop + SLIDER_TOOLTIP_THUMB_WIDTH;

            return 'left: ' + me.get('percent') + '%;'
                + 'margin-left: -' + marginLeft + 'px;'
                + 'top: -' + marginTop + 'px;';
        },

        thumbStyle: function () {
            var me = this;
            return 'left: ' + me.get('percent') + '%';
        },

        range: function () {
            var me = this;
            return me.get('max') - me.get('min');
        }
    },

    methods: {

        handleTouchStart: function (e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(e.touches[0]);

            document.addEventListener(
                'touchmove',
                me.handleTouchMove
            );
            document.addEventListener(
                'touchup',
                me.handleTouchEnd
            );
            document.addEventListener(
                'touchend',
                me.handleTouchEnd
            );
            document.addEventListener(
                'touchcancel',
                me.handleTouchEnd
            );

            e.preventDefault();
            me.onDragStart(e);
        },

        handleTouchEnd: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            document.removeEventListener(
                'touchmove',
                me.handleTouchMove
            );
            document.removeEventListener(
                'touchup',
                me.handleTouchEnd
            );
            document.removeEventListener(
                'touchend',
                me.handleTouchEnd
            );
            document.removeEventListener(
                'touchcancel',
                me.handleTouchEnd
            );
            me.onDragStop(e);
        },

        handleTouchMove: function (e) {
            var me = this;
            me.onDragUpdate(e.touches[0]);
        },

        handleDragMouseMove: function (e) {
            var me = this;
            me.onDragUpdate(e);
        },

        handleMouseDown: function (e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(e.originalEvent);

            document.addEventListener('mousemove', me.handleDragMouseMove);
            document.addEventListener('mouseup', me.handleDragMouseEnd);

            e.prevent();
            me.onDragStart(e.originalEvent);
        },

        handleDragMouseEnd: function (e) {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            document.removeEventListener('mousemove', me.handleDragMouseMove);
            document.removeEventListener('mouseup', me.handleDragMouseEnd);
            me.onDragStop(e);
        },

        onDragStart: function (e) {
            var me = this;
            me.set({
                dragging: 1,
                active: 1
            });

            me.get('onDragStart') && me.get('onDragStart')(e);
        },

        onDragStop: function (e) {
            var me = this;
            me.set({
                dragging: 0,
                active: 0
            });

            me.get('onDragStop') && me.get('onDragStop')(e);
        },

        onDragUpdate: function (e) {
            var me = this;
            if (me.get('dragRunning')) {
                return;
            }
            me.set('dragRunning', 1);

            window.requestAnimationFrame(function () {
                me.set('dragRunning', 0);
                if (!me.get('disabled')) {
                    me.setValue(e);
                }
            });
        },

        handleMouseUp: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('active', 0);
        },

        handleMouseEnter: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 1);
        },

        handleMouseLeave: function () {
            var me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 0);
        },
        setValue: function (e) {
            var me = this;
            var element = me.$el;
            var oldValue = me.get('value');
            var elementLeft = element.getBoundingClientRect().left;
            var elementWidth = element.offsetWidth;
            var step = me.get('step');
            var range = me.get('range');
            var max = me.get('max');
            var min = me.get('min');

            var value = 0;
            value = elementWidth && ((e.clientX - elementLeft) / elementWidth * range);
            value = Math.round( value / step) * step + min;
            value = parseFloat(value.toFixed(5));

            value = value > max
                    ? max
                    : (value < min ? min : value);

            if (value !== oldValue) {
                me.set({
                    value: value
                });
                me.get('onChange') && me.get('onChange')(value, oldValue);
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
};