import { add } from './base'
import Yox, { Data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

let addNotice = function (type: string, arg: Data) {
  let data: Data = {}
  data.type = type

  if (Yox.is.string(arg)) {
    data.content = arg
  }
  else {
    Yox.object.extend(data, arg)
    Yox.object.extend(data, config)
  }

  add(data)
}

let updateConfig = function (data) {
  if (data.duration) {
    config.duration = data.duration
  }

  if (data.top) {
    config.top = data.top
  }
}

export default {
  success: function (arg: Data) {
    addNotice('success', arg)
  },
  info: function (arg: Data) {
    addNotice('info', arg)
  },
  warning: function (arg: Data) {
    addNotice('warning', arg)
  },
  error: function (arg: Data) {
    addNotice('error', arg)
  },
  loading: function (arg: Data) {
    addNotice('loading', arg)
  },
  config: function (options: Data) {
    updateConfig(options)
  },
  destroy: function () {
    config = {}
  }
}
