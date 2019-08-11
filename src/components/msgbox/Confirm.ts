import Yox, { YoxInterface } from 'yox'

import template from './template/Confirm.hbs'

import {
  TRUE,
  RAW_OBJECT,
  RAW_ARRAY,
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
    buttons: {
      type: RAW_ARRAY,
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
    buttonClick(index: number) {
      this.get('buttons.' + index + '.action').call(this)
    },
    hide() {
      (this.$refs.dialog as any).close()
    }
  },

  afterMount() {
    (this.$refs.dialog as any).open()
  }

})