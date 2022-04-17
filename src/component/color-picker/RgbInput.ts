import Yox, { CustomEventInterface } from 'yox'

import template from './template/RgbInput.hbs'

import Input from '../input/Input'

import {
  TRUE,
  NULL,
  UNDEFINED,
  RAW_ARRAY,
  RAW_NUMBER,
} from '../constant'

import {
  formatRgb,
  getColorByName,
} from './util'

import {
  toNumber,
  toString,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}RgbInput',

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
      redText: '',
      greenText: '',
      blueText: '',
      alphaText: '',
    }
  },

  computed: {
    alphaPercent() {
      const alpha = this.get('alpha')
      if (typeof alpha === 'number') {
        return Math.floor(alpha * 100) + '%'
      }
      return ''
    }
  },

  methods: {
    onChange(event: CustomEventInterface, name: string, value: string) {
      event.stop()
      this.set(name, value)
    },
    onSubmit(event: CustomEventInterface) {
      event.stop()

      const redText = this.get('redText')
      const greenText = this.get('greenText')
      const blueText = this.get('blueText')
      const alphaText = this.get('alphaText')
      if (!redText
        || !greenText
        || !blueText
        || (this.get('alphaPercent') && !alphaText)
      ) {
        return
      }

      const alphaMatch = alphaText.match(/\s*(\d+)%\s*/)

      const rgb = formatRgb(
        [
          toNumber(redText),
          toNumber(greenText),
          toNumber(blueText),
        ],
        alphaMatch ? (toNumber(alphaMatch[1]) / 100) : UNDEFINED
      )

      this.fire(
        {
          type: 'colorChange',
          ns: 'rgbInput'
        },
        {
          color: getColorByName(rgb)
        }
      )
    },
  },

  afterMount() {

    this.watch(
      'rgb',
      function (rgb) {
        this.set({
          redText: rgb ? toString(rgb[0]) : '',
          greenText: rgb ? toString(rgb[1]) : '',
          blueText: rgb ? toString(rgb[2]) : '',
        })
      },
      TRUE
    )

    this.watch(
      'alpha',
      function () {
        this.set({
          alphaText: this.get('alphaPercent')
        })
      },
      TRUE
    )

  },

  components: {
    Input,
  }

})
