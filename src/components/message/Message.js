import { add } from './base'

let config = {};

let addMessage = function (type, arg) {
    let data = {};
    data.type = type;

    if (Yox.is.string(arg)) {
        data.content = arg;
    }
    else {
        Yox.object.extend(data, arg, config);
    }

    add(data);
}

let updateConfig = function (data) {
    if (data.duration) {
        config.duration = data.duration;
    }

    if (data.top) {
        config.top = data.top;
    }
}

Yox.prototype.$message = {
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
    config: function (options) {
        updateConfig(options);
    },
    destroy: function () {
        console.log('destroy');
    }
};
