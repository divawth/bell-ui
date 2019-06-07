import { addAlert, addConfirm } from './base'

const Alert = function (data) {
  addAlert(data)
}
const Confirm = function (data) {
  addConfirm(data)
}

export default {
  Alert,
  Confirm
}
