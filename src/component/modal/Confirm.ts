import Yox from 'yox'

import Button from '../button/Button'
import Dialog from '../dialog/Dialog'
import template from './template/Confirm.hbs'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
  screenWidth,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Confirm',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    content: {
      type: RAW_STRING,
      required: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    width: {
      type: RAW_NUMERIC,
      value: screenWidth > 1024 ? 400 : 300,
    },
    okText: {
      type: RAW_STRING,
      value: '确定',
    },
    okType: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    onOk: {
      type: RAW_FUNCTION,
    },
    cancelText: {
      type: RAW_STRING,
      value: '取消',
    },
    cancelType: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    onCancel: {
      type: RAW_FUNCTION,
    }
  },

  events: {
    closed: {
      listener(event) {
        event.stop()
        this.destroy()
      },
      ns: 'dialog',
    }
  },

  methods: {
    ok() {
      (this.$refs.dialog as any).close()
      const onOk = this.get('onOk')
      if (onOk) {
        onOk()
      }
    },
    cancel() {
      (this.$refs.dialog as any).close()
      const onCancel = this.get('onCancel')
      if (onCancel) {
        onCancel()
      }
    },
  },

  components: {
    Button,
    Dialog,
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