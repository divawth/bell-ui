import template from './template/Upload.hbs'
import { RAW_STRING, RAW_OBJECT, RAW_BOOLEAN, FALSE, RAW_ARRAY, DOCUMENT, RAW_FUNCTION, NULL, RAW_NUMBER } from '../constant'
import Yox, { CustomEvent, Data } from 'yox';
import { AjaxUploader } from 'soga'

export default Yox.define({
  propTypes: {
    action: {
      type: RAW_STRING
    },
    headers: {
      type: RAW_OBJECT
    },
    withCredentials: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    accept: {
      type: RAW_ARRAY
    },
    data: {
      type: RAW_OBJECT
    },
    name: {
      type: RAW_STRING,
      value: 'filename'
    },
    beforeUpload: {
      type: RAW_FUNCTION
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      inputElement: NULL
    }
  },

  methods: {
    upload(files: any) {

      var me = this
      const beforeUpload = me.get('beforeUpload')
      files = Array.from(files)

      if (beforeUpload) {
        let currentFile = beforeUpload(files)
        if (currentFile instanceof Promise) {
          currentFile
          .then(function (newFile) {
            if (Yox.is.array(newFile)) {
              newFile.forEach(file => me.uploadFile(file))
            }
            else {
              me.uploadFile(
                newFile
              )
            }
          })
        }
        else {
          if (Yox.is.array(currentFile)) {
            currentFile.forEach(file => me.uploadFile(file))
          }
          else {
            me.uploadFile(
              currentFile
            )
          }
        }
        return
      }
      files.forEach(file => me.uploadFile(file))
    },

    uploadFile(file: any) {
      const me = this
      const ajaxUploader = new AjaxUploader(
        file,
        {
          onStart: function () {
            me.fire('start.upload')
          },
          onEnd: function () {
            me.fire('end.upload')
          },
          onAbort: function () {
            me.fire('abort.upload')
          },
          onError: function () {
            me.fire('error.upload')
          },
          onProgress: function (progress) {
            me.fire('progress.upload', progress)
          },
          onSuccess: function (response: Data) {
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
        // credentials: me.get('withCredentials') ? 'include' : 'omit'
      })
    },

    click() {
      let inputElement = this.get('inputElement')
      inputElement.click()
    }
  },

  afterMount() {
    var me = this
    let inputElement = DOCUMENT.createElement('input')
    inputElement.type = 'file'

    inputElement.multiple = me.get('multiple')

    var accept = me.get('accept')
    if (accept) {
      inputElement.accept = me.get('accept').join(',')
    }

    inputElement.style.display = 'none'
    me.$el.appendChild(inputElement)

    Yox.dom.on(
      inputElement,
      'change',
      function (event: CustomEvent) {
        var files = (event.originalEvent.target as HTMLInputElement).files
        me.upload(files)
      }
    )
    me.set({
      inputElement
    })
  }
})