import { add } from './base'
import Yox, { Data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

type arg = string | Data

const config: Config = {}

let addMessage = function (type: string, arg: arg) {
  let data: Record<string, string> = {}
  data.type = type

  if (Yox.is.string(arg)) {
    data.content = arg as string
  }
  else {
    Yox.object.extend(data, arg as Data)
    Yox.object.extend(data, config)
  }

  add(data)
}

let updateConfig = function (data: arg) {
  if ((data as Data).duration) {
    config.duration = (data as Data).duration
  }

  if ((data as Data).top) {
    config.top = (data as Data).top
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