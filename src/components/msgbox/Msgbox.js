import { addAlert, addConfirm } from './base'

let element = Yox.dom.createElement('div')
Yox.dom.prop(element, 'id', '${prefix}msgbox-wrapper')
Yox.dom.append(document.body, element)

Yox.prototype.$Alert = (data) => {
  addAlert(data)
}

Yox.prototype.$Confirm = (data) => {
  addConfirm(data)
}
