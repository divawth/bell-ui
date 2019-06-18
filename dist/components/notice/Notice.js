import { add } from './base';
var config = {};
var addNotice = function (type, arg) {
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
        addNotice('success', arg);
    },
    info: function (arg) {
        addNotice('info', arg);
    },
    warning: function (arg) {
        addNotice('warning', arg);
    },
    error: function (arg) {
        addNotice('error', arg);
    },
    loading: function (arg) {
        addNotice('loading', arg);
    },
    config: function (options) {
        updateConfig(options);
    },
    destroy: function () {
        config = {};
    }
};
//# sourceMappingURL=Notice.js.map