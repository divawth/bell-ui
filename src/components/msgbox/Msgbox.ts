import {
  addAlert,
  addConfirm
} from './base'
import { data } from 'yox'

const Alert = function (data: data) {
  addAlert(data)
}
const Confirm = function (data: data) {
  addConfirm(data)
}

export default {
  Alert,
  Confirm
}
