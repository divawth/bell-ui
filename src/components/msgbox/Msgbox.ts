import {
  addAlert,
  addConfirm
} from './base'
import { Data } from 'yox'

function Alert(data: Data) {
  addAlert(data)
}
function Confirm(data: Data) {
  addConfirm(data)
}

export default {
  Alert,
  Confirm
}
