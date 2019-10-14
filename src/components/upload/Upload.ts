import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/Upload.hbs'

import {
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_OBJECT,
  RAW_BOOLEAN,
  RAW_ARRAY,
  RAW_FUNCTION,
} from '../constant'

import {
  AjaxUploader,
} from 'soga'

export default Yox.define({

  template,

  name: '${prefix}upload',

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
      type: RAW_ARRAY,
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

  filters: {
    formatAccept(accept): string {
      return accept ? accept.join(',') : UNDEFINED
    }
  },

  methods: {
    upload(files: any) {

      const me = this

      const beforeUpload = me.get('beforeUpload')

      files = Yox.array.toArray(files)

      if (beforeUpload) {
        let currentFile = beforeUpload(files)
        if (currentFile && currentFile.then) {
          currentFile
          .then(function (result) {
            if (Yox.is.array(result)) {
              Yox.array.each(
                result,
                function (item) {
                  me.uploadFile(item)
                }
              )
            }
            else {
              me.uploadFile(result)
            }
          })
        }
        else {
          if (Yox.is.array(currentFile)) {
            Yox.array.each(
              currentFile,
              function (item) {
                me.uploadFile(item)
              }
            )
          }
          else {
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

    uploadFile(file: any) {
      const me = this
      const ajaxUploader = new AjaxUploader(
        file,
        {
          onStart() {
            me.fire('start.upload')
          },
          onEnd() {
            me.fire('end.upload')
          },
          onAbort() {
            me.fire('abort.upload')
          },
          onError() {
            me.fire('error.upload')
          },
          onProgress(progress) {
            me.fire('progress.upload', progress)
          },
          onSuccess(response: Data) {
            response._file = file
            me.fire('success.upload', response)
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
      const files = (event.originalEvent.target as HTMLInputElement).files
      this.upload(files)
    }

  },

})