import { add } from './base';

let config = {};

let addMessage = (type, arg) => {
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

Yox.prototype.$Message = {
  success: (arg) => {
    addMessage('success', arg);
  },
  info: (arg) => {
    addMessage('info', arg);
  },
  warning: (arg) => {
    addMessage('warning', arg);
  },
  error: (arg) => {
    addMessage('error', arg);
  },
  loading: (arg) => {
    addMessage('loading', arg);
  },
  config: (options) => {
    updateConfig(options);
  },
  destroy: () => {
    console.log('destroy');
  }
};
