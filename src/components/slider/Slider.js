const SLIDER_TOOLTIP_MARGIN_TOP = 56;
const SLIDER_TOOLTIP_MARGIN_LEFT = 30;
const SLIDER_TOOLTIP_THUMB_WIDTH = 10;

export default {
    template: `
        <div class="bell-slider
            {{#if className}} {{className}}{{/if}}
            {{#if disabled}} disabled{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if dragging}} dragging{{/if}}
        "{{#if style}} style="{{style}}" {{/if}}
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

            <div class="bell-tooltip
                {{#if dragging}} bell-show{{/if}}
            " style="{{tooltipStyle}}">

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
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
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

    data() {
        return {
            dragging: false
        }
    },

    computed: {
        percent() {
            let me = this;
            let min = me.get('min');
            let max = me.get('max');
            let value = me.get('value');

            let range = max - min;
            let percentNum = range > 0
                ? (value - min) / range * 100
                : 0;

            return percentNum > 100
                ? 100
                : (percentNum < 0 ? 0 : percentNum.toFixed(2));
        },

        fillStyle() {
            let me = this;
            return 'width: ' + me.get('percent') + '%';
        },

        tooltipStyle() {
            let me = this;
            if (!me.$refs) {
                if (me.get('percent')) {
                    return '';
                }
                return '';
            }

            let boundingRect = me.$refs.tooltip.getBoundingClientRect();
            let marginLeft = boundingRect.width / 2;
            marginLeft = !marginLeft
                        ? SLIDER_TOOLTIP_MARGIN_LEFT
                        : marginLeft - (SLIDER_TOOLTIP_THUMB_WIDTH / 2);

            let marginTop = +boundingRect.height;
            marginTop = !marginTop
                        ? SLIDER_TOOLTIP_MARGIN_TOP
                        : marginTop + SLIDER_TOOLTIP_THUMB_WIDTH;

            return 'left: ' + me.get('percent') + '%;'
                + 'margin-left: -' + marginLeft + 'px;'
                + 'top: -' + marginTop + 'px;';
        },

        thumbStyle() {
            let me = this;
            return 'left: ' + me.get('percent') + '%';
        },

        range() {
            let me = this;
            return me.get('max') - me.get('min');
        }
    },

    methods: {

        handleTouchStart(e) {
            let me = this;
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

        handleTouchEnd() {
            let me = this;
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

        handleTouchMove(e) {
            let me = this;
            me.onDragUpdate(e.touches[0]);
        },

        handleDragMouseMove(e) {
            let me = this;
            me.onDragUpdate(e);
        },

        handleMouseDown(e) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(e.originalEvent);

            document.addEventListener('mousemove', me.handleDragMouseMove);
            document.addEventListener('mouseup', me.handleDragMouseEnd);

            e.prevent();
            me.onDragStart(e.originalEvent);
        },

        handleDragMouseEnd(e) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            document.removeEventListener('mousemove', me.handleDragMouseMove);
            document.removeEventListener('mouseup', me.handleDragMouseEnd);
            me.onDragStop(e);
        },

        onDragStart(e) {
            let me = this;
            me.set({
                dragging: 1,
                active: 1
            });
            me.fire('dragStart');
        },

        onDragStop(e) {
            let me = this;
            me.set({
                dragging: 0,
                active: 0
            });

            me.get('onDragStop') && me.get('onDragStop')(e);
        },

        onDragUpdate(e) {
            let me = this;
            if (me.get('dragRunning')) {
                return;
            }
            me.set('dragRunning', 1);

            window.requestAnimationFrame(() => {
                me.set('dragRunning', 0);
                if (!me.get('disabled')) {
                    me.setValue(e);
                }
            });
        },

        handleMouseUp() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('active', 0);
        },

        handleMouseEnter() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 1);
        },

        handleMouseLeave() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            me.set('hover', 0);
        },

        setValue(e) {
            let me = this;
            let element = me.$el;
            let oldValue = me.get('value');
            let elementLeft = element.getBoundingClientRect().left;
            let elementWidth = element.offsetWidth;
            let step = me.get('step');
            let range = me.get('range');
            let max = me.get('max');
            let min = me.get('min');

            let value = 0;
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

    afterMount() {
        let me = this;

        me.handleDragMouseMove = me.handleDragMouseMove.bind(me);
        me.handleDragMouseEnd = me.handleDragMouseEnd.bind(me);
        me.handleTouchMove = me.handleTouchMove.bind(me);
        me.handleTouchEnd = me.handleTouchEnd.bind(me);
    }
};