> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  data: function () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
```

> border 加边框

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table border columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  data: function () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {

  }
}
```

> 设置属性 stripe ，表格会间隔显示不同颜色，用于区分不同行数据。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table stripe columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  data: function () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
```

> 自定义

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div>
      <p>Custom row styles:</p>
      <Table setRowClassName="{{setRowClassName}}" columns="{{columns1}}" list="{{data1}}"></Table>
      <p>Custom column styles:</p>
      <Table columns="{{columns9}}" list="{{data1}}"></Table>
      <p>Custom arbitrary cell styles:</p>
      <Table columns="{{columns1}}" list="{{data8}}"></Table>
      <style>
        {{{style}}}
      </style>
    </div>
  `,
  data: function () {
    return {
      style: `
        .demo-table-info-row td{
          background-color: #2db7f5;
          color: #fff;
        }
        .demo-table-error-row td{
          background-color: #ff6600;
          color: #fff;
        }
        td.demo-table-info-column{
          background-color: #2db7f5;
          color: #fff;
        }
        .demo-table-info-cell-name {
          background-color: #2db7f5;
          color: #fff;
        }
        .demo-table-info-cell-age {
          background-color: #ff6600;
          color: #fff;
        }
        .demo-table-info-cell-address {
          background-color: #187;
          color: #fff;
        }
      `,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns9: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          className: 'demo-table-info-column'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      data8: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          cellClassName: {
            age: 'demo-table-info-cell-age',
            address: 'demo-table-info-cell-address'
          }
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          cellClassName: {
            name: 'demo-table-info-cell-name'
          }
        }
      ],
      setRowClassName: function (item, index) {
        if (index === 1) {
          return 'demo-table-info-row';
        } else if (index === 3) {
          return 'demo-table-error-row';
        }
        return '';
      }
    }
  }
}
```

> height 设置高度

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table border height="200" columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  data: function () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
```

> 固定列

```js
export default {
  isViewFullBlock: true,
  template: `
    <Table width="560" border columns="{{columns2}}" list="{{data3}}"></Table>
  `,
  data: function () {
    return {
      columns2: [
        {
          title: 'Name',
          key: 'name',
          width: 100,
          fixed: 'left'
        },
        {
          title: 'Age',
          key: 'age',
          width: 100
        },
        {
          title: 'Province',
          key: 'province',
          width: 100
        },
        {
          title: 'City',
          key: 'city',
          width: 100
        },
        {
          title: 'Address',
          key: 'address',
          width: 200
        },
        {
          title: 'Postcode',
          key: 'zip',
          width: 100
        },
        {
          title: 'Action',
          key: 'action',
          fixed: 'right',
          width: 200,
          actions: [
            {
              text: 'edit',
              size: 'tiny',
              action: function (item, index) {
                console.log('edit', item, index)
              }
            },
            {
              text: 'delete',
              size: 'tiny',
              action: function (item, index) {
                console.log('delete', item, index)
              }
            }
          ]
        }
      ],
      data3: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ]
    }
  }
}
```

> 单选

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Table ref="currentRowTable" highlightRow columns="{{columns1}}" list="{{data1}}" on-currentChange="rowChange($data)"></Table>
      <Button on-click="clearRowChange()">
        Clear
      </Button>
    </div>
  `,
  data: function () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    rowChange: function (data) {
      console.log(data)
    },
    clearRowChange: function () {
      this.$refs.currentRowTable.clearCurrentRow();
    }
  }
}
```

> 设置 Index 用 setIndex 自定义 index

```js
export default {
  isViewFullBlock: true,
  template: `
    <Table setIndex="{{setIndex}}" columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  data: function () {
    return {
      setIndex: function (item, index) {
        return index + 2;
      },
      columns1: [
        {
          title: '#',
          key: 'index',
          width: 60
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
```

> 设置 selection

```js
export default {
  isViewFullBlock: true,
  template: `
    <Table on-select="select($data)" on-select="selectAll($data)" selection columns="{{columns1}}" list="{{data1}}"></Table>
  `,
  methods: {
    select (data) {
      console.log(data);
    },
    selectAll (data) {
      console.log(data);
    }
  },
  data: function () {
    return {
      columns1: [
        {
          key: 'checked',
          title: '',
          width: 60
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
```

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
list | 数据 | Array | - | []
columns | 标题数据和对应的 name | Array | - | []
stripe | 间隔显示不同颜色 | Boolean | - | false
border | 添加表格的边框线 | Boolean | - | false
setRowClassName | 设置某行的类名 | Function | - | -
columns.className | 设置某列的类名 | String | - | -
data.cellClassName | 设置某个数据的类名 | String | - | -
height | 设置表格的高度 | String | - | -
highlightRow | 表示可以选中某一行 | Boolean | - | false
clearCurrentRow | 清楚单选选择的行 | Function | - | -
selection | 设置表格可选操作 | Boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
currentChange | 当 highlightRow 为 true 的时候点击某一行触发  | data.current 当前选中 data.oldCurrent 上一次选中
select | 选择某项的时候触发 | data.isChecked 是否选中
selectAll | 是否全选中 | data.isChecked
selectChange | 选项改变的时候触发 | list