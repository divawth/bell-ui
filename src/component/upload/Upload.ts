import Yox, { CustomEventInterface } from 'yox'

import template from './template/Upload.hbs'
// import './style/Upload.styl'

import {
  FALSE,
  RAW_STRING,
  RAW_OBJECT,
  RAW_BOOLEAN,
  RAW_FUNCTION,
} from '../constant'

import {
  AjaxUploader,
} from 'soga'

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
    action: {
      type: RAW_STRING,
    },
    headers: {
      type: RAW_OBJECT,
    },
    withCredentials: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    accept: {
      type: RAW_STRING,
    },
    data: {
      type: RAW_OBJECT,
    },
    name: {
      type: RAW_STRING,
      value: 'file',
    },
    beforeUpload: {
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
    upload(files: UploadFile[]) {

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
                  me.uploadFile(item)
                }
              )
            }
            else if (result) {
              me.uploadFile(result)
            }
          })
        }
        else {
          if (Yox.is.array(currentFile)) {
            Yox.array.each(
              currentFile,
              function (item: UploadFile) {
                me.uploadFile(item)
              }
            )
          }
          else if (currentFile) {
            me.uploadFile(currentFile)
          }
        }
        return
      }

      Yox.array.each(
        files,
        function (item) {
          me.uploadFile(item)
        }
      )

    },

    uploadFile(file: UploadFile) {
      const me = this
      const ajaxUploader = new AjaxUploader(
        file.file,
        {
          onStart() {
            me.fire(
              'start.upload',
              file
            )
          },
          onEnd() {

            me.fire(
              'end.upload',
              file
            )

            // 重置一下，这样再次选择相同文件才能生效
            const form = me.$refs.form as HTMLFormElement
            form.reset()

          },
          onAbort() {
            me.fire(
              'abort.upload',
              file
            )
          },
          onError() {
            me.fire(
              'error.upload',
              file
            )
          },
          onProgress(progress) {
            me.fire(
              'progress.upload',
              {
                id: file.id,
                file: file.file,
                progress,
              }
            )
          },
          onSuccess(response) {
            me.fire(
              'success.upload',
              {
                id: file.id,
                file: file.file,
                response,
              }
            )
          }
        }
      )

      ajaxUploader.upload({
        action: me.get('action'),
        fileName: me.get('name'),
        data: me.get('data'),
        headers: me.get('headers'),
        credentials: me.get('withCredentials') ? 'include' : 'omit'
      })
    },

    click() {
      (this.$refs.input as HTMLInputElement).click()
    },

    changeFiles(event: CustomEventInterface) {

      const files = Yox.array.toArray(
        (event.originalEvent.target as HTMLInputElement).files
      )

      this.upload(
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