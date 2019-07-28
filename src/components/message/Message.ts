import { add } from './base'
import Yox, { Data } from 'yox'

interface Config {
  duration?: number
  top?: number
}

type Arg = string | Data

const config: Config = {}

function addMessage(type: string, arg: Arg) {
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

function updateConfig(data: Data) {
  if (data.duration) {
    config.duration = data.duration
  }
  if (data.top) {
    config.top = data.top
  }
}

export default {
  success(arg: Arg) {
    addMessage('success', arg)
  },
  info(arg: Arg) {
    addMessage('info', arg)
  },
  warning(arg: Arg) {
    addMessage('warning', arg)
  },
  error(arg: Arg) {
    addMessage('error', arg)
  },
  loading(arg: Arg) {
    addMessage('loading', arg)
  },
  config(arg: Data) {
    updateConfig(arg)
  },
  destroy() {
    console.log('destroy')
  }
}