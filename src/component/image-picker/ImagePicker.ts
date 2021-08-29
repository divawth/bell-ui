import Yox from 'yox'

import template from './template/ImagePicker.hbs'
// import './style/ImagePicker.styl'

import Icon from '../icon/Icon'
import Upload from '../upload/Upload'

import {
  TRUE,
  FALSE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_FUNCTION,
} from '../constant'

import {
  STATUS_UPLOADING,
  STATUS_ERROR,
  readImageFile,
  formatImageSize,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}ImagePicker',

  propTypes: {
    imageList: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    extra: {
      type: RAW_STRING,
    },
    maxSize: {
      type: RAW_NUMERIC,
    },
    maxCount: {
      type: RAW_NUMERIC,
    },
    accept: {
      type: RAW_STRING,
      value: 'image/png,image/jpeg,image/jpg,image/gif'
    },
    upload: {
      type: RAW_FUNCTION,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    const me = this
    return {
      STATUS_UPLOADING,
      STATUS_ERROR,
      beforeUploadImage(data) {
        const restCount = me.get('restCount')
        const fileList = data.fileList

        // 校验可选数量
        if (fileList.length > restCount) {
          me.fireError(`仅可以选择 ${restCount} 张图片`)
          return
        }

        // 校验图片大小
        const maxSize = me.get('maxSize')
        if (maxSize > 0) {
          for (let i = 0, len = fileList.length; i < len; i++) {
            if (fileList[i].size > maxSize) {
              me.fireError(`图片大小不能超过 ${formatImageSize(maxSize)}`)
              return
            }
          }
        }

        Promise.all(
          fileList.map(readImageFile)
        )
        .then(function (newList) {

          const upload = me.$refs.upload as any
          upload.reset()

          me.appendItems(newList)

        })
      }
    }
  },

  computed: {
    restCount(): number {
      const imageCount = this.get('imageList.length')
      const maxCount = this.get('maxCount')
      return maxCount - imageCount
    }
  },

  filters: {
    formatImageSize,
  },

  components: {
    Icon,
    Upload,
  },

  methods: {
    getImageIndexById(id: number) {
      const imageList = this.get('imageList')
      for (let i = 0, len = imageList.length; i < len; i++) {
        if (id === imageList[i].id) {
          return i
        }
      }
      return -1
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
        else if (imageList[i].status === STATUS_ERROR) {
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

      items.forEach(
        function (item) {
          imageList.push(item)
        }
      )

      me.set('imageList', imageList)
      me.fireChange()

      items.forEach(
        function (item: any) {
          me.uploadItem(item.id)
        }
      )

    },
    removeItem(index: number) {
      this.removeAt('imageList', index)
      this.fireChange()
    },
    upload() {

      const me = this
      const imageList = this.get('imageList')

      Yox.array.each(
        imageList,
        function (item: any) {
          if (!item.url) {
            me.uploadItem(item.id)
          }
        }
      )

    },
    uploadItem(id: number) {

      const me = this
      const index = me.getImageIndexById(id)
      if (index < 0) {
        return
      }

      const upload = this.get('upload')
      const item = me.get(`imageList.${index}`)

      upload({
        id: item.id,
        file: item.file,
        onStart() {
          const index = me.getImageIndexById(id)
          if (index >= 0) {
            me.set(`imageList.${index}.status`, STATUS_UPLOADING)
            me.fireChange()
          }
        },
        onError() {
          const index = me.getImageIndexById(id)
          if (index >= 0) {
            me.set(`imageList.${index}.status`, STATUS_ERROR)
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
            me.fireChange()
          }
        }
      })

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
    }
  }

})