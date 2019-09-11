import Yox from 'yox'

import template from './template/Alert.hbs'

import {
  RAW_OBJECT,
  RAW_STRING,
  RAW_FUNCTION,
  RAW_TYPE_PRIMARY,
} from '../constant'

export default Yox.define({

  template,

  propTypes: {
    dialog: {
      type: RAW_OBJECT,
    },
    content: {
      type: RAW_STRING,
    },
    button: {
      type: RAW_OBJECT,
      value: {
        text: '我知道了',
        type: RAW_TYPE_PRIMARY,
      }
    },
    onClose: {
      type: RAW_FUNCTION,
    }
  },

  methods: {
    closeDialog() {
      const onClose = this.get('onClose')
      if (onClose) {
        onClose()
      }
      this.destroy()
    },
    hide() {
      (this.$refs.dialog as any).close()
    }
  },

  afterMount() {
    const me = this
    setTimeout(
      function () {
        if (me.$refs) {
          (me.$refs.dialog as any).open()
        }
      },
      30
    )
  }

})