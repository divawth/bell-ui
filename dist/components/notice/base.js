import template from './template/Notice.hbs';
import { TRUE, RAW_FUNCTION, RAW_STRING, RAW_NUMERIC, } from '../constant';
import Yox from 'yox';
var id = 0;
var createNotice = function (data) {
    var namespace = '${prefix}notice-' + id++;
    var body = Yox.dom.find('#${prefix}notice-wrapper');
    var element = Yox.dom.createElement('div');
    Yox.dom.prop(element, 'id', namespace);
    Yox.dom.append(body, element);
    var instance = new Yox({
        el: '#' + namespace,
        replace: TRUE,
        template: template,
        props: {
            title: data.title,
            content: data.content,
            type: data.type,
            duration: data.duration,
            width: data.width,
            right: data.right,
            onClose: data.onClose
        },
        propTypes: {
            title: {
                type: RAW_STRING,
                value: '温馨提示'
            },
            content: {
                type: RAW_STRING
            },
            type: {
                type: RAW_STRING
            },
            duration: {
                type: RAW_NUMERIC,
                value: 4500
            },
            width: {
                type: RAW_NUMERIC,
                value: 320
            },
            right: {
                type: RAW_NUMERIC,
                value: 15
            },
            onClose: {
                type: RAW_FUNCTION
            }
        },
        data: function () {
            return {
                isShow: false,
                rightSize: 15
            };
        },
        methods: {
            close: function () {
                this.hide();
            },
            fadeIn: function () {
                var me = this;
                me.fadeInTimer = setTimeout(function () {
                    me.set({
                        isShow: true,
                        rightSize: me.get('right')
                    });
                    if (me.get('duration') == 0) {
                        return;
                    }
                    me.fadeOut();
                }, 300);
            },
            fadeOut: function () {
                var me = this;
                me.showTimer = setTimeout(function () {
                    me.hide();
                }, me.get('duration'));
            },
            hide: function () {
                var me = this;
                me.set({
                    isShow: false,
                    rightSize: "-" + me.$el.clientWidth
                });
                me.fadeOutTimer = setTimeout(function () {
                    me.get('onClose') && me.get('onClose')();
                    if (instance) {
                        instance.destroy();
                    }
                }, 300);
            }
        },
        afterMount: function () {
            this.set({
                rightSize: "-" + this.$el.clientWidth
            });
            this.fadeIn();
        },
        beforeDestroy: function () {
            var me = this;
            clearTimeout(me.fadeInTimer);
            clearTimeout(me.showTimer);
            clearTimeout(me.fadeOutTimer);
        }
    });
};
export var add = function (data) {
    createNotice(data);
};
//# sourceMappingURL=base.js.map