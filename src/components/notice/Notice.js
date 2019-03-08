import { add } from './base';

let config = {};

let addNotice = (type, arg) => {
  let data = {};
  data.type = type;

  if (Yox.is.string(arg)) {
    data.content = arg;
  }
  else {
    Yox.object.extend(data, arg, config);
  }

  add(data);
};

let updateConfig = (data) => {
  if (data.duration) {
    config.duration = data.duration;
  }

  if (data.top) {
    config.top = data.top;
  }
};

let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-notice-wrapper');
body.appendChild(element);

Yox.prototype.$Notice = {
  success: (arg) => {
    addNotice('success', arg);
  },
  info: (arg) => {
    addNotice('info', arg);
  },
  warning: (arg) => {
    addNotice('warning', arg);
  },
  error: (arg) => {
    addNotice('error', arg);
  },
  loading: (arg) => {
    addNotice('loading', arg);
  },
  config: (options) => {
    updateConfig(options);
  },
  destroy: () => {
    config = {};
  }
};
