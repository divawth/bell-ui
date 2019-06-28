import {
  addAlert,
  addConfirm
} from './base'
import { Data } from 'yox'

const Alert = function (data: Data) {
  addAlert(data)
}
const Confirm = function (data: Data) {
  addConfirm(data)
}

export default {
  Alert,
  Confirm
}
