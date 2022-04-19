import Yox, { CustomEventInterface } from 'yox'

import template from './template/ImagePicker.hbs'
// import './style/ImagePicker.styl'

import Add from '../add/Add'
import Icon from '../icon/Icon'
import Space from '../space/Space'
import Button from '../button/Button'
import Upload from '../upload/Upload'
import Closeable from '../closeable/Closeable'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_IMAGE_ACCEPT,
  RAW_STYLE_TYPE,
  RAW_SCALE_TO_FILL,
  RAW_ASPECT_FIT,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
  formatMillisecond,
} from '../util'

import {
  STATUS_UPLOADING,
  STATUS_ERROR,
  STATUS_FAILURE,
  readLocalFile,
  formatFileSize,
} from './util'

const CLASS_CARD_MOUSE_ENTER = '${prefix}image-picker-card-mouse-enter'
const CLASS_CARD_DRAG_ENTER = '${prefix}image-picker-card-drag-enter'

const formatDurationOptinos = {
  format: 'd:HH:mm:ss',
  trimDay: TRUE,
  trimHour: TRUE
}

export default Yox.define({

  template,

  name: '${prefix}ImagePicker',

  propTypes: {
    imageList: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    imageWidth: {
      type: RAW_NUMERIC,
      value: 80,
    },
    imageHeight: {
      type: RAW_NUMERIC,
      value: 80,
    },
    imageMode: {
      type: oneOf([RAW_SCALE_TO_FILL, RAW_ASPECT_FIT]),
      value: RAW_SCALE_TO_FILL,
    },
    extra: {
      type: RAW_STRING,
    },
    minSize: {
      type: RAW_NUMERIC,
    },
    maxSize: {
      type: RAW_NUMERIC,
    },
    maxCount: {
      type: RAW_NUMERIC,
    },
    minRatio: {
      type: RAW_NUMERIC,
    },
    maxRatio: {
      type: RAW_NUMERIC,
    },
    minWidth: {
      type: RAW_NUMERIC,
    },
    minHeight: {
      type: RAW_NUMERIC,
    },
    minDuration: {
      type: RAW_NUMERIC,
    },
    maxWidth: {
      type: RAW_NUMERIC,
    },
    maxHeight: {
      type: RAW_NUMERIC,
    },
    maxDuration: {
      type: RAW_NUMERIC,
    },
    accept: {
      type: RAW_STRING,
      value: RAW_IMAGE_ACCEPT,
    },
    formatImageUrl: {
      type: RAW_FUNCTION,
    },
    cropImage: {
      type: RAW_FUNCTION,
    },
    uploadImage: {
      type: RAW_FUNCTION,
    },
    readOnly: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    const me = this
    return {
      STATUS_UPLOADING,
      STATUS_ERROR,
      STATUS_FAILURE,
      draggingIndex: -1,
      uploadingCount: 0,
      beforeReuploadImage(data) {

        const { index, fileList } = data

        readLocalFile(fileList[0]).then(function (item) {

          me.validateImageList([item])

          const reupload = me.$refs.reupload as any
          reupload.reset()

          me.replaceItem(item, index)

        })

      },
      beforeUploadImage(data) {
        const restCount = me.get('restCount')
        const fileList = data.fileList

        // 校验可选数量
        if (fileList.length > restCount) {
          if (me.get('isVideoPicker')) {
            me.fireError(`仅可以选择 ${restCount} 个视频`)
          }
          else {
            me.fireError(`仅可以选择 ${restCount} 张图片`)
          }
          return
        }

        Promise.all(
          fileList.map(readLocalFile)
        )
        .then(function (newList: any[]) {

          me.validateImageList(newList)

          const upload = me.$refs.upload as any
          upload.reset()

          me.appendItems(newList)

        })
      }
    }
  },

  computed: {
    isVideoPicker(): boolean {
      return this.get('accept').indexOf('video') >= 0
    },
    restCount(): number {
      const imageCount = this.get('imageList.length')
      const maxCount = this.get('maxCount')
      return maxCount - imageCount
    },
    canDraggable(): boolean {
      const uploadingCount = this.get('uploadingCount')
      const readOnly = this.get('readOnly')
      const imageList = this.get('imageList')
      return !uploadingCount && !readOnly && imageList.length > 1
    },
    imageStyle(): Record<string, string> {

      const customStyle: Record<string, string> = {}

      const imageWidth = this.get('imageWidth')
      const imageHeight = this.get('imageHeight')

      customStyle.width = toPixel(imageWidth)
      customStyle.height = toPixel(imageHeight)

      return customStyle

    },
  },

  filters: {
    hyphenate: Yox.string.hyphenate,
    formatFileSize,
  },

  components: {
    Add,
    Icon,
    Space,
    Button,
    Upload,
    Closeable,
  },

  methods: {
    handleImageClick(image: object, index: number) {
      this.fire(
        {
          type: 'preview',
          ns: 'imagePicker'
        },
        {
          image,
          index,
        }
      )
    },
    getImageIndexById(id: number) {
      const imageList = this.get('imageList')
      for (let i = 0, len = imageList.length; i < len; i++) {
        if (id === imageList[i].id) {
          return i
        }
      }
      return -1
    },
    validateImageList(imageList: any[]) {

      const me = this

      const target = me.get('isVideoPicker') ? '视频' : '图片'

      const minSize = toNumber(me.get('minSize'))
      const maxSize = toNumber(me.get('maxSize'))

      const minRatio = toNumber(me.get('minRatio'))
      const maxRatio = toNumber(me.get('maxRatio'))

      const minWidth = toNumber(me.get('minWidth'))
      const minHeight = toNumber(me.get('minHeight'))

      const maxWidth = toNumber(me.get('maxWidth'))
      const maxHeight = toNumber(me.get('maxHeight'))

      const minDuration = toNumber(me.get('minDuration'))
      const maxDuration = toNumber(me.get('maxDuration'))

      for (let i = 0, len = imageList.length; i < len; i++) {
        const item = imageList[i]
        let errors = []
        if (minSize > 0) {
          if (item.size < minSize) {
            errors.push(
              `${target}尺寸不能小于 ${formatFileSize(minSize)}`
            )
          }
        }
        if (maxSize > 0) {
          if (item.size > maxSize) {
            errors.push(
              `${target}尺寸不能超过 ${formatFileSize(maxSize)}`
            )
          }
        }
        if (item.height > 0) {
          const ratio = item.width / item.height
          if (minRatio > 0) {
            if (ratio < minRatio) {
              errors.push(
                `${target}宽高比不能小于 ${minRatio}`
              )
            }
          }
          if (maxRatio > 0) {
            if (ratio > maxRatio) {
              errors.push(
                `${target}宽高比不能大于 ${maxRatio}`
              )
            }
          }
        }
        if (minWidth > 0) {
          if (item.width < minWidth) {
            errors.push(
              `${target}宽度不能小于 ${minWidth}px`
            )
          }
        }
        if (minHeight > 0) {
          if (item.height < minHeight) {
            errors.push(
              `${target}高度不能小于 ${minHeight}px`
            )
          }
        }
        if (maxWidth > 0) {
          if (item.width > maxWidth) {
            errors.push(
              `${target}宽度不能大于 ${maxWidth}px`
            )
          }
        }
        if (maxHeight > 0) {
          if (item.height > maxHeight) {
            errors.push(
              `${target}高度不能大于 ${maxHeight}px`
            )
          }
        }
        if (minDuration > 0) {
          if (item.duration < minDuration) {
            errors.push(
              `${target}时长不能小于 ${formatMillisecond(minDuration * 1000, formatDurationOptinos)}`
            )
          }
        }
        if (maxDuration > 0) {
          if (item.duration > maxDuration) {
            errors.push(
              `${target}时长不能超过 ${formatMillisecond(maxDuration * 1000, formatDurationOptinos)}`
            )
          }
        }
        if (errors.length) {
          item.status = STATUS_ERROR
          item.message = errors.join('<br>')
        }
      }

    },
    checkReady() {

      const result = {
        hasLocal: FALSE,
        hasUploading: FALSE,
        hasError: FALSE,
      }

      const imageList = this.get('imageList')
      for (let i = 0, len = imageList.length; i < len; i++) {
        if (imageList[i].status === STATUS_UPLOADING) {
          result.hasUploading = TRUE
        }
        else if (imageList[i].status === STATUS_ERROR || imageList[i].status === STATUS_FAILURE) {
          result.hasError = TRUE
        }
        if (!imageList[i].url) {
          result.hasLocal = TRUE
        }
      }

      return result

    },
    appendItems(items: any[]) {

      const me = this
      const imageList = me.copy(me.get('imageList'))
      const length = imageList.length

      items.forEach(
        function (item) {
          imageList.push(item)
        }
      )

      me.set('imageList', imageList)
      me.fireChange()

      items.forEach(
        function (item: any, index) {
          me.uploadItem(item.id, length + index)
        }
      )

    },
    replaceItem(item: any, index: number) {

      const me = this
      const imageList = me.copy(me.get('imageList'))

      imageList.splice(index, 1, item)

      me.set('imageList', imageList)
      me.fireChange()

      me.uploadItem(item.id, index)

    },
    removeItem(event: CustomEventInterface, index: number) {
      event.stop()
      this.removeAt('imageList', index)
      this.fireChange()
    },
    upload() {

      const me = this
      const imageList = me.get('imageList')

      Yox.array.each(
        imageList,
        function (item: any, index: number) {
          me.uploadItem(item.id, index)
        }
      )

    },
    uploadItem(id: number, index: number) {

      const me = this

      const item = me.get(`imageList.${index}`)
      // 如果校验未通过，或者已上传成功，则直接返回
      if (item.status === STATUS_ERROR || item.url) {
        return
      }

      const uploadHandler = function (item) {

        const uploadImage = me.get('uploadImage')

        me.increase('uploadingCount')

        uploadImage({
          id: item.id,
          file: item.file,
          onStart() {
            const index = me.getImageIndexById(id)
            if (index >= 0) {
              me.set(`imageList.${index}.status`, STATUS_UPLOADING)
              me.fireChange()
            }
          },
          onError(error: string) {
            const index = me.getImageIndexById(id)
            if (index >= 0) {
              me.set(`imageList.${index}.status`, STATUS_FAILURE)
              me.set(`imageList.${index}.message`, error || '上传失败')
              me.decrease('uploadingCount')
              me.fireChange()
            }
          },
          onProgress(progress: number) {
            const index = me.getImageIndexById(id)
            if (index >= 0) {
              me.set(`imageList.${index}.progress`, progress)
              me.fireChange()
            }
          },
          onSuccess(data) {
            const index = me.getImageIndexById(id)
            if (index >= 0) {
              me.set(`imageList.${index}`, data)
              me.decrease('uploadingCount')
              me.fireChange()
            }
          }
        })

      }

      const cropImage = me.get('cropImage')

      if (item.base64 && cropImage) {
        cropImage({
          index,
          base64: item.base64,
          callback(result) {
            Yox.object.extend(item, result)
            uploadHandler(item)
          }
        })
      }
      else {
        uploadHandler(item)
      }

    },
    fireError(error: string) {
      this.fire(
        {
          type: 'error',
          ns: 'imagePicker'
        },
        {
          error
        }
      )
    },
    fireChange() {
      this.fire(
        {
          type: 'change',
          ns: 'imagePicker'
        },
        {
          imageList: this.get('imageList')
        }
      )
    },
    addImgWrapperItemClass(index: number, className: string) {
      const imagePickerListRef = this.$refs.imagePickerList as any
      const targetChild = imagePickerListRef.children[index]

      if (targetChild) {
        Yox.dom.addClass(targetChild, className)
      }
    },
    removeImgWrapperItemClass(index: number, className: string) {
      const imagePickerListRef = this.$refs.imagePickerList as any
      const targetChild = imagePickerListRef.children[index]

      if (targetChild) {
        Yox.dom.removeClass(targetChild, className)
      }
    },
    handleMouseEnter(index: number) {
      // https://stackoverflow.com/questions/11989289/css-html5-hover-state-remains-after-drag-and-drop
      // drag 拖拽的时候，hover 状态仍然会保留，改用监听 mouseenter 和 mouseleave 来添加删除 class
      // 并在 dragstart 的时候删除添加的 class，使 active 状态失效
      this.addImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER)
    },
    handleMouseLeave(index: number) {
      this.removeImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER)
    },
    handleDragStart(index: number) {
      this.set('draggingIndex', index)
      this.removeImgWrapperItemClass(index, CLASS_CARD_MOUSE_ENTER)
    },
    handleDragEnd() {
      // https://stackoverflow.com/questions/38111946/is-there-a-defined-ordering-between-dragend-and-drop-events
      // dragend 事件会在 drop 事件之后触发，做一些清理工作
      this.set('draggingIndex', -1)
    },
    handleDragOver(index: number) {
      const draggingIndex = this.get('draggingIndex')
      if (draggingIndex < 0) {
        return FALSE
      }

      if (draggingIndex !== index) {
        this.addImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER)
      }

      // https://hijiangtao.github.io/2020/05/04/Drag-and-Drop-note/
      // 返回 false, 阻止浏览器这种默认行为
      return FALSE
    },
    handleDragEnter(index: number) {
      const draggingIndex = this.get('draggingIndex')
      if (draggingIndex < 0) {
        return FALSE
      }

      if (draggingIndex !== index) {
        this.addImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER)
      }

      return FALSE
    },
    handleDragLeave(index: number) {
      const draggingIndex = this.get('draggingIndex')
      if (draggingIndex < 0) {
        return
      }

      this.removeImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER)
    },
    handleDragDrop(index: number) {
      const draggingIndex = this.get('draggingIndex')
      if (draggingIndex < 0) {
        return FALSE
      }

      const imageList = this.get('imageList')

      if (draggingIndex >= 0
        && draggingIndex < imageList.length
        && draggingIndex !== index
      ) {
        this.removeImgWrapperItemClass(index, CLASS_CARD_DRAG_ENTER)

        const startImageItem = imageList[draggingIndex]
        const newImageList = this.copy(imageList)

        if (draggingIndex < index) {
          newImageList.splice(index + 1, 0, startImageItem)
          newImageList.splice(draggingIndex, 1)
        }
        else {
          newImageList.splice(index, 0, startImageItem)
          newImageList.splice(draggingIndex + 1, 1)
        }

        this.set('imageList', newImageList)
        this.fireChange()
      }

      this.set('draggingIndex', -1)

      return FALSE
    },
  }

})
