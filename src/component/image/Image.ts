import Yox, { CustomEventInterface } from 'yox'

import template from './template/Image.hbs'
// import './style/Image.styl'

import Icon from '../icon/Icon'
import Upload from '../upload/Upload'
import LoadingBar from '../loading-bar/LoadingBar'

import {
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_STRETCH,
  RAW_CONTAIN,
  RAW_IMAGE_ACCEPT,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  toNumber,
} from '../util'

import {
  STATUS_UPLOADING,
  STATUS_FAILURE,
  readLocalFile,
  validateFile,
  STATUS_ERROR,
} from '../image-picker/util'

export default Yox.define({

  template,

  name: '${prefix}Image',

  propTypes: {
    width: {
      type: RAW_NUMERIC,
      value: 60,
    },
    height: {
      type: RAW_NUMERIC,
      value: 60,
    },
    mode: {
      type: oneOf([RAW_STRETCH, RAW_CONTAIN]),
      value: RAW_STRETCH,
    },
    minSize: {
      type: RAW_NUMERIC,
    },
    maxSize: {
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
    maxWidth: {
      type: RAW_NUMERIC,
    },
    minHeight: {
      type: RAW_NUMERIC,
    },
    maxHeight: {
      type: RAW_NUMERIC,
    },
    minDuration: {
      type: RAW_NUMERIC,
    },
    maxDuration: {
      type: RAW_NUMERIC,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    showPreview: {
      type: RAW_BOOLEAN,
    },
    showDelete: {
      type: RAW_BOOLEAN,
    },
    url: {
      type: RAW_STRING,
    },
    alt: {
      type: RAW_STRING,
    },
    fallback: {
      type: RAW_STRING,
    },
    formatImageUrl: {
      type: RAW_FUNCTION,
    },
    uploadTitle: {
      type: RAW_STRING,
    },
    uploadingTitle: {
      type: RAW_STRING,
      value: '正在上传...',
    },
    uploadImage: {
      type: RAW_FUNCTION,
    },
    cropImage: {
      type: RAW_FUNCTION,
    },
    accept: {
      type: RAW_STRING,
      value: RAW_IMAGE_ACCEPT,
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
      useFallback: FALSE,
      image: {
        url: me.get('url'),
        base64: '',
        status: UNDEFINED,
        progress: 0,
        message: '',
      },
      beforeUploadImage(data) {

        const fileList = data.fileList as any[]

        readLocalFile(fileList[0]).then(function (image) {

          // @ts-ignore
          me.validateImage(image)

          me.set({
            image,
          })

          const upload = me.$refs.upload as any
          upload.reset()

          // @ts-ignore
          me.uploadImage(image)

        })

      },
    }
  },

  computed: {
    isUploading(): boolean {
      return this.get('image.status') === STATUS_UPLOADING
    },
    isVideoUploader(): boolean {
      const accept = this.get('accept')
      return accept ? accept.indexOf('video') >= 0 : FALSE
    },
    widthNumber(): number {
      return toNumber(this.get('width'))
    },
    heightNumber(): number {
      return toNumber(this.get('height'))
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const widthNumber = this.get('widthNumber')
      const heightNumber = this.get('heightNumber')

      result.push({
        width: toPixel(widthNumber),
        height: toPixel(heightNumber),
      })

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
  },

  watchers: {
    url(url) {
      this.set('image.url', url)
    },
    'image.url': function () {
      this.set('useFallback', FALSE)
    },
    'image.base64': function () {
      this.set('useFallback', FALSE)
    }
  },

  methods: {
    validateImage(image: any) {

      const me = this

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

      const errors = validateFile(
        image, minSize, maxSize, minRatio, maxRatio,
        minWidth, maxWidth, minHeight, maxHeight, minDuration, maxDuration
      )

      if (errors.length) {
        image.status = STATUS_ERROR
        image.message = errors.join('<br>')
      }

    },
    previewImage(event: CustomEventInterface) {
      event.stop()
      this.fire(
        {
          type: 'preview',
          ns: 'image',
        },
        {
          url: this.get('image.url'),
        }
      )
    },
    deleteImage(event: CustomEventInterface) {
      event.stop()
      this.fire(
        {
          type: 'delete',
          ns: 'image',
        }
      )
    },
    uploadImage(image: any) {

      const me = this

      // 如果校验未通过，或者已上传成功，则直接返回
      if (image.status === STATUS_ERROR || image.url) {
        return
      }

      const uploadHandler = function (image) {

        const uploadImage = me.get('uploadImage')

        uploadImage({
          id: image.id,
          file: image.file,
          onStart() {
            me.set('image.status', STATUS_UPLOADING)
            me.set('image.progress', 0)
          },
          onError(error: string) {
            me.set('image.status', STATUS_FAILURE)
            me.set('image.message', error || '上传失败')
          },
          onProgress(progress: number) {
            me.set('image.progress', progress)
          },
          onSuccess(data) {
            me.set('image.status', UNDEFINED)
            me.fire(
              {
                type: 'uploadSuccess',
                ns: 'image',
              },
              {
                image: data,
              }
            )
          }
        })

      }

      const cropImage = me.get('cropImage')

      if (image.base64 && cropImage) {
        cropImage({
          base64: image.base64,
          callback(result) {
            Yox.object.extend(image, result)
            uploadHandler(image)
          }
        })
      }
      else {
        uploadHandler(image)
      }

    }
  },

  components: {
    Icon,
    Upload,
    LoadingBar,
  }

})
