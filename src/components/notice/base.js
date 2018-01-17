import { add } from './Message'

let addMessage = function (type, arg) {
    var data = {
        type: type
    };

    if (Yox.is.string(arg)) {
        data.content = arg;
    }
    else {
        Yox.object.extend(data, arg);
    }
    add(data);
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
        console.log('config:', options);
    },
    destroy: function () {
        console.log('destroy');
    }
};