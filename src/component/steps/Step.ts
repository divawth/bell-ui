import Yox from 'yox'

import template from './template/Step.hbs'
// import './style/Step.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_WAIT,
  RAW_FINISH,
  RAW_TYPE_ERROR,
  RAW_STYLE_TYPE,
} from '../constant'

import { findComponentUpward } from '../util'

export default Yox.define({

  template,

  name: '${prefix}Step',

  propTypes: {
    index: {
      type: RAW_NUMBER,
      required: TRUE,
    },
    title: {
      type: RAW_STRING,
      required: TRUE,
    },
    description: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {
    const steps = findComponentUpward(options.parent, '${prefix}Steps')
    return {
      RAW_FINISH,
      RAW_TYPE_ERROR,
      current: steps.get('current'),
      status: steps.get('status'),
    }
  },

  computed: {
    stepStatus() {
      const index = this.get('index')
      const current = this.get('current')
      if (index < current) {
        return RAW_FINISH
      }
      if (index > current) {
        return RAW_WAIT
      }
      return this.get('status')
    },
    stepNumber() {
      return this.get('index') + 1
    }
  },

  events: {
    currentChange: {
      listener(_, data) {
        this.set({
          current: data.current,
        })
      },
      ns: 'steps',
    },
    statusChange: {
      listener(_, data) {
        this.set({
          status: data.status,
        })
      },
      ns: 'steps',
    },
  },

  components: {
    Icon,
  }

})