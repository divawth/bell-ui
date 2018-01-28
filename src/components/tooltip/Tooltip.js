let timer;
export default {
    template: `
        <div class="bell-tooltip
        {{#if isShow}} bell-show{{/if}}
        {{#if isHover}} bell-hover{{/if}}
        ">
            <div class="bell-tooltip-el"
            on-mouseover="hover()"
            on-mouseleave="leave()"
            on-click="click()">
                {{$children}}
            </div>

            <div class="bell-tooltip-popper
            {{#if disabled}} bell-tooltip-disabled{{/if}}"
            data-placement="{{placement ? placement : 'bottom'}}">
                <div class="bell-tooltip-arrow"></div>
                <div class="bell-tooltip-inner"
                style="{{#if maxWidth}} max-width: {{maxWidth}}px{{/if}};
                {{#if maxHeight}} max-height: {{maxHeight}}px{{/if}};
                ">
                    {{content}}
                </div>
            </div>
        </div>
    `,
    propTypes: {
        content: {
            type: 'string'
        },
        placement: {
            type: 'string'
        },
        disabled: {
            type: ['string', 'boolean']
        },
        delay: {
            type: ['number', 'string']
        },
        mode: {
            type: 'string'
        },
        maxWidth: {
            type: 'numeric'
        },
        maxHeight: {
            type: 'numeric'
        },
        offsetX: {
            type: 'numeric'
        },
        offsetY: {
            type: 'numeric'
        }
    },

    events: {
        hasTooltipItem: function (event, data) {
            var me = this;
            var element = me.$el.getElementsByClassName('bell-tooltip-el')[0];
            var content = element.getElementsByClassName('bell-tooltip-inner-content');
            var inner = me.$el.getElementsByClassName('bell-tooltip-inner')[0];
            if (content.length) {
                for(var i = 0; i < content.length; i++) {
                    inner.appendChild(content[i]);
                }
            }
        }
    },

    data: function () {
        return {
            isShow: false,
            isHover: false,
        }
    },

    watchers: {
        disabled: function (disabled) {
            this.setPos();
        }
    },

    methods: {
        setPos: function () {
            var me = this;
            var offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
            var offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;

            var poperElement = me.$el.getElementsByClassName('bell-tooltip-popper')[0];
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
                me.setPos();
                timer = setTimeout(
                    function () {
                        if (me.get('isHover')) {
                            me.set({
                                isShow: true
                            });
                        }
                    },
                    delay
                );
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
                me.setPos();
            });
        }
    },

    beforeDestroy: function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
}