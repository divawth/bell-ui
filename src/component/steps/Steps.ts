import Yox from 'yox'

import template from './template/Steps.hbs'
// import './style/Steps.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_SMALL,
  RAW_WAIT,
  RAW_PROCESS,
  RAW_FINISH,
  RAW_TYPE_ERROR,
  RAW_STYLE_TYPE,
  RAW_SLOT_CHILDREN,
} from '../constant'

import { oneOf } from '../util'
import { setStepIndex } from './util'

export default Yox.define({

  template,

  name: '${prefix}Steps',

  propTypes: {
    current: {
      type: RAW_NUMERIC,
      value: 0,
    },
    status: {
      type: oneOf([RAW_WAIT, RAW_PROCESS, RAW_FINISH, RAW_TYPE_ERROR]),
      value: RAW_PROCESS,
    },
    size: {
      type: oneOf([RAW_SMALL]),
    },
    vertical: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  beforeRender() {
    const children = this.get(RAW_SLOT_CHILDREN)
    if (children) {
      setStepIndex(
        children
      )
    }
  },

  watchers: {
    current(current) {
      this.fire(
        {
          type: 'currentChange',
          ns: 'steps'
        },
        {
          current,
        },
        TRUE
      )
    },
    status(status) {
      this.fire(
        {
          type: 'statusChange',
          ns: 'steps'
        },
        {
          status,
        },
        TRUE
      )
    }
  },

})