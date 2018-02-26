let closeTimer, initTimer, openTimer;
export default {
    template: `
        <div class="bell-panel
        {{#if className}} {{className}}{{/if}}
        {{#if isOpen}} bell-panel-open{{/if}}
        ">
            <div class="bell-panel-el
            {{#if arrowOpen}} bell-panel-el-open{{/if}}" on-click="click()">
                <i class="bell-panel-el-icon bell-icon bell-icon-ios-arrow-right"></i>
                {{title}}
            </div>
            <div ref="panelInner" class="bell-panel-inner">
                <slot name="children" />
            </div>
        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        name: {
            type: ['string', 'number']
        }
    },
    data: function () {
        return {
            isOpen: false,
            arrowOpen: false,
            accordion: false,
        }
    },
    events: {
        panelAccordion: function (event, data) {
            this.set({
                accordion: data.accordion
            });
        },
        panelActiveName: function (event, data) {
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
        toggleStatus: function (isOpen) {
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
        click: function () {
            let me = this;
            let isOpen = !me.get('isOpen');
            me.toggleStatus(isOpen);
        },
        close: function () {
            let me = this;
            let innerElement = me.$refs.panelInner;
            innerElement.style.height = innerElement.clientHeight + 'px';

            closeTimer = setTimeout(
                function () {
                    innerElement.style.height = 0;
                    initTimer = setTimeout(
                        function () {
                            me.set({
                                isOpen: false
                            });
                            innerElement.style.height = '';
                        },
                        200
                    );
                },
                100
            );
        },
        open: function () {
            let me = this;
            let innerElement = me.$refs.panelInner;
            me.set({
                isOpen: true
            });

            Yox.nextTick(function () {
                let height = innerElement.clientHeight;
                innerElement.style.height = 0;

                openTimer = setTimeout(
                    function () {
                        innerElement.style.height = height + 'px';
                        initTimer = setTimeout(
                            function () {
                                innerElement.style.height = '';
                            },
                            200
                        );
                    },
                    100
                );
            });
        }
    },
    beforeDestroy: function () {
        let me = this;
        closeTimer = null;
        initTimer = null;
        openTimer = null;
        clearTimeout(closeTimer);
        clearTimeout(initTimer);
        clearTimeout(openTimer);
    }
}