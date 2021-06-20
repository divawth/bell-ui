import Yox, { CustomEventInterface } from 'yox'

import template from './template/Upload.hbs'
// import './style/Upload.styl'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
} from '../constant'

// 为每次选择的文件提供一个全局唯一的 id，便于外部知道触发的事件对应哪次上传

type UploadFile = {
  id: number,
  file: File,
}

let guid = 0

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
      type: RAW_STRING,
    }
  },

  methods: {
    beforeUpload(files: UploadFile[]) {

      const me = this

      const beforeUpload = me.get('beforeUpload')

      if (beforeUpload) {
        let currentFile = beforeUpload(files)
        if (currentFile && currentFile.then) {
          currentFile
          .then(function (result) {
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
          })
        }
        else {
          if (Yox.is.array(currentFile)) {
            Yox.array.each(
              currentFile,
              function (item: UploadFile) {
                me.upload(item)
              }
            )
          }
          else if (currentFile) {
            me.upload(currentFile)
          }
        }
        return
      }

      Yox.array.each(
        files,
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

      const files = Yox.array.toArray(
        (event.originalEvent.target as HTMLInputElement).files
      )

      this.beforeUpload(
        files.map(function (file) {
          return {
            file,
            id: ++guid,
          }
        })
      )

    }

  },

})