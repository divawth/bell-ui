import { createNotice } from './base'
import Yox, { Data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

function addNotice(type: string, arg: Data) {
  let data: Data = {}
  data.type = type

  if (Yox.is.string(arg)) {
    data.content = arg
  }
  else {
    Yox.object.extend(data, arg)
    Yox.object.extend(data, config)
  }

  createNotice(data)
}

function updateConfig(data) {
  if (data.duration) {
    config.duration = data.duration
  }

  if (data.top) {
    config.top = data.top
  }
}

export default {
  success(arg: Data) {
    addNotice('success', arg)
  },
  info(arg: Data) {
    addNotice('info', arg)
  },
  warning(arg: Data) {
    addNotice('warning', arg)
  },
  error(arg: Data) {
    addNotice('error', arg)
  },
  loading(arg: Data) {
    addNotice('loading', arg)
  },
  config(options: Data) {
    updateConfig(options)
  },
  destroy() {
    config = {}
  }
}
