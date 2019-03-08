export default {

  template: `
<div class="bell-dialog
  {{#if className}} {{className}}{{/if}}
" style="{{#if !open}}display: none;{{/if}}{{#if style}}{{style}}{{/if}}">
  <div class="bell-dialog-content">
    
    {{#if hasSlot('title')}}
    <div class="bell-dialog-title">
      <slot name="title" />
    </div>
    {{/if}}

    {{#if hasSlot('children')}}
    <div class="bell-dialog-body">
      <slot name="children" />
    </div>
    {{/if}}

    {{#if hasSlot('actions')}}
    <div class="bell-dialog-actions">
      <slot name="actions" />
    </div>
    {{/if}}

  </div>
  <div class="bell-dialog-mask" on-click="maskClick()"></div>
</div>
  `,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    open: {
      type: ['string', 'number', 'boolean']
    }
  },

  methods: {
    maskClick: function () {
      this.fire('maskClick');
    }
  },

  watchers: {
    open: function (isOpen) {
      this.setStatus();
    }
  },

  methods: {
    setStatus: function () {
      let me = this;
      let element = me.$el;
      var contentElement = element.querySelector('.bell-dialog-content');
      if (me.get('open')) {
        contentElement.style.marginTop = '-250px';
        element.style.display = 'flex';
        setTimeout(
          function () {
            contentElement.style.marginTop = 0;
          },
          300
        );
      }
      else {
        contentElement.style.marginTop = '-250px';
        setTimeout(
          function () {
            element.style.display = 'none';
          },
          300
        );
      }
    }
  },

  afterMount() {
    this.setStatus();
    document.body.appendChild(this.$el);
  }

};