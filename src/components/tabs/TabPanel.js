export default {
  template: `
<div class="bell-tabs-panel
  {{#if className}} {{className}}{{/if}}
  {{#if isActive}} active{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>

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
    name: {
      type: 'string'
    },
    label: {
      type: 'string'
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  events: {
    tabsValueUpdate(event, data) {
      let me = this;
      if (!data.value) {
        return;
      }
      me.set({
        isActive: me.get('name') == data.value
      });
    }
  },

  afterMount() {
    let me = this;
    me.fire(
      'addTabLabel',
      {
        label: me.get('label'),
        name: me.get('name')
      }
    );
  }
};