import Yox, { YoxInterface } from 'yox'

import template from './template/Submenu.hbs'

import {
  NULL,
  FALSE,
  TRUE,
  RAW_STRING,
} from '../constant'

import {
  findComponentUpward,
  onTransitionEnd,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {

    const menu = findComponentUpward(options.parent, '${prefix}menu')
    const name = this.get('name')

    let isOpen = FALSE
    let isActive = FALSE
    if (Yox.array.has(menu.get('openNames'), name)) {
      isOpen = TRUE
    }
    if (menu.get('activeName') === name) {
      isActive = TRUE
    }

    return {
      isOpen,
      isActive,
      mode: menu.get('mode'),
      activeName: NULL,
      collapsed: FALSE,
      isAnimation: FALSE
    }
  },

  methods: {
    handleClick() {
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
    collapsedChanged(_, data) {
      this.set('collapsed', data.collapsed)
    },
    menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('activeName'))
      }
      else if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set('activeName', data.name)
        if (this.get('mode') !== 'inline' || this.get('collapsed')) {
          this.handleClick()
        }
      }
    }
  },

})