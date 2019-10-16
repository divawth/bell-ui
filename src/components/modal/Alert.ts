import Yox from 'yox'

import Button from '../button/Button'
import Dialog from '../dialog/Dialog'
import template from './template/Alert.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_NUMERIC,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}alert',

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
    width: {
      type: RAW_NUMERIC,
      value: 400,
    },
    okText: {
      type: RAW_STRING,
      value: '我知道了'
    },
    okType: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    onOk: {
      type: RAW_FUNCTION,
    }
  },

  events: {
    'closed.dialog': function (event) {
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
    }
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