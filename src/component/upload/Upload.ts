import Yox, { CustomEventInterface } from 'yox'

import template from './template/Upload.hbs'
// import './style/Upload.styl'

import { toString } from '../util'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_STYLE_TYPE,
} from '../constant'

// 为每次选择的文件提供一个全局唯一的 id，便于外部知道触发的事件对应哪次上传

type UploadFile = {
  id: number | string,
  file: File,
  name: string,
  size: number,
}

// 本地文件用负数，避免和数据库自增 id 冲突
let guid = -1

export default Yox.define({

  template,

  name: '${prefix}Upload',

  propTypes: {
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    accept: {
      type: RAW_STRING,
    },
    beforeUpload: {
      type: RAW_FUNCTION,
    },
    upload: {
      type: RAW_FUNCTION,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  methods: {
    beforeUpload(fileList: UploadFile[]) {

      const me = this

      const beforeUpload = me.get('beforeUpload')
      if (beforeUpload) {
        beforeUpload({
          fileList,
          callback(result) {
            if (Yox.is.array(result)) {
              Yox.array.each(
                result,
                function (item: UploadFile) {
                  me.upload(item)
                }
              )
            }
            else if (result) {
              me.upload(result)
            }
          }
        })
        return
      }

      Yox.array.each(
        fileList,
        function (item) {
          me.upload(item)
        }
      )

    },

    upload(file: UploadFile) {

      const me = this
      const upload = me.get('upload')

      upload({
        id: file.id,
        file: file.file,
        onStart() {
          me.fire(
            {
              type: 'start',
              ns: 'upload',
            },
            file
          )
        },
        onEnd() {

          me.fire(
            {
              type: 'end',
              ns: 'upload',
            },
            file
          )

          me.reset()

        },
        onAbort() {
          me.fire(
            {
              type: 'abort',
              ns: 'upload',
            },
            file
          )
        },
        onError() {
          me.fire(
            {
              type: 'error',
              ns: 'upload',
            },
            file
          )
        },
        onProgress(progress) {
          me.fire(
            {
              type: 'progress',
              ns: 'upload',
            },
            {
              id: file.id,
              file: file.file,
              progress,
            }
          )
        },
        onSuccess(response) {
          me.fire(
            {
              type: 'success',
              ns: 'upload',
            },
            {
              id: file.id,
              file: file.file,
              response,
            }
          )
        }
      })
    },

    reset() {
      // 重置一下，这样再次选择相同文件才能生效
      (this.$refs.form as HTMLFormElement).reset()
    },

    click() {
      (this.$refs.input as HTMLInputElement).click()
    },

    onChange(event: CustomEventInterface) {

      const fileList = Yox.array.toArray(
        (event.originalEvent.target as HTMLInputElement).files
      )

      this.beforeUpload(
        fileList.map(function (file) {
          return {
            // 用字符串类型表示本地文件
            id: toString(guid--),
            file,
            name: file.name,
            size: file.size,
          }
        })
      )

    }

  },

})