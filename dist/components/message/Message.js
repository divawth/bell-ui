import { add } from './base';
var config = {};
var addMessage = function (type, arg) {
    var data = {};
    data.type = type;
    if (Yox.is.string(arg)) {
        data.content = arg;
    }
    else {
        Yox.object.extend(data, arg, config);
    }
    add(data);
};
var updateConfig = function (data) {
    if (data.duration) {
        config.duration = data.duration;
    }
    if (data.top) {
        config.top = data.top;
    }
};
export default {
    success: function (arg) {
        addMessage('success', arg);
    },
    info: function (arg) {
        addMessage('info', arg);
    },
    warning: function (arg) {
        addMessage('warning', arg);
    },
    error: function (arg) {
        addMessage('error', arg);
    },
    loading: function (arg) {
        addMessage('loading', arg);
    },
    config: function (arg) {
        updateConfig(arg);
    },
    destroy: function () {
        console.log('destroy');
    }
};
//# sourceMappingURL=Message.js.map