import Yox, { Data } from 'yox'

import { BODY } from '../constant'

import Alert from './Alert'
import Confirm from './Confirm'

type Arg = string | Data

export default {
  addAlert(data: Arg) {

    const props: Data = {}

    if (Yox.is.object(data)) {
      const obj = data as Data
      props.dialog = {
        title: obj.title,
        closable: obj.closable,
        maskClosable: obj.maskClosable,
        onClose: obj.onClose,
        width: obj.width,
        mask: obj.mask,
      }
      props.content = obj.content
      props.button = obj.button
      props.onClose = obj.onClose
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
  },
  addConfirm(data: Arg) {

    const props: Data = {}

    if (Yox.is.object(data)) {
      const obj = data as Data
      props.dialog = {
        title: obj.title,
        closable: obj.closable,
        maskClosable: obj.maskClosable,
        width: obj.width,
        mask: obj.mask,
      }
      props.content = obj.content
      props.buttons = obj.buttons
      props.onClose = obj.onClose
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
}