import Yox, { CustomEventInterface } from 'yox'

import template from './template/Upload.hbs'
// import './style/Upload.styl'

import { toString } from '../util'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

// 为每次选择的文件提供一个全局唯一的 id，便于外部知道触发的事件对应哪次上传

type LocalFile = {
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
    index: {
      type: RAW_NUMERIC,
    },
    draggable: {
      type: RAW_BOOLEAN,
    },
    multiple: {
      type: RAW_BOOLEAN,
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

  data() {
    return {
      isFileHover: FALSE,
    }
  },

  methods: {
    beforeUpload(fileList: FileList) {

      const me = this
      const accept = me.get('accept')

      const acceptPattern = accept
        ? new RegExp(accept.replace(/\*/g, '.'))
        : UNDEFINED

      const files = Yox.array.toArray(fileList)
      .filter(
        function (file) {
          return acceptPattern
            ? acceptPattern.test(file.type)
            : TRUE
        }
      )
      .map(
        function (file) {
          return {
            // 用字符串类型表示本地文件
            id: toString(guid--),
            file,
            name: file.name,
            size: file.size,
          }
        }
      )

      if (files.length > 1
        && !me.get('multiple')
      ) {
        files.length = 1
      }

      const beforeUpload = me.get('beforeUpload')
      if (beforeUpload) {
        const index = me.get('index')
        beforeUpload({
          index,
          files,
          callback(result) {
            if (Yox.is.array(result)) {
              Yox.array.each(
                result,
                function (item: LocalFile) {
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
        files,
        function (item) {
          me.upload(item)
        }
      )

    },

    upload(file: LocalFile) {

      const me = this
      const index = me.get('index')
      const upload = me.get('upload')

      upload({
        index,
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

    handleClick() {
      (this.$refs.input as HTMLInputElement).click()
    },

    handleDragenter() {
      this.set('isFileHover', TRUE)
    },

    handleDragleave() {
      this.set('isFileHover', FALSE)
    },

    handleDragover(event: CustomEventInterface) {
      // 默认情况下，元素是不允许放置的
      event.prevent()
    },

    handleDrop(event: CustomEventInterface) {
      event.prevent()
      this.set('isFileHover', FALSE)
      this.beforeUpload(
        (event.originalEvent as DragEvent).dataTransfer.files
      )
    },

    handleChange(event: CustomEventInterface) {
      this.beforeUpload(
        (event.originalEvent.target as HTMLInputElement).files
      )
    }

  }

})