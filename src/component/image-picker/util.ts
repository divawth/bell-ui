export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'

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
  return (size / 1024).toFixed(1) + ' KB'
}