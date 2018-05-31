let timer;

export default {

    template: `
        <div class="bell-tooltip
            {{#if className}} {{className}}{{/if}}
            {{#if isShow}} bell-show{{/if}}
            {{#if isHover}} bell-hover{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>
            <div class="bell-tooltip-el"
                on-mouseover="hover()"
                on-mouseleave="leave()"
                on-click="click()"
            >
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            </div>

            <div class="bell-tooltip-popper
                {{#if disabled}} bell-tooltip-disabled{{/if}}"
                data-placement="{{placement ? placement : 'bottom'}}"
            >
                <div class="bell-tooltip-arrow"></div>
                <div class="bell-tooltip-inner"
                style="{{#if maxWidth}}max-width: {{maxWidth}}px{{/if}};
                    {{#if maxHeight}} max-height: {{maxHeight}}px{{/if}};
                ">
                    {{content}}
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
            type: 'numeric'
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
        hasTooltipItem(event, data) {
            let me = this;
            let element = me.$el.getElementsByClassName('bell-tooltip-el')[0];
            let content = element.getElementsByClassName('bell-tooltip-inner-content');
            let inner = me.$el.getElementsByClassName('bell-tooltip-inner')[0];
            if (content.length) {
                for(let i = 0; i < content.length; i++) {
                    inner.appendChild(content[i]);
                }
            }
        }
    },

    data() {
        return {
            isShow: false,
            isHover: false,
        }
    },

    watchers: {
        disabled(disabled) {
            this.setPos();
        }
    },

    methods: {
        setPos() {
            let me = this;
            let offsetX = me.get('offsetX') ? +me.get('offsetX') : 0;
            let offsetY = me.get('offsetY') ? +me.get('offsetY') : 0;

            let poperElement = me.$el.getElementsByClassName('bell-tooltip-popper')[0];
            let placement = me.get('placement') || 'bottom';
            let poperElementWidth = poperElement.clientWidth;
            let poperElementHeight = poperElement.clientHeight;

            let marginLeft = 0;
            let marginTop = 0;

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

        leave() {
            let me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }

            me.set({
                isShow: false,
                isHover: false
            });
        },

        hover() {
            let me = this;
            if (me.get('mode') && me.get('mode') == 'click') {
                return;
            }
            let delay = me.get('delay') ? +me.get('delay') : 0;
            me.set({
                isHover: true
            });
            Yox.nextTick(() => {
                me.setPos();
                timer = setTimeout(
                    () => {
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

        click() {
            let me = this;
            if (!me.get('mode') || me.get('mode') == 'hover') {
                return;
            }

            me.set({
                isShow: !me.get('isShow')
            });

            Yox.nextTick(() => {
                me.setPos();
            });
        }
    },

    beforeDestroy() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
};