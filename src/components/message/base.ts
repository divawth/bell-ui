import Yox, { Data } from 'yox'

import {
  TRUE,
  BODY,
} from '../constant'

import Message from './Message'

type Arg = string | Data

const config: Data = {}

function addMessage(type: string, arg: Arg, onClose?: Function) {

  const props: Data = { type }

  Yox.object.extend(props, config)

  if (Yox.is.string(arg)) {
    props.content = arg as string
  }
  else {
    Yox.object.extend(props, arg as Data)
  }

  const element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.append(BODY, element)

  const instance: any = new Yox(
    Yox.object.extend(
      {
        el: element,
        replace: TRUE,
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

export default {
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