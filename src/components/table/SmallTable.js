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
        {{#if key !== 'checked'}}
          {{title}}
        {{else}}
          <Checkbox checked="{{checkAll}}" on-change="checkedAllChange()">
            {{title}}
          </Checkbox>
        {{/if}}
      </th>
    {{/each}}
  </thead>
  <tbody class="bell-table-body"> 
    {{#if !header}}
      {{#each list:index}}
        <tr class="{{#if setRowClassName}}{{setRowClassName(this, index)}}{{/if}}
          {{#if currentItem && currentItem.index == index}} bell-table-active{{/if}}
        " on-click="rowClick(this, index)">
          {{#each columns}}
            <td class="{{#if className}}{{className}}{{/if}}
              {{#if list[ index ].cellClassName && list[ index ].cellClassName[ this.key ]}} {{list[ index ].cellClassName[ this.key ]}}{{/if}}
            ">  
              {{#if key == 'index'}}
                {{#if setIndex}}
                  {{setIndex(this, index)}}
                {{else}}
                  {{index + 1}}
                {{/if}}
              {{else if key == 'checked'}}
                <Checkbox checked="{{list[ index ][ key ]}}" on-change="checkedChange($data, index)">
                </Checkbox>
              {{else if key != 'action'}}
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
    },
    highlightRow: {
      type: 'boolean'
    },
    setIndex: {
      type: 'function'
    },
    selection: {
      type: 'boolean'
    }
  },

  data() {
    return {
      colWidths: [],
      currentItem: null
    };
  },

  computed: {
    checkAll () {
      return this.get('list').filter(item => {
        return item.checked;
      }).length === this.get('list').length;
    }
  },

  methods: {
    checkedChange (data, index) {
      this.setChecked(data.isChecked, true, index);
      data.index = index;
      this.fire('select', data);
    },
    checkedAllChange (event, data) {
      this.setChecked(data.isChecked, true);
      this.fire('selectAll', data);
    },
    selectAll () {
      this.checkedAllChange(null, {
        isChecked: true
      });
    },
    clearCurrentRow: function () {
      this.set({
        'currentItem': null
      });
    },
    click: function (item, data, index) {
      item.action(data, index);
    },
    rowClick: function (data, index) {
      let me = this;
      if (!me.get('highlightRow') || me.get('header')) {
        return;
      }
      data.index = index;
      me.fire('currentChange', {
        current: data,
        oldCurrent: me.get('currentItem')
      });
      me.set({
        'currentItem': data
      });
    },

    setChecked(value, force, index) {
      let me = this;
      let list = me.copy(me.get('list'));
      list = list.map((item, key) => {
        if (force && index == null) {
          item.checked = value;
        }
        else if (index != null) {
          if (key === index) {
            item.checked = value
          }
        }
        else {
          item.checked = item.checked != null ? item.checked : value;
        }
        return item;
      });

      this.fire('selectChange', list);
      me.set({
        list
      });
    }
  },

  afterMount: function () {
    let me = this;
    if (me.get('selection')) {
      me.setChecked();
    }
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