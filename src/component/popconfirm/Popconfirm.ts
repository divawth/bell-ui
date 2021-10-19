import Yox, { CustomEventInterface } from 'yox'

import template from './template/Popconfirm.hbs'
// import './style/Popconfirm.styl'

import Button from '../button/Button'
import Popover from '../popover/Popover'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_CLICK,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_WARNING,
  RAW_TYPE_ERROR,
  RAW_STATUS_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

import {
  fireClickEvent,
} from '../event'

export default Yox.define({

  template,

  name: '${prefix}Popconfirm',

  propTypes: {
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
      value: RAW_TYPE_WARNING,
    },
    showIcon: {
      type: RAW_BOOLEAN,
    },
    title: {
      type: RAW_STRING,
    },
    okText: {
      type: RAW_STRING,
      value: '确定',
    },
    okType: {
      type: RAW_STRING,
    },
    cancelText: {
      type: RAW_STRING,
      value: '取消',
    },
    maxWidth: {
      type: RAW_NUMERIC,
    },
    maxHeight: {
      type: RAW_NUMERIC,
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
      RAW_CLICK,
      RAW_TYPE_INFO,
      RAW_TYPE_SUCCESS,
      RAW_TYPE_WARNING,
      RAW_TYPE_ERROR,
      isVisible: FALSE,
    }
  },

  events: {
    open: {
      listener(event) {
        event.stop()
        this.set('isVisible', TRUE)
      },
      ns: 'popover',
    },
    close: {
      listener(event) {
        event.stop()
        this.set('isVisible', FALSE)
      },
      ns: 'popover',
    }
  },

  methods: {
    handleCancelClick(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event, TRUE)
      this.set('isVisible', FALSE)
      this.fire({
        type: 'cancel',
        ns: 'popconfirm',
      })
    },
    handleOkClick(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event, TRUE)
      this.set('isVisible', FALSE)
      this.fire({
        type: 'ok',
        ns: 'popconfirm',
      })
    }
  },

  components: {
    Button,
    Popover,
  },
})
