import Yox, { CustomEvent, Data } from 'yox'

import template from './template/Panel.hbs'

import {
  NULL,
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  UNDEFINED,
} from '../constant'

import {
  findComponentUpward, onTransitionEnd,
} from '../util'

export default Yox.define({

  propTypes: {
    title: {
      type: RAW_STRING
    },
    name: {
      type: RAW_NUMERIC
    },
    isActive: {
      type: RAW_BOOLEAN
    },
    showIcon: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

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
    'change.accordion': function (_: CustomEvent, data: Data) {
      this.set({
        accordion: data.accordion
      })
    },
    'change.opened': function (event: CustomEvent, data: Data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        const me = this
        if (data.name === me.get('name')) {
          data.opened ? me.open() : me.close()
        }
        else if (me.get('accordion')) {
          me.close()
        }
      }
    }
  },

  methods: {

    click() {
      this.fire(
        'change.opened',
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
            'change.opened',
            {
              name: this.get('name'),
              opened: isActive
            }
          )
        },
        immediate: TRUE
      }
    )
  }
})