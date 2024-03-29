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
  RAW_TYPE_WARNING,
  RAW_STATUS_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  getStatusIconName,
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
      isVisible: FALSE,
    }
  },

  computed: {
    iconName() {
      return getStatusIconName(
        this.get('status')
      )
    },
    contentStyle() {

      const customStyle: Record<string, string> = {}

      const maxWidth = this.get('maxWidth')
      const maxHeight = this.get('maxHeight')
      if (maxWidth) {
        customStyle.maxWidth = toPixel(maxWidth)
      }
      if (maxHeight) {
        customStyle.maxHeight = toPixel(maxHeight)
      }

      if (Yox.object.keys(customStyle).length > 0) {
        return customStyle
      }

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
    onCancelClick(event: CustomEventInterface) {
      event.stop()
      fireClickEvent(event, TRUE)
      this.set('isVisible', FALSE)
      this.fire({
        type: 'cancel',
        ns: 'popconfirm',
      })
    },
    onOkClick(event: CustomEventInterface) {
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
