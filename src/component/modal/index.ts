import Yox, { Data } from 'yox'

import { BODY } from '../constant'

import Alert from './Alert'
import Confirm from './Confirm'

type Arg = string | Data

const prototype = Yox.prototype as any

prototype.$alert = function (data: Arg) {

  const props: Data = {}

  if (Yox.is.object(data)) {
    const obj = data as Data
    props.closable = obj.closable
    props.title = obj.title
    props.content = obj.content
    props.width = obj.width
    props.okText = obj.okText
    props.okType = obj.okType
    props.onOk = obj.onOk
  }
  else {
    props.content = data as string
  }

  new Yox(
    Yox.object.extend(
      {
        el: BODY,
        props,
      },
      Alert
    )
  )

}

prototype.$confirm = function (data: Arg) {

  const props: Data = {}

  if (Yox.is.object(data)) {
    const obj = data as Data
    props.closable = obj.closable
    props.title = obj.title
    props.content = obj.content
    props.width = obj.width
    props.okText = obj.okText
    props.okType = obj.okType
    props.onOk = obj.onOk
    props.cancelText = obj.cancelText
    props.cancelType = obj.cancelType
    props.onCancel = obj.onCancel
  }
  else {
    props.content = data as string
  }

  new Yox(
    Yox.object.extend(
      {
        el: BODY,
        props,
      },
      Confirm
    )
  )

}
