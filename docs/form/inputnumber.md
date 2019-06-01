> 基础用法

```js
export default {
  template: `
  <div>
    <InputNumber max="10" min="1" model="value" placeholder="请输入" />
  </div>
  `,
}
```

> step 修改步值（这里暂时不支持小数）

```js
export default {
  template: `
    <div>
      <InputNumber max="100" min="1" model="value2" step="3" />
    </div>
  `,
  data: {
    value2: 3
  }
}
```

> size 修改大小

```js
export default {
  template: `
    <div>
      <InputNumber size="large" max="10" min="1" model="value3" />
      <InputNumber max="10" min="1" model="value3" />
      <InputNumber size="small" max="10" min="1" model="value3" />
      <style>
        .bell-input-number {
          margin-left: 10px;
        }
      </style>
    </div>
  `,
  data: {
    value3: 34
  }
}
```

> status 修改颜色风格

```js
export default {
  template: `
    <div>
      <InputNumber max="10" min="1" model="value4" />
      <InputNumber status="error" max="10" min="1" model="value4" />
      <InputNumber status="success" max="10" min="1" model="value4" />
      <style>
        .bell-input-number {
          margin-left: 10px;
        }
      </style>
    </div>
  `,
  data: {
    value4: 3
  }
}
```

> disabled 禁用

```js
export default {
  template: `
    <div>
      <InputNumber size="large" disabled="{{disabled}}" min="1" model="value5" />
      <InputNumber disabled="{{disabled}}" min="1" model="value5" />
      <InputNumber size="small" disabled="{{disabled}}" min="1" model="value5" />
      <br><br>
      <Button type="primary" on-click="toggle('disabled')">
        toggle disabled
      </Button>
      <style>
        .bell-input-number {
          margin-left: 10px;
        }
      </style>
    </div>
  `,
  data: {
    value5: 34,
    disabled: false
  }
}
```

> editable 是否能编辑。

```js
export default {
  template: `
  <div>
    <InputNumber size="large" editable="{{editable}}" min="1" model="value" />
    <InputNumber editable="{{editable}}" min="1" model="value" />
    <InputNumber size="small" editable="{{editable}}" min="1" model="value" />
    <style>
      .bell-input-number {
        margin-left: 10px;
      }
    </style>
  </div>
  `,
  data: {
    value: 34,
    editable: false
  }
}
```

> readonly 只读。

```js
export default {
  template: `
  <div>
    <InputNumber size="large" readonly min="1" model="value" />
    <InputNumber readonly min="1" model="value" />
    <InputNumber size="small" readonly min="1" model="value" />
    <style>
      .bell-input-number {
        margin-left: 10px;
      }
    </style>
  </div>
  `,
  data: {
    value: 34
  }
}
```

> formatter

```js
export default {
  template: `
  <div>
    <InputNumber formatter="{{formatter}}" size="large" min="1" model="value" />
    <InputNumber formatter="{{formatter}}" min="1" model="value" />
    <InputNumber formatter="{{formatter}}" size="small" min="1" model="value" />
    <style>
      .bell-input-number {
        margin-left: 10px;
      }
    </style>
  </div>
  `,
  data: {
    value: 34,
    formatter: function (value) {
      return `${value} %`
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
max | 最大值 | number | - | -
min | 最小值 | number | - | -
model | 当前值 | number | - | -
step | 每次改变的步伐，可以是小数 | number | - | 1
size | 大小 | string | large, small, default | default
status | 颜色风格 | string | info等 | primary
disabled | 是否禁用 | boolean | - | false
editable | 是否可编辑 | boolean | - | true
readonly | 是否开启只读 | boolean | - | true
formatter | 指定输入框展示值的格式 | function | - | -
placeholder | 占位文本 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value
focus | 聚焦的时候触发(仅 editable 为 true 的时候生效) | value
blur | 失焦的时候触发(仅 editable 为 true 的时候生效) | value