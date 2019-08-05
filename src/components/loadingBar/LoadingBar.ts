import { add, remove, update } from './base'
import Yox from 'yox'
import { NULL } from '../constant'

interface Config {
  type?: string,
  color?: string,
  height?: number,
  percent?: number
}

let config: Config = {}

function updateConfig(data: Config) {
  config.type = data.type ? data.type : config.type
  config.color = data.color ? data.color : config.color
  config.height = data.height ? data.height : config.height
}

export default {
  // 开始从 0 显示进度条，并自动加载进度
  start(options: Config = {}) {
    return add(
      Yox.object.extend(
        options,
        config
      )
    )
  },
  // 结束进度条，自动补全剩余进度
  finish() {
    update({
      percent: 100
    })
    setTimeout(
      function () {
        return remove()
      },
      1000
    )
  },
  // 精确加载到指定的进度
  update(data: Config) {
    return update(data)
  },
  config(data: Config) {
    updateConfig(data)
  },
  destroy() {
    config = NULL
  }
}