export default {
  template: `
<table class="bell-table
{{#if className}} {{className}}{{/if}}
{{#if stripe}} bell-table-stripe{{/if}}
{{#if border}} bell-table-border{{/if}}
"{{#if style}} style="{{style}}"{{/if}}>
  <colgroup>
    {{#each colWidths}}
      <col align="left" width="{{this}}"></col>
    {{/each}}
  </colgroup>
  <thead class="bell-table-header">
    {{#each columns}}
      <th class="{{#if className}}{{className}}{{/if}}{{#if fixed || (height && !header)}} bell-table-hidden{{/if}}">
        {{title}}
      </th>
    {{/each}}
  </thead>
  <tbody class="bell-table-body"> 
    {{#if !header}}
      {{#each list:index}}
        <tr{{#if setRowClassName}} class="{{setRowClassName(this, index)}}"{{/if}}>
          {{#each columns}}
            <td class="{{#if className}}{{className}}{{/if}}
              {{#if list[ index ].cellClassName && list[ index ].cellClassName[ this.key ]}} {{list[ index ].cellClassName[ this.key ]}}{{/if}}
            ">  
              {{#if key != 'action'}}
                {{list[ index ][ key ]}}
              {{else}}
                {{#each actions}}
                  <Button on-click="click(this, list[ index ], index)" className="{{className}}" disabled="{{disabled}}" fluid="{{fluid}}" shape="{{shape}}" size="{{size}}" type="{{type}}">
                    {{text}}
                  </Button>
                {{/each}}
              {{/if}}
            </td>
          {{/each}}
        </tr>
      {{/each}}
    {{/if}} 
  </tbody>
</table>
    `,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    list: {
      type: 'array'
    },
    columns: {
      type: 'array',
      default: []
    },
    stripe: {
      type: 'boolean'
    },
    border: {
      type: 'boolean'
    },
    setRowClassName: {
      type: 'function'
    },
    height: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    header: {
      type: 'boolean',
      default: false
    }
  },

  data() {
    return {
      colWidths: []
    };
  },

  methods: {
    click: function (item, data, index) {
      item.action(data, index);
    }
  },

  afterMount: function () {
    let me = this;
    if (!me.get('columns').length) {
      return;
    }
    let colWidths = [];
    me.get('columns').forEach(item => {
      let colWidth = me.$el.clientWidth / 3;
      if (item.width) {
        colWidth = item.width;
      }
      colWidths.push(colWidth);
    });
    me.set({
      colWidths
    });
  }
};