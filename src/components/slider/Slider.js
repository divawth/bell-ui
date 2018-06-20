const SLIDER_TOOLTIP_MARGIN_TOP = 68;
const SLIDER_TOOLTIP_MARGIN_LEFT = 29;
const SLIDER_TOOLTIP_THUMB_WIDTH = 10;

export default {
    template: `
        <div class="bell-slider
            {{#if className}} {{className}}{{/if}}
            {{#if disabled}} bell-slider-disabled{{/if}}
            {{#if type}} bell-slider-{{type}}{{/if}}
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

            <div class="bell-slider-bg">
                <div class="bell-slider-fill"
                    style="{{fillStyle}}"
                ></div>

                <div class="bell-slider-thumb"
                    style="{{thumbStyle}}"
                    title="值：{{value}}；占比：{{percent + '%'}}"
                >
                </div>
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
            let range = me.get('max') - me.get('min');
            let percentNum = range > 0
                ? (me.get('value') - me.get('min')) / range * 100
                : 0;

            return percentNum > 100
                ? 100
                : (percentNum < 0 ? 0 : percentNum.toFixed(2));
        },

        fillStyle() {
            return 'width: ' + this.get('percent') + '%';
        },

        tooltipStyle() {
            let me = this;
            if (!me.$refs) {
                if (me.get('percent')) {
                    return '';
                }
                return '';
            }

            return 'left: ' + me.get('percent') + '%;'
                + 'margin-left: -' + SLIDER_TOOLTIP_MARGIN_LEFT + 'px;'
                + 'top: -' + SLIDER_TOOLTIP_MARGIN_TOP + 'px;';
        },

        thumbStyle() {
            return 'left: ' + this.get('percent') + '%';
        },

        range() {
            return this.get('max') - this.get('min');
        }
    },

    methods: {

        handleTouchStart(event) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(event);

            Yox.dom.on(
                document,
                'touchmove',
                me.handleTouchMove
            );
            Yox.dom.on(
                document,
                'touchup',
                me.handleTouchEnd
            );
            Yox.dom.on(
                document,
                'touchend',
                me.handleTouchEnd
            );
            Yox.dom.on(
                document,
                'touchcancel',
                me.handleTouchEnd
            );

            event.prevent();
            me.onDragStart(event);
        },

        handleTouchEnd(event) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            Yox.dom.off(
                document,
                'touchmove',
                me.handleTouchMove
            );
            Yox.dom.off(
                document,
                'touchup',
                me.handleTouchEnd
            );
            Yox.dom.off(
                document,
                'touchend',
                me.handleTouchEnd
            );
            Yox.dom.off(
                document,
                'touchcancel',
                me.handleTouchEnd
            );
            event.prevent();
            me.onDragStop(event);
        },

        handleTouchMove(event) {
            this.onDragUpdate(event);
        },

        handleDragMouseMove(event) {
            this.onDragUpdate(event);
        },

        handleMouseDown(event) {
            let me = this;
            if (me.get('disabled')) {
                return;
            }

            me.setValue(event);

            Yox.dom.on(
                document,
                'mousemove',
                me.handleDragMouseMove
            );
            Yox.dom.on(
                document,
                'mouseup',
                me.handleDragMouseEnd
            );

            event.prevent();
            me.onDragStart();
        },

        handleDragMouseEnd() {
            let me = this;
            if (me.get('disabled')) {
                return;
            }
            Yox.dom.off(
                document,
                'mousemove',
                me.handleDragMouseMove
            );
            Yox.dom.off(
                document,
                'mouseup',
                me.handleDragMouseEnd
            );
            me.onDragStop();
        },

        onDragStart() {
            this.set({
                dragging: 1,
                active: 1
            });
            this.fire('dragStart');
        },

        onDragStop() {
            this.set({
                dragging: 0,
                active: 0
            });
            this.fire('dragStop');
        },

        onDragUpdate(event) {
            let me = this;
            if (me.get('draging')) {
                return;
            }
            me.set('draging', 1);

            window.requestAnimationFrame(() => {
                me.set('draging', 0);
                if (!me.get('disabled')) {
                    me.setValue(event);
                }
            });
        },

        handleMouseUp() {
            if (this.get('disabled')) {
                return;
            }
            this.set('active', 0);
        },

        handleMouseEnter() {
            if (this.get('disabled')) {
                return;
            }
            this.set('hover', 1);
        },

        handleMouseLeave() {
            if (this.get('disabled')) {
                return;
            }
            this.set('hover', 0);
        },

        setValue(event) {

            event = event.originalEvent;
            let clientX = event.touches ? event.touches[0].clientX : event.clientX;

            let me = this;
            let element = me.$el;
            let oldValue = me.get('value');
            let elementLeft = element.getBoundingClientRect().left;
            let elementWidth = element.offsetWidth;
            let min = me.get('min');

            let value = 0;
            value = elementWidth && ((clientX - elementLeft) / elementWidth * me.get('range'));
            value = Math.round( value / me.get('step')) * me.get('step') + min;
            value = parseFloat(value.toFixed(5));

            value = value > me.get('max')
                    ? me.get('max')
                    : (value < min ? min : value);

            if (value !== oldValue) {
                me.set({
                    value: value
                });
                me.fire(
                    'change',
                    {
                        value: value,
                        oldValue: oldValue
                    }
                );
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