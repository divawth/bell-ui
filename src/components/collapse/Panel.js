export default {
    template: `
        <div class="bell-panel
        {{#if className}} {{className}}{{/if}}
        {{#if isOpen}} bell-panel-open{{/if}}
        {{#if isOpening}} bell-panel-isOpening{{/if}}
        ">
            <div class="bell-panel-el" on-click="click()">
                <i class="bell-panel-el-icon bell-icon bell-icon-ios-arrow-right"></i>
                {{title}}
            </div>
            <div ref="panelInner" class="bell-panel-inner">
                {{$children}}
            </div>
        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        title: {
            type: 'string'
        }
    },
    data: function () {
        return {
            isOpening: false,
            isOpen: false
        }
    },
    events: {
        panelOpen: function () {
            console.log(this);
        }
    },
    methods: {
        click: function () {
            var me = this;
            var isOpen = !me.get('isOpen');
            if (isOpen) {
                me.open();
            }
            else {
                me.close();
            }
        },
        close: function () {
            var me = this;
            var innerElement = me.$refs.panelInner;
            innerElement.style.height = innerElement.clientHeight + 'px';
            setTimeout(function () {
                innerElement.style.height = 0;
                setTimeout(function () {
                    me.set({
                        isOpen: false
                    });
                    innerElement.style.height = '';
                }, 100);
            }, 300);
        },
        open: function () {
            var me = this;
            var innerElement = me.$refs.panelInner;
            me.set({
                isOpen: true
            });

            Yox.nextTick(function () {
                var height = innerElement.clientHeight;
                innerElement.style.height = 0;

                setTimeout(function () {
                    innerElement.style.height = height + 'px';
                    setTimeout(function () {
                        innerElement.style.height = '';
                    }, 100);
                }, 100);
            });
        }
    }
}