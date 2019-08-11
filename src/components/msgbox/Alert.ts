import Yox, { YoxInterface } from 'yox'

import template from './template/Alert.hbs'

import {
  TRUE,
  RAW_OBJECT,
  RAW_TYPE_PRIMARY,
  RAW_STRING,
  RAW_FUNCTION,
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
    (this.$refs.dialog as any).open()
  }

})