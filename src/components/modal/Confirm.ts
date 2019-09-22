import Yox from 'yox'

import template from './template/Confirm.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    title: {
      type: RAW_STRING,
      value: '提示',
    },
    content: {
      type: RAW_STRING,
      required: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
    'close.dialog': function (event) {
      event.stop()
      this.destroy()
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