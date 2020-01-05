
> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
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

> 简洁版本（无边框）

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      simple
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
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

> 斑马条纹

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      stripe
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
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

> 排序

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
      on-sort="sort($data)"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true,
          defaultSortOrder: 'desc',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
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
    sort(data) {
      console.log(data)
    }
  }
}
```

> 危险插值

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
          dangerous: true
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
        {
          name: '<span style="color: #f00">John Brown</span>',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: '<span style="color: #0f0">Jim Green</span>',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: '<span style="color: #00f">Joe Black</span>',
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

> 列的对齐方式

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
          align: 'center',
        },
        {
          title: 'Address',
          key: 'address',
          align: 'right',
        }
      ],
      list: [
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

> 设置列宽

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
          width: 400
        }
      ],
      list: [
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

> 操作按钮

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
        {
          title: 'Actions',
          actions: [
            {
              text: 'Add',
              size: 'small',
              onClick: function (data, index) {
                console.log('add', data, index)
              }
            },
            {
              text: 'Remove',
              type: 'error',
              size: 'small',
              onClick: function (data, index) {
                console.log('remove', data, index)
              }
            }
          ]
        }
      ],
      list: [
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

> 选择行

1. 每一行数据增加 `key` 属性
2. 传入 `selection` 数组
3. 监听 `change` 事件

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      selection="{{selection}}"
      columns="{{columns}}"
      list="{{list}}"
      on-change="onChange()"
    />
  `,
  data: function () {
    return {
      selection: [],
      columns: [
        {
          key: 'selection',
        },
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
      ],
      list: [
        {
          key: '1',
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          key: '4',
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    onChange: function (event, data) {
      console.log('change', data)
    }
  }
}
```

> 自定义内容

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    >
      {{#each list}}
      <tr>
        {{#each columns:index}}
        <td>
          {{list[index][this.key]}}
        </td>
        {{/each}}
      </tr>
      {{/each}}
    </Table>
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [
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

> 空结果

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    />
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [

      ]
    }
  }
}
```

> 自定义空结果

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Table
      columns="{{columns}}"
      list="{{list}}"
    >
      <Empty slot="empty" simple>
        没有数据
      </Empty>
    </Table>
  `,
  data: function () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        }
      ],
      list: [

      ]
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
list | 数据 | Array | - | []
columns | 标题数据和对应的 name | Array | - | []
stripe | 间隔显示不同颜色 | boolean | - | `false`
simple | 是否使用简洁版本 | boolean | - | `false`
width | 设置表格的宽度 | numeric | - | -
height | 设置表格的高度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -
