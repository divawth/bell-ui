import CollapseTpl from './template/Collapse.html'

export default {
  template: CollapseTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    activeName: {
      type: ['numeric', 'string']
    },
    accordion: {
      type: 'boolean'
    }
  },

  events: {
    panelOpen(event, data) {
      var me = this;
      if (data.name) {
        me.fire(
          'panelActiveName',
          {
            name: name
          },
          true
        );
      }
    }
  },
  afterMount() {
    let me = this;
    let name = me.get('activeName');
    let accordion = me.get('accordion');
    if (name) {
      me.fire(
        'panelActiveName',
        {
          name: name
        },
        true
      );
    }
    if (accordion) {
      me.fire(
        'panelAccordion',
        {
          accordion: true
        },
        true
      );
    }
  }

};