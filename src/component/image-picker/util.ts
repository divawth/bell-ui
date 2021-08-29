export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'

const KB = 1024
const MB = 1024 * KB

export function readImageFile(item) {
  return new Promise(
    function (resolve) {
      const reader = new FileReader()
      reader.onload = function (event) {
        item.base64 = event.target.result
        resolve(item)
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