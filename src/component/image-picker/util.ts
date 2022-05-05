import { DOCUMENT, NULL, TRUE } from '../constant'
import { formatMillisecond } from '../util'

export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'
export const STATUS_FAILURE = 'failure'

const KB = 1024
const MB = 1024 * KB
const GB = 1024 * MB

const formatDurationOptinos = {
  format: 'd:HH:mm:ss',
  trimDay: TRUE,
  trimHour: TRUE,
}

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

export function validateFile(item: any, minSize: number, maxSize: number,
  minRatio: number, maxRatio: number,minWidth: number, maxWidth: number,
  minHeight: number, maxHeight: number, minDuration: number, maxDuration: number) {

  let errors = []
  if (minSize > 0) {
    if (item.size < minSize) {
      errors.push(
        `大小不能小于 ${formatFileSize(minSize)}`
      )
    }
  }
  if (maxSize > 0) {
    if (item.size > maxSize) {
      errors.push(
        `大小不能超过 ${formatFileSize(maxSize)}`
      )
    }
  }
  if (item.height > 0) {
    const ratio = item.width / item.height
    if (minRatio > 0) {
      if (ratio < minRatio) {
        errors.push(
          `宽高比不能小于 ${minRatio}`
        )
      }
    }
    if (maxRatio > 0) {
      if (ratio > maxRatio) {
        errors.push(
          `宽高比不能大于 ${maxRatio}`
        )
      }
    }
  }
  if (minWidth > 0) {
    if (item.width < minWidth) {
      errors.push(
        `宽度不能小于 ${minWidth}px`
      )
    }
  }
  if (minHeight > 0) {
    if (item.height < minHeight) {
      errors.push(
        `高度不能小于 ${minHeight}px`
      )
    }
  }
  if (maxWidth > 0) {
    if (item.width > maxWidth) {
      errors.push(
        `宽度不能大于 ${maxWidth}px`
      )
    }
  }
  if (maxHeight > 0) {
    if (item.height > maxHeight) {
      errors.push(
        `高度不能大于 ${maxHeight}px`
      )
    }
  }
  if (minDuration > 0) {
    if (item.duration < minDuration) {
      errors.push(
        `时长不能小于 ${formatMillisecond(minDuration * 1000, formatDurationOptinos)}`
      )
    }
  }
  if (maxDuration > 0) {
    if (item.duration > maxDuration) {
      errors.push(
        `时长不能超过 ${formatMillisecond(maxDuration * 1000, formatDurationOptinos)}`
      )
    }
  }

  return errors

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
