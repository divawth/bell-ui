import Yox from 'yox';
import template from './template/Tooltip.html';
import { FALSE, RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN, } from '../constant';
var timer;
export default Yox.create({
    propTypes: {
        content: {
            type: RAW_STRING
        },
        placement: {
            type: RAW_STRING
        },
        disabled: {
            type: RAW_BOOLEAN
        },
        delay: {
            type: RAW_NUMERIC
        },
        mode: {
            type: RAW_STRING
        },
        maxWidth: {
            type: RAW_NUMERIC
        },
        maxHeight: {
            type: RAW_NUMERIC
        },
        offsetX: {
            type: RAW_NUMERIC
        },
        offsetY: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    events: {
        'hasItem.tootipItem': function () {
            var content = this.$refs.contents.getElementsByClassName('${prefix}tooltip-inner-content');
            if (content.length) {
                for (var i = 0; i < content.length; i++) {
                    Yox.dom.append(this.$refs.innerElement, content[i]);
                }
            }
        }
    },
    data: function () {
        return {
            isShow: FALSE,
            isHover: FALSE
        };
    },
    watchers: {
        disabled: function () {
            this.setPosition();
        }
    },
    methods: {
        setPosition: function () {
            var me = this;
            var offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
            var offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;
            var poperElement = this.$refs.poperElement;
            var placement = me.get('placement') || 'bottom';
            var poperElementWidth = poperElement.clientWidth;
            var poperElementHeight = poperElement.clientHeight;
            var marginLeft = 0;
            var marginTop = 0;
            if (placement == 'bottom') {
                marginLeft = -(poperElementWidth / 2);
            }
            else if (placement == 'bottom-start') {
                marginLeft = 0;
            }
            else if (placement == 'bottom-end') {
                marginLeft = 0;
            }
            else if (placement == 'top') {
                marginLeft = -(poperElementWidth / 2);
                marginTop = -poperElementHeight;
            }
            else if (placement == 'top-start') {
                marginTop = -poperElementHeight;
            }
            else if (placement == 'top-end') {
                marginTop = -poperElementHeight;
            }
            else if (placement == 'left') {
                marginLeft = -poperElementWidth;
                marginTop = -(poperElementHeight / 2);
            }
            else if (placement == 'left-start') {
                marginLeft = -poperElementWidth;
            }
            else if (placement == 'left-end') {
                marginLeft = -poperElementWidth;
            }
            else if (placement == 'right') {
                marginTop = -(poperElementHeight / 2);
            }
            if (Yox.is.number(offsetX)) {
                marginLeft += offsetX;
            }
            if (Yox.is.number(offsetY)) {
                marginTop += offsetY;
            }
            poperElement.style.marginLeft = marginLeft + 'px';
            poperElement.style.marginTop = marginTop + 'px';
        },
        leave: function () {
            var me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            me.set({
                isShow: false,
                isHover: false
            });
        },
        hover: function () {
            var me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            var delay = me.get('delay') ? +me.get('delay') : 0;
            me.set({
                isHover: true
            });
            Yox.nextTick(function () {
                me.setPosition();
                timer = setTimeout(function () {
                    if (me.get('isHover')) {
                        me.set({
                            isShow: true
                        });
                    }
                }, delay);
            });
        },
        click: function () {
            var me = this;
            if (!me.get('mode') || me.get('mode') == 'hover') {
                return;
            }
            me.set({
                isShow: !me.get('isShow')
            });
            Yox.nextTick(function () {
                me.setPosition();
            });
        }
    },
    beforeDestroy: function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
});
//# sourceMappingURL=Tooltip.js.map