export default {
  template: `
<div class="bell-row
  {{#if className}} {{className}}{{/if}}
  {{#if gutter}} bell-row-gutter{{/if}}
  {{#if type}} bell-row-{{type}}{{/if}}
  {{#if justify}} bell-row-justify-{{justify}}{{/if}}
  {{#if align}} bell-row-align-{{align}}{{/if}}
" style="{{style}}">
  {{#if hasSlot('children')}}
    <slot name="children" />
  {{/if}}
</div>
  `,

  propTypes: {
    className: {
      type: 'string'
    },
    gutter: {
      type: 'numeric'
    },
    type: {
      type: 'string'
    },
    justify: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },

  data() {
    let me = this;
    return {
      style: ''
    }
  },

  computed: {
    style() {
      let me = this;
      let gap = me.get('gutter') / 2;
      let style = '';
      style = 'margin-left: -' + gap + 'px;margin-right: -' + gap + 'px;';
      return style;
    }
  },

  afterMount() {
    let me = this;
    me.fire(
      'updateGridGutter',
      {
        gutter: me.get('gutter')
      },
      true
    );
  }
};