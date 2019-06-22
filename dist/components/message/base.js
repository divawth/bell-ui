import Yox from 'yox';
import template from './template/Message.hbs';
import { TRUE, RAW_BOOLEAN, RAW_STRING, FALSE } from '../constant';
var id = 0;
var createMessage = function (data) {
    var namespace = '${prefix}message-' + id++;
    var element = Yox.dom.createElement('div');
    Yox.dom.prop(element, 'id', namespace);
    Yox.dom.append(document.body, element);
    var instance = new Yox({
        el: '#' + namespace,
        replace: TRUE,
        template: template,
        props: {
            content: data.content,
            type: data.type,
            showIcon: data.showIcon,
            closable: data.closable,
            closeText: data.closeText,
            center: data.center
        },
        propTypes: {
            content: {
                type: RAW_STRING
            },
            type: {
                type: RAW_STRING
            },
            showIcon: {
                type: RAW_BOOLEAN,
                value: TRUE
            },
            closable: {
                type: RAW_BOOLEAN
            },
            closeText: {
                type: RAW_STRING
            },
            center: {
                type: RAW_BOOLEAN
            }
        },
        data: function () {
            return {
                marginLeft: 0,
                top: 0,
                isShow: FALSE,
                close: function () {
                    if (instance) {
                        instance.destroy();
                    }
                    if (Yox.is.func(data.onClose)) {
                        data.onClose();
                    }
                }
            };
        },
        methods: {
            fadeIn: function () {
                var me = this;
                me.fadeInFuc = setTimeout(function () {
                    me.set({
                        isShow: true,
                        top: me.top
                    });
                    me.fadeOut();
                }, me.fadeInTime);
            },
            fadeOut: function () {
                var me = this;
                me.showTimeFuc = setTimeout(function () {
                    me.set({
                        isShow: false,
                        top: 0
                    });
                    me.fadeOutFuc = setTimeout(function () {
                        if (instance) {
                            instance.destroy();
                        }
                        if (Yox.is.func(data.onClose)) {
                            data.onClose();
                        }
                    }, me.fadeOutTime);
                }, me.showTime);
            }
        },
        afterMount: function () {
            var me = this;
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
            var me = this;
            clearTimeout(me.fadeInFuc);
            clearTimeout(me.showTimeFuc);
            clearTimeout(me.fadeOutFuc);
        }
    });
};
export var add = function (data) {
    createMessage(data);
};
//# sourceMappingURL=base.js.map