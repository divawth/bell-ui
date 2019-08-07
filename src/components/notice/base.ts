import Yox, { Data } from 'yox'

import Notice from './Notice'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

function addNotice(type: string,  data: Data, duration?: number, onClose?: Function) {

  let props: Data = { type }

  // 先写 config，可支持 data 覆盖全局配置
  Yox.object.extend(props, config)

  if (Yox.is.string(data)) {
    props.content = data
  }
  else {
    Yox.object.extend(props, data)
  }

  if (duration > 0) {
    props.duration = duration
  }

  if (onClose) {
    props.onClose = onClose
  }

  new Yox(
    Yox.object.extend(
      {
        el: Yox.dom.find('#${prefix}notice-wrapper') as HTMLElement,
        props,
      },
      Notice
    )
  )
}

export default {
  success(props: Data, duration?: number, onClose?: Function) {
    addNotice('success', props, duration, onClose)
  },
  info(props: Data, duration?: number, onClose?: Function) {
    addNotice('info', props, duration, onClose)
  },
  warning(props: Data, duration?: number, onClose?: Function) {
    addNotice('warning', props, duration, onClose)
  },
  error(props: Data, duration?: number, onClose?: Function) {
    addNotice('error', props, duration, onClose)
  },
  config(options: Data) {
    Yox.object.extend(config, options)
  }
}