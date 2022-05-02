import Yox, { Data } from 'yox'

import Message from './Message'
import { addComponent } from './util'

type Arg = {
  content: string
  closable?: boolean
  top?: number
  duration?: number
  onClose?: Function
}

const config: Data = {}

function addMessage(status: string, arg: string | Arg) {

  const props: Data = { status }
  let onClose: Function | void

  Yox.object.extend(props, config)

  if (Yox.is.string(arg)) {
    props.content = arg as string
  }
  else {
    onClose = (arg as Arg).onClose
    Yox.object.extend(props, arg as Arg)
  }

  addComponent(
    Message,
    props,
    'hide.message',
    onClose
  )

}

(Yox.prototype as any).$message = {
  success(arg: string | Arg) {
    addMessage('success', arg)
  },
  info(arg: string | Arg) {
    addMessage('info', arg)
  },
  warning(arg: string | Arg) {
    addMessage('warning', arg)
  },
  error(arg: string | Arg) {
    addMessage('error', arg)
  },
  config(arg: {
    top: number,
    duration: number,
  }) {
    Yox.object.extend(config, arg)
  }
}