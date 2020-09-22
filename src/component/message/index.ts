import Yox, { Data } from 'yox'

import {
  BODY,
} from '../constant'

import Message from './Message'

type Arg = string | Data

const config: Data = {}

function addMessage(status: string, arg: Arg, onClose?: Function) {

  const props: Data = { status }

  Yox.object.extend(props, config)

  if (Yox.is.string(arg)) {
    props.content = arg as string
  }
  else {
    Yox.object.extend(props, arg as Data)
  }

  const instance: any = new Yox(
    Yox.object.extend(
      {
        el: BODY,
        props,
      },
      Message
    )
  )

  instance.on('hide.message', function () {
    if (onClose) {
      onClose()
    }
    instance.destroy()
  })

  setTimeout(
    function () {
      if (instance.$el) {
        instance.show(props.top || 15, props.duration || 2000)
      }
    },
    300
  )

}

(Yox.prototype as any).$message = {
  success(arg: Arg, onClose?: Function) {
    addMessage('success', arg, onClose)
  },
  info(arg: Arg, onClose?: Function) {
    addMessage('info', arg, onClose)
  },
  warning(arg: Arg, onClose?: Function) {
    addMessage('warning', arg, onClose)
  },
  error(arg: Arg, onClose?: Function) {
    addMessage('error', arg, onClose)
  },
  config(arg: Data) {
    Yox.object.extend(config, arg)
  }
}