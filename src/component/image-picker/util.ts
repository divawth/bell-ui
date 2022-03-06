import { NULL } from '../constant'

export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'
export const STATUS_FAILURE = 'failure'

const KB = 1024
const MB = 1024 * KB

export function readImageFile(item) {
  return new Promise(
    function (resolve) {
      const reader = new FileReader()
      reader.onload = function (event: any) {

        const base64 = event.target.result as string
        item.base64 = base64

        const image = new Image()
        image.src = base64
        image.onload = function () {
          item.width = image.naturalWidth
          item.height = image.naturalHeight
          image.onload = image.onerror = NULL
          resolve(item)
        }
        image.onerror = function () {
          image.onload = image.onerror = NULL
          resolve(item)
        }
      }
      reader.onerror = function () {
        item.status = STATUS_ERROR
        resolve(item)
      }
      reader.readAsDataURL(item.file)
    }
  )
}

export function formatImageSize(size: number) {
  if (size >= MB) {
    return (size / MB).toFixed(1) + ' MB'
  }
  return (size / KB).toFixed(1) + ' KB'
}