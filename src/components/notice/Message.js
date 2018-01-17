let id = 0;
let createMessage = function (data) {
    var namespace = 'bell-message-' + id++;
    var body = document.body;
    var element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    new Yox({
        el: '#' + namespace,
        replace: true,
        template: `
<div class="bell-message bell-message-{{type}}
{{#if isShow}} bell-show{{/if}}
" style="margin-left: -{{marginLeft / 2}}px">
    <Alert type="{{type}}" showIcon="{{showIcon}}" closable="{{closable}}" close="{{close}}">
        {{content}}
    </Alert>
</div>`,
        data: function () {
            var me = this;
            return {
                marginLeft: 0,
                content: data.content,
                type: data.type,
                showIcon: data.showIcon,
                closable: data.closable,
                isShow: false,
                close: function () {
                    element.remove();
                    if (Yox.is.func(data.onClose)) {
                        data.onClose();
                    }
                }
            }
        },
        afterMount: function () {
            var me = this;

            var fadeIn = 300;
            var fadeOut = 500;
            var showTime = data.duration || 1500;
            me.set({
                marginLeft: me.$el.clientWidth
            });

            me.fadeInFuc = setTimeout(
                function () {
                    // 展示时间
                    me.set({
                        isShow: true
                    });
                    me.showTimeFuc = setTimeout(
                        function () {
                            // 淡出
                            me.set({
                                isShow: false
                            });
                            me.fadeOutFuc = setTimeout(
                                function () {

                                    element.remove();
                                    if (Yox.is.func(data.onClose)) {
                                        data.onClose();
                                    }

                                },
                                fadeOut
                            );
                        },
                        showTime
                    );
                },
                fadeIn
            );
        },

        beforeDestroy: function () {
            var me = this;
            clearTimeout(me.fadeInFuc);
            clearTimeout(me.showTimeFuc);
            clearTimeout(me.fadeOutFuc);
        }
    });
};

export let add = function (data) {
    createMessage(data);
}
