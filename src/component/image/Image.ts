import Yox, { CustomEventInterface } from 'yox'

import template from './template/Image.hbs'
// import './style/Image.styl'

import Icon from '../icon/Icon'
import Spin from '../spin/Spin'
import Upload from '../upload/Upload'

import {
  TRUE,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
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
} from '../util'

import {
  STATUS_UPLOADING,
  STATUS_FAILURE,
  readLocalFile,
} from '../image-picker/util'

export default Yox.define({

  template,

  name: '${prefix}Image',

  propTypes: {
    width: {
      type: RAW_NUMERIC,
      value: 80,
    },
    height: {
      type: RAW_NUMERIC,
      value: 80,
    },
    mode: {
      type: oneOf([RAW_SCALE_TO_FILL, RAW_ASPECT_FIT]),
      value: RAW_SCALE_TO_FILL,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    showZoom: {
      type: RAW_BOOLEAN,
    },
    url: {
      type: RAW_STRING,
    },
    formatUrl: {
      type: RAW_FUNCTION,
    },
    alt: {
      type: RAW_STRING,
    },
    uploadTitle: {
      type: RAW_STRING,
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
      base64: '',
      status: UNDEFINED,
      progress: 0,
      message: '',
      beforeUploadImage(data) {

        const fileList = data.fileList as any[]

        readLocalFile(fileList[0]).then(function (item) {

          const upload = me.$refs.upload as any
          upload.reset()

          me.uploadImage(item)

        })

      },
    }
  },

  computed: {
    isLoading(): boolean {
      return this.get('status') === STATUS_UPLOADING
    },
    customWidth(): number {
      return toNumber(this.get('width'))
    },
    customHeight(): number {
      return toNumber(this.get('height'))
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const customWidth = this.get('customWidth')
      const customHeight = this.get('customHeight')

      result.push({
        width: toPixel(customWidth),
        height: toPixel(customHeight),
        lineHeight: toPixel(customHeight),
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

  filters: {
    hyphenate: Yox.string.hyphenate,
  },

  methods: {
    zoomImage(event: CustomEventInterface) {
      event.stop()
      this.fire(
        {
          type: 'zoom',
          ns: 'image',
        },
        {
          url: this.get('url'),
        }
      )
    },
    uploadImage(item: any) {

      const me = this

      const uploadHandler = function (item) {

        const uploadImage = me.get('uploadImage')

        uploadImage({
          id: item.id,
          file: item.file,
          onStart() {
            me.set({
              status: STATUS_UPLOADING,
              message: '',
            })
          },
          onError(error: string) {
            me.set({
              status: STATUS_FAILURE,
              message: error || '上传失败',
            })
          },
          onProgress(progress: number) {
            me.set({
              progress,
            })
          },
          onSuccess(data) {
            me.set({
              status: UNDEFINED,
            })
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

      const { base64 } = item
      if (base64) {
        me.set({
          base64
        })
        const cropImage = me.get('cropImage')
        if (cropImage) {
          cropImage({
            base64,
            callback(result) {
              Yox.object.extend(item, result)
              uploadHandler(item)
            }
          })
          return
        }
      }

      uploadHandler(item)

    }
  },

  components: {
    Icon,
    Spin,
    Upload,
  }

})
