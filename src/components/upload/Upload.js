export default {
  template: `
    <div class="bell-upload
      {{#if className}} {{className}}{{/if}}
    "{{#if style}} style="{{style}}"{{/if}} on-click="click()">
      dsadsadasdsa
    </div>
  `,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  watchers: {
    
  },

  methods: {
    
  }
};