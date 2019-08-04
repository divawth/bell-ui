import Yox from 'yox'

import template from './template/Panel.hbs'

import {
  NULL,
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  findComponentUpward,
  onTransitionEnd,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    name: {
      type: RAW_NUMERIC,
    },
    isActive: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {
    const collapse = findComponentUpward(options.parent, '${prefix}collapse')
    return {
      opened: FALSE,
      accordion: collapse
        ? collapse.get('accordion')
        : FALSE
    }
  },

  events: {
    'change.collapse': function (_, data) {
      this.set({
        accordion: data.accordion,
      })
    },
    'open.collapse': function (_, data) {
      const me = this
      if (data.name === me.get('name')) {
        if (data.opened) {
          me.open()
        }
        else {
          me.close()
        }
      }
      else if (me.get('accordion')) {
        me.close()
      }
    }
  },

  methods: {

    handleClick() {
      this.fire(
        'open.panel',
        {
          name: this.get('name'),
          opened: !this.get('opened'),
        }
      )
    },

    close() {

      const me = this, opened = me.get('opened')
      if (!opened) {
        return
      }

      const content = me.$refs.content as HTMLElement
      content.style.height = content.clientHeight + 'px'

      setTimeout(
        function () {
          if (!content) {
            return
          }
          content.style.height = '0px'
          onTransitionEnd(
            content,
            function () {
              me.set('opened', FALSE)
              me.nextTick(function () {
                content.style.height = ''
              })
            }
          )
        }
      )

    },

    open() {

      const me = this, opened = me.get('opened')
      if (opened) {
        return
      }

      me.set('opened', TRUE)
      me.nextTick(function () {

        const content = me.$refs.content as HTMLElement

        const height = content.clientHeight
        content.style.height = '0px'

        setTimeout(
          function () {
            if (!content) {
              return
            }
            content.style.height = height + 'px'
            onTransitionEnd(
              content,
              function () {
                content.style.height = ''
              }
            )
          }
        )
      })
    }
  },

  afterMount() {
    this.watch(
      'isActive',
      {
        watcher(isActive: boolean) {
          if (isActive == NULL) {
            return
          }
          this.fire(
            'open.panel',
            {
              name: this.get('name'),
              opened: isActive,
            }
          )
        },
        immediate: TRUE,
      }
    )
  }
})