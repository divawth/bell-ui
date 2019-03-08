export default {
  template: `
<div class="bell-input-wrapper
  {{#if hasSlot('prepend')}} bell-input-has-prepend{{/if}}
  {{#if hasSlot('append')}} bell-input-has-append{{/if}}
  {{#if className}} {{className}}{{/if}}
  {{#if size}} bell-input-wrapper-{{size}}{{/if}}
  {{#if status}} bell-input-wrapper-{{status}}{{/if}}
  {{#if isFocus}} bell-focus{{/if}}
  {{#if clearable}} bell-input-wrapper-clearable{{/if}}
  {{#if disabled}} bell-input-wrapper-disabled{{/if}}
  "{{#if style}} style="{{style}}"{{/if}}
>

  {{#if hasSlot('prepend')}}
    <div class="bell-input-prepend">
      <slot name="prepend" />
    </div>
  {{/if}}

  <div class="bell-input-number
    {{#if className}} {{className}}{{/if}}
    {{#if size}} bell-input-number-{{size}}{{/if}}
    {{#if status}} bell-input-number-{{status}}{{/if}}
    {{#if disabled}} bell-input-number-disabled{{/if}}
    {{#if readonly}} bell-input-number-readonly{{/if}}
    {{#if isFocus}} bell-focus{{/if}}
  "{{#if style}} style="{{style}}"{{/if}}>

    <span class="bell-input-number-wrapper">
      <input type="text" class="bell-input"
      {{#if placeholder}} placeholder="{{placeholder}}"{{/if}}
      {{#if disabled}}disabled="disabled"{{/if}}
      {{#if readonly || !editable}}readonly="readonly"{{/if}}
      model="value" on-blur="blur()" on-focus="focus()"
      ></input>
    </span>

    <span class="bell-input-number-actions">
      <span class="bell-icon bell-icon-up bell-icon-ios-arrow-up"
        {{#if maxValue != null && value >= maxValue}} disabled="disabled"{{/if}}
        on-click="up()"></span>
      <span class="bell-icon bell-icon-down bell-icon-ios-arrow-down"
        {{#if minValue != null && value <= minValue}} disabled="disabled"{{/if}}
        on-click="down()"
      ></span>
    </span>

  </div>
  {{#if hasSlot('append')}}
    <div class="bell-input-append">
      <slot name="append" />
    </div>
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
    status: {
      type: 'string'
    },
    maxValue: {
      type: 'numeric'
    },
    minValue: {
      type: 'numeric',
      value: 0
    },
    value: {
      type: 'numeric'
    },
    step: function (val) {
      return val === undefined ? 1 : +val;
    },
    size: {
      type: 'string'
    },
    readonly: {
      type: 'boolean',
      value: false
    },
    disabled: {
      type: 'boolean'
    },
    editable: {
      type: 'boolean',
      value: true
    },
    placeholder: {
      type: 'string'
    }
  },

  data() {
    return {
      isFocus: false
    }
  },

  watchers: {
    value(val) {
      let me = this;
      if (!Yox.is.numeric(val)) {
        me.set({
          value: +me.get('minValue')
        });
        return;
      }
      me.fire(
        'change',
        {
          value: +val
        }
      );
    }
  },

  methods: {
    up() {
      let me = this;
      me.increase('value', me.get('step'), me.get('maxValue'));
      me.fire('change', {
        value: +me.get('value')
      });
    },
    down() {
      let me = this;
      let value = me.decrease('value', me.get('step'), me.get('minValue'));
      me.fire('change', {
        value: +me.get('value')
      });
    },
    blur() {
      this.set({
        isFocus: false
      });
      this.fire('blur');
    },
    focus() {
      this.set({
        isFocus: true
      });
      this.fire('focus');
    },
    documentKeydownHander(event) {
      let me = this;
      switch (event.originalEvent.keyCode) {
        case 38:
          me.up()
          break;
        case 40:
          me.down()
          break;
      }
    }
  },

  afterMount() {
    let me = this;
    me.documentKeydownHander = me.documentKeydownHander.bind(me);
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHander
    );
  },

  beforeDestroy() {
    let me = this;
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHander
    );
  }
};
