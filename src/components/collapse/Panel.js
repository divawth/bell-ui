let closeTimer, initTimer, openTimer;

export default {
    template: `
        <div class="bell-panel
            {{#if className}} {{className}}{{/if}}
            {{#if isOpen}} bell-panel-open{{/if}}
        "{{#if style}} {{style}}{{/if}}>
            <div class="bell-panel-el
                {{#if arrowOpen}} bell-panel-el-open{{/if}}"
                on-click="click()"
            >
                <Icon type="arrow-down-b" className="bell-panel-el-icon"></Icon>
                {{title}}
            </div>

            <div ref="panelInner" class="bell-panel-inner">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
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
        title: {
            type: 'string'
        },
        name: {
            type: 'numeric'
        }
    },

    data() {
        return {
            isOpen: false,
            arrowOpen: false,
            accordion: false,
        }
    },

    events: {
        panelAccordion(event, data) {
            var accordion = data.accordion;
            this.set({
                accordion
            });
        },

        panelActiveName(event, data) {
            let me = this;
            if (data.name === me.get('name')) {
                me.toggleStatus(true);
            }
            else if (me.get('accordion')) {
                me.toggleStatus(false);
            }
        }
    },

    methods: {

        toggleStatus(isOpen) {
            let me = this;
            let arrowOpen = me.get('arrowOpen');
            if (isOpen == arrowOpen) {
                return;
            }
            if (isOpen) {
                me.open();

                if (me.get('accordion')) {
                    me.fire(
                        'panelOpen',
                        {
                            name: me.get('name')
                        }
                    );
                }
            }
            else {
                me.close();
            }

            me.set({
                arrowOpen: isOpen
            });
        },

        click() {
            let me = this;
            let isOpen = !me.get('isOpen');
            me.toggleStatus(isOpen);
        },

        close() {
            let me = this;
            let innerElement = me.$refs.panelInner;
            innerElement.style.height = innerElement.clientHeight + 'px';

            closeTimer = setTimeout(
                () => {
                    innerElement.style.height = 0;
                    initTimer = setTimeout(
                        () => {
                            me.set({
                                isOpen: false
                            });
                            innerElement.style.height = '';
                        },
                        100
                    );
                }
            );
        },

        open() {
            let me = this;
            let innerElement = me.$refs.panelInner;
            me.set({
                isOpen: true
            });

            Yox.nextTick(() => {
                let height = innerElement.clientHeight;
                innerElement.style.height = 0;

                openTimer = setTimeout(
                    () => {
                        innerElement.style.height = height + 'px';
                        initTimer = setTimeout(
                            () => {
                                innerElement.style.height = '';
                            },
                            100
                        );
                    }
                );
            });
        }
    },
    beforeDestroy() {
        let me = this;
        closeTimer = null;
        initTimer = null;
        openTimer = null;
        clearTimeout(closeTimer);
        clearTimeout(initTimer);
        clearTimeout(openTimer);
    }
};
