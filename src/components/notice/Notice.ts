import { add } from './base'
import Yox, { data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

let addNotice = function (type: string, arg: data) {
  let data: data = {}
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
  success: function (arg: data) {
    addNotice('success', arg)
  },
  info: function (arg: data) {
    addNotice('info', arg)
  },
  warning: function (arg: data) {
    addNotice('warning', arg)
  },
  error: function (arg: data) {
    addNotice('error', arg)
  },
  loading: function (arg: data) {
    addNotice('loading', arg)
  },
  config: function (options: data) {
    updateConfig(options)
  },
  destroy: function () {
    config = {}
  }
}
