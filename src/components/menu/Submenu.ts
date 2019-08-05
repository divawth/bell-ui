import Yox, { YoxInterface, Data, CustomEventInterface } from 'yox'

import template from './template/Submenu.hbs'

import {
  findComponentUpward,
  onTransitionEnd,
} from '../util'

import {
  NULL,
  FALSE,
  TRUE,
  RAW_STRING
} from '../constant'

export default Yox.define({
  propTypes: {
    name: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      isOpen: FALSE,
      isActive: FALSE,
      activeName: NULL,
      mode: NULL,
      theme: NULL,
      isCollapsed: FALSE,
      isAnimation: FALSE
    }
  },

  methods: {
    click() {
      if (this.get('isAnimation')) {
        return
      }
      if (this.get('isOpen')) {
        this.close()
      }
      else {
        this.open()
      }
    },

    close() {
      let me = this
      me.set({
        isAnimation: TRUE
      })
      let element = me.$refs.menu as HTMLElement
      if (me.get('mode') === 'inline') {
        element = (me.$refs.menu as YoxInterface).$el as HTMLElement
      }
      element.style.height = `${element.clientHeight}px`
      element.style.overflow = 'hidden'
      setTimeout(
        function () {
          if (!element) {
            return
          }
          element.style.height = '0px'
          onTransitionEnd(
            element,
            function () {
              me.set({
                isAnimation: FALSE,
                isOpen: FALSE
              })
              me.nextTick(function () {
                element.style.height = ''
              })
            }
          )
        }
      )
    },

    open() {
      let me = this
      me.set({
        isAnimation: TRUE,
        isOpen: TRUE
      })

      me.nextTick(function () {
        let element = me.$refs.menu as HTMLElement
        if (me.get('mode') === 'inline') {
          element = (me.$refs.menu as YoxInterface).$el as HTMLElement
        }
        let height = element.clientHeight
        element.style.height = `0px`
        element.style.overflow = 'hidden'

        setTimeout(
          function () {
            if (!me.$el) {
              return
            }
            element.style.height = `${height}px`
            onTransitionEnd(
              element,
              function () {
                me.set({
                  isAnimation: FALSE
                })
                element.style.overflow = ''
              }
            )
          }
        )
      })
    }
  },

  events: {
    themeChanged(_: CustomEventInterface, data: Data) {
      this.set('theme', data.theme)
    },
    isCollapsedChanged(_: CustomEventInterface, data: Data) {
      this.set('isCollapsed', data.isCollapsed)
    },
    menuItemSelected(event: CustomEventInterface, data: Data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('activeName'))
      }
      else if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set('activeName', data.name)
        if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
          this.click()
        }
      }
    }
  },

  afterMount () {
    let element = findComponentUpward(this.$parent, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
      'isActive': element.get('activeName') === this.get('name'),
      'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0
    })
  }
})