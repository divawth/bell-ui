import Yox, { CustomEventInterface } from 'yox'

import template from './template/HexInput.hbs'

import Input from '../input/Input'

import {
  TRUE,
  RAW_ARRAY,
  RAW_NUMBER,
} from '../constant'

import {
  rgb2hex,
  getColorByName,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}HexInput',

  propTypes: {
    rgb: {
      type: RAW_ARRAY,
    },
    alpha: {
      type: RAW_NUMBER,
    },
  },

  data() {
    return {
      hexText: '',
    }
  },

  computed: {
    value() {
      const rgb = this.get('rgb')
      const alpha = this.get('alpha')
      return rgb2hex(rgb[0], rgb[1], rgb[2], alpha)
    },
  },

  methods: {
    onChange(event: CustomEventInterface, data: Record<string, any>) {
      event.stop()
      this.set({
        hexText: data.value
      })
    },
    onSubmit(event: CustomEventInterface) {
      event.stop()
      const hexText = this.get('hexText')
      if (!hexText) {
        return
      }
      this.fire(
        {
          type: 'colorChange',
          ns: 'hexInput'
        },
        {
          color: getColorByName(hexText)
        }
      )
    },
  },

  afterMount() {

    this.watch(
      'rgb',
      function () {
        this.set({
          hexText: this.get('value'),
        })
      },
      TRUE
    )

    this.watch(
      'alpha',
      function () {
        this.set({
          hexText: this.get('value'),
        })
      },
      TRUE
    )

  },

  components: {
    Input,
  }

})
