let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-loading-bar-wrapper');
body.appendChild(element);

import {
  add,
  remove,
  update
} from './base'

let config = {};

let updateConfig = (data) => {
  config.type = data.type ? data.type : config.type;
  config.color = data.color ? data.color : config.color;
  config.height = data.height ? data.height : config.height;
}

Yox.prototype.$LoadingBar = {
  // 开始从 0 显示进度条，并自动加载进度
  start(options) {
    return add(
      Yox.object.extend(
        {},
        options,
        config
      )
    );
  },

  // 结束进度条，自动补全剩余进度
  finish() {
    update({
      percent: 100
    });

    setTimeout(
      () => {
        return remove();
      },
      1000
    );
  },
  // 精确加载到指定的进度
  update(data) {
    return update(data);
  },
  config(data) {
    updateConfig(data);
  },
  destroy() {
    config = {};
    element.remove();
  }
};
