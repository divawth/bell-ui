let id = 0;

let createMessage = function (data) {
    let namespace = 'bell-message-' + id++;
    let body = document.body;
    let element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    let instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: `
<div class="bell-message bell-message-{{type}}
{{#if isShow}} bell-show{{/if}}
" style="margin-left: -{{marginLeft / 2}}px;
{{#if top}} top: {{top}}px;{{/if}}">
    <Alert type="{{type}}" closeText="{{closeText}}" center="{{center}}" showIcon="{{showIcon}}" closable="{{closable}}" close="{{close}}">
        {{content}}
    </Alert>
</div>`,
        data: function () {
            let me = this;
            return {
                marginLeft: 0,
                top: 0,
                content: data.content,
                type: data.type,
                showIcon: data.showIcon,
                closable: data.closable,
                closeText: data.closeText,
                center: data.center,
                isShow: false,
                close: function () {
                    element.remove();
                    if (Yox.is.func(data.onClose)) {
                        data.onClose();
                    }
                }
            }
        },

        methods: {
            fadeIn: function () {
                let me = this;
                me.fadeInFuc = setTimeout(
                    function () {
                        me.set({
                            isShow: true,
                            top: me.top
                        });
                        me.fadeOut();
                    },
                    me.fadeInTime
                );
            },
            fadeOut: function () {
                let me = this;
                me.showTimeFuc = setTimeout(
                    function () {
                        me.set({
                            isShow: false,
                            top: 0
                        });

                        me.fadeOutFuc = setTimeout(
                            function () {
                                element.remove();
                                if (Yox.is.func(data.onClose)) {
                                    data.onClose();
                                }
                                if (instance) {
                                    instance.destroy();
                                }
                            },
                            me.fadeOutTime
                        );
                    },
                    me.showTime
                );
            }
        },

        afterMount: function () {
            let me = this;

            me.fadeInTime = 300;
            me.fadeOutTime = 300;
            me.showTime = data.duration || 1500;
            me.top = data.top || 15;

            me.set({
                marginLeft: me.$el.clientWidth
            });

            me.fadeIn();

        },

        beforeDestroy: function () {
            let me = this;
            clearTimeout(me.fadeInFuc);
            clearTimeout(me.showTimeFuc);
            clearTimeout(me.fadeOutFuc);
        }
    });
};

export let add = function (data) {
    createMessage(data);
}