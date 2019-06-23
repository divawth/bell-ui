import { add } from './base'
import Yox, { data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

type arg = string | data

const config: Config = {}

let addMessage = function (type: string, arg: arg) {
  let data: Record<string, string> = {}
  data.type = type

  if (Yox.is.string(arg)) {
    data.content = arg as string
  }
  else {
    Yox.object.extend(data, arg as data)
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
  success: function(arg: arg) {
    addMessage('success', arg)
  },
  info: function(arg: arg) {
    addMessage('info', arg)
  },
  warning: function(arg: arg) {
    addMessage('warning', arg)
  },
  error: function(arg: arg) {
    addMessage('error', arg)
  },
  loading: function(arg: arg) {
    addMessage('loading', arg)
  },
  config: function (arg: arg) {
    updateConfig(arg)
  },
  destroy: function () {
    console.log('destroy')
  }
}