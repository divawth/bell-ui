import Yox, { Data } from 'yox'

import {
  TRUE,
  BODY,
} from '../constant'

import Message from './Message'

type Arg = string | Data

const config: Data = {}

function addMessage(type: string, arg: Arg, duration?: number, onClose?: Function) {

  const props: Data = { type }

  Yox.object.extend(props, config)

  if (Yox.is.string(arg)) {
    props.content = arg as string
  }
  else {
    Yox.object.extend(props, arg as Data)
  }

  if (duration > 0) {
    props.duration = duration
  }

  if (onClose) {
    props.onClose = onClose
  }

  const element = Yox.dom.createElement('div') as HTMLElement
  Yox.dom.append(BODY, element)

  new Yox(
    Yox.object.extend(
      {
        el: element,
        replace: TRUE,
        props,
      },
      Message
    )
  )

}

export default {
  success(arg: Arg, duration?: number, onClose?: Function) {
    addMessage('success', arg, duration, onClose)
  },
  info(arg: Arg, duration?: number, onClose?: Function) {
    addMessage('info', arg, duration, onClose)
  },
  warning(arg: Arg, duration?: number, onClose?: Function) {
    addMessage('warning', arg, duration, onClose)
  },
  error(arg: Arg, duration?: number, onClose?: Function) {
    addMessage('error', arg, duration, onClose)
  },
  config(arg: Data) {
    Yox.object.extend(config, arg)
  }
}