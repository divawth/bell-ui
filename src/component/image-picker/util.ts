import { DOCUMENT, NULL } from '../constant'

export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'
export const STATUS_FAILURE = 'failure'

const KB = 1024
const MB = 1024 * KB
const GB = 1024 * MB

export function readLocalFile(item) {
  return new Promise(
    function (resolve) {
      const { file } = item
      if (file.type.indexOf('image') >= 0) {
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
            item.status = STATUS_ERROR
            item.message = 'error'
            image.onload = image.onerror = NULL
            resolve(item)
          }
        }
        reader.onerror = function () {
          item.status = STATUS_ERROR
          item.message = 'error'
          resolve(item)
        }
        reader.readAsDataURL(file)
      }
      else {
        const video = DOCUMENT.createElement('video')
        video.preload = 'metadata'
        video.src = URL.createObjectURL(file)
        video.onloadedmetadata = function () {
          URL.revokeObjectURL(video.src)
          item.width = video.videoWidth
          item.height = video.videoHeight
          item.duration = video.duration
          video.onloadedmetadata = video.onerror = NULL
          resolve(item)
        }
        video.onerror = function () {
          item.status = STATUS_ERROR
          item.message = 'error'
          video.onloadedmetadata = video.onerror = NULL
          resolve(item)
        }
      }
    }
  )
}

export function formatFileSize(size: number) {
  if (size >= GB) {
    return (size / GB).toFixed(1) + ' G'
  }
  if (size >= MB) {
    return (size / MB).toFixed(1) + ' MB'
  }
  return (size / KB).toFixed(1) + ' KB'
}
