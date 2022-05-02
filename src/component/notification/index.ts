import Yox, { Data } from 'yox'
import { BODY } from '../constant'

import Notification from './Notification'

type Arg = {
  content: string
  title?: string
  right?: number
  width?: number
  duration?: number
  onClose?: Function
}

type Config = {
  right?: number
  width?: number
  duration?: number
}

let config: Config = {}

function addNotification(status: string, arg: string | Arg) {

  let props: Data = { status }
  let onClose: Function | void

  // 先写 config，可支持 arg 覆盖全局配置
  Yox.object.extend(props, config)

  if (Yox.is.string(arg)) {
    props.content = arg
  }
  else {
    onClose = (arg as Arg).onClose
    Yox.object.extend(props, arg as Arg)
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
  open(props: string | Arg) {
    addNotification('', props)
  },
  success(props: string | Arg) {
    addNotification('success', props)
  },
  info(props: string | Arg) {
    addNotification('info', props)
  },
  warning(props: string | Arg) {
    addNotification('warning', props)
  },
  error(props: string | Arg) {
    addNotification('error', props)
  },
  config(options: Config) {
    Yox.object.extend(config, options)
  }
}