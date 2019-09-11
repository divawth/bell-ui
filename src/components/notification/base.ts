import Yox, { Data } from 'yox'

import Notification from './Notification'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

function addNotification(type: string,  data: Data, onClose?: Function) {

  let props: Data = { type }

  // 先写 config，可支持 data 覆盖全局配置
  Yox.object.extend(props, config)

  if (Yox.is.string(data)) {
    props.content = data
  }
  else {
    Yox.object.extend(props, data)
  }

  const instance: any = new Yox(
    Yox.object.extend(
      {
        el: '#${prefix}notification-wrapper',
        props,
      },
      Notification
    )
  )

  instance.on('hide.notification', function () {
    if (onClose) {
      onClose()
    }
    instance.destroy()
  })

  setTimeout(
    function () {
      if (instance.$el) {
        instance.show()
      }
    },
    300
  )

}

export default {
  success(props: Data, onClose?: Function) {
    addNotification('success', props, onClose)
  },
  info(props: Data, onClose?: Function) {
    addNotification('info', props, onClose)
  },
  warning(props: Data, onClose?: Function) {
    addNotification('warning', props, onClose)
  },
  error(props: Data, onClose?: Function) {
    addNotification('error', props, onClose)
  },
  config(options: Data) {
    Yox.object.extend(config, options)
  }
}