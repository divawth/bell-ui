import template from './template/LoadingBar.html';
import { NULL, RAW_STRING, RAW_NUMERIC } from '../constant';
var namespace = '${prefix}loadingbar';
var instance = NULL;
var timer = NULL;
export var add = function (data) {
    if (instance) {
        remove();
    }
    var body = Yox.dom.find('#${prefix}loadingbar-wrapper');
    var element = Yox.dom.createElement('div');
    Yox.dom.prop(element, 'id', namespace);
    Yox.dom.append(body, element);
    instance = new Yox({
        el: '#' + namespace,
        replace: true,
        props: {
            percent: data.percent,
            height: data.height,
            type: data.type,
            color: data.color
        },
        template: template,
        propTypes: {
            type: {
                type: RAW_STRING
            },
            height: {
                type: RAW_NUMERIC,
                value: 2
            },
            percent: {
                type: RAW_NUMERIC,
                value: 0
            },
            color: {
                type: RAW_STRING
            }
        },
        afterMount: function () {
            var me = this;
            var timerStart = function () {
                timer = setTimeout(function () {
                    if (!timer || !me) {
                        return;
                    }
                    me.increase('percent', Math.floor(Math.random() * 10), 98);
                    if (me.get('percent') <= 98) {
                        timerStart();
                    }
                }, 200);
            };
            timerStart();
        },
        beforeDestroy: function () {
            if (timer) {
                clearTimeout(timer);
            }
        }
    });
    return instance;
};
export var remove = function () {
    if (instance) {
        instance.destroy();
        instance = NULL;
    }
    var body = Yox.dom.find('#${prefix}loadingbar-wrapper');
    var element = Yox.dom.find("#" + namespace);
    if (element) {
        Yox.dom.remove(body, element);
    }
};
export var update = function (config) {
    if (instance) {
        instance.set(config);
    }
};
//# sourceMappingURL=base.js.map