import template from './template/CheckboxGroup.html'

export default {

  model: 'selected',

  name: '${prefix}checkboxGroup',

  propTypes: {
    name: {
      type: 'string'
    },
    selected: {
      type: 'array',
      value: function () {
        return []
      }
    },
    size: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    disabled: {
      type: ['string', 'numeric', 'boolean']
    },
    vertical: {
      type: ['string', 'numeric', 'boolean']
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  events: {
    'change.checkboxGroup': function (event) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        event.stop()
      }
    },
    'change.checkbox': function (event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        let me = this
        let selected = me.copy(me.get('selected'))
        if (data.checked) {
          if (Yox.array.indexOf(selected, data.value) === -1) {
            selected.push(data.value)
          }
        }
        else {
          Yox.array.remove(selected, data.value)
        }
        me.set({ selected })
        me.fire(
          'change.checkboxGroup', 
          { selected }, 
          true
        )
        event.stop()
      }
    }
  },
  watchers: {
    selected: {
      watcher: function (selected) {
        this.fire(
          'change.checkboxGroup', 
          { selected }, 
          true
        )
      },
      sync: true
    }
  }
}