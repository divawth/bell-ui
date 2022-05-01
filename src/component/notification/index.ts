import Yox, { Data } from 'yox'
import { BODY } from '../constant'

import Notification from './Notification'

interface Config {
  duration?: number
  top?: number
}

let config: Config = {}

function addNotification(status: string,  data: Data, onClose?: Function) {

  let props: Data = { status }

  // 先写 config，可支持 data 覆盖全局配置
  Yox.object.extend(props, config)

  if (Yox.is.string(data)) {
    props.content = data
  }
  else {
    Yox.object.extend(props, data)
  }

  let wrapper = Yox.dom.find('#${prefix}notification-wrapper') as HTMLElement
  if (!wrapper) {
    wrapper = Yox.dom.createElement('div') as HTMLElement
    Yox.dom.setAttr(wrapper, 'id', '${prefix}notification-wrapper')
    Yox.dom.append(BODY, wrapper)
  }

  const instance: any = new Yox(
    Yox.object.extend(
      {
        el: wrapper,
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

(Yox.prototype as any).$notification = {
  open(props: Data, onClose?: Function) {
    addNotification('', props, onClose)
  },
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