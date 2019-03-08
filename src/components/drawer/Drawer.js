import {
  contains
} from '../util'

export default {
  template: `
<div class="bell-drawer
  {{#if className}} {{className}}{{/if}}
  {{#if open}} bell-drawer-open{{else}} bell-drawer-hidden{{/if}}
  {{#if position}} bell-drawer-{{position}}{{/if}}
" style="{{#if style}} {{style}}{{/if}};">

  {{#if useMask}}
    <div class="bell-drawer-mask"></div>
  {{/if}}

  <div ref="drawContent" class="bell-drawer-content"
    style="{{#if position == "left" || position == "right"}}
      width: {{size}}px;
    {{else}}
        height: {{size}}px;
    {{/if}}"
  >
    {{#if hasSlot('children')}}
      <slot name="children" />
    {{/if}}
  </div>
</div>
  `,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    position: {
      type: 'string',
      value: 'left'
    },
    useMask: {
      type: 'boolean',
    },
    open: {
      type: 'boolean'
    },
    size: function (value) {
      return value != null ? +value : 300;
    }
  },

  afterMount() {

    let me = this;

    me.documentClickHandler = function (event) {

      if (!me.get('open')) {
        return
      }
      let element = me.$refs.drawContent;
      let target = event.originalEvent.target;
      if (contains(element, target)) {
        return;
      }
      me.set({
        open: false
      });

    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
  },

  beforeDestroy() {
    let me = this;
    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
  }
};