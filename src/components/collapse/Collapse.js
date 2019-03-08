export default {
  template: `
<div class="bell-collapse
  {{#if className}} {{className}}{{/if}}
"{{#if style}} {{style}}{{/if}}>

  {{#if hasSlot('children')}}
    <slot name="children" />
  {{/if}}

</div>
    `,

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