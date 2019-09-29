> 基础用法

```js
export default {
  template: `
  <InputNumber
    min="1"
    max="10"
    model="value"
    placeholder="请输入"
  />
  `,
}
```

> step 修改步值（这里暂时不支持小数）

```js
export default {
  template: `
    <InputNumber
      min="1"
      max="100"
      step="3"
      model="value"
    />
  `,
  data: {
    value: 3
  }
}
```

> size 修改大小

```js
export default {
  template: `
    <div>
      <InputNumber
        size="large"
        min="1"
        max="10"
        model="value3"
      />
      <br><br>
      <InputNumber
        min="1"
        max="10"
        model="value3"
      />
      <br><br>
      <InputNumber
        size="small"
        min="1"
        max="10"
        model="value3"
      />
    </div>
  `,
  data: {
    value3: 34
  }
}
```

> 状态

```js
export default {
  template: `
    <div>
      <InputNumber
        min="1"
        max="10"
        model="value"
      />
      <br><br>
      <InputNumber
        status="success"
        min="1"
        max="10"
        model="value"
      />
      <br><br>
      <InputNumber
        status="error"
        min="1"
        max="10"
        model="value"
      />
    </div>
  `,
  data: {
    value: 3
  }
}
```

> disabled 禁用

```js
export default {
  template: `
    <div>
      <InputNumber
        disabled="{{disabled}}"
        size="large"
        min="1"
        model="value"
      />
      <br><br>
      <InputNumber
        disabled="{{disabled}}"
        min="1"
        model="value"
      />
      <br><br>
      <InputNumber
        disabled="{{disabled}}"
        size="small"
        min="1"
        model="value"
      />
      <br><br>
      <Button type="primary" on-click="toggle('disabled')">
        toggle disabled
      </Button>
    </div>
  `,
  data: {
    value: 34,
    disabled: false
  }
}
```

> editable 是否能编辑。

```js
export default {
  template: `
  <div>
    <InputNumber
      editable="{{editable}}"
      size="large"
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      editable="{{editable}}"
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      editable="{{editable}}"
      size="small"
      min="1"
      model="value"
    />
  </div>
  `,
  data: {
    value: 34,
    editable: false
  }
}
```

> readOnly 只读。

```js
export default {
  template: `
  <div>
    <InputNumber
      readOnly
      size="large"
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      readOnly
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      readOnly
      size="small"
      min="1"
      model="value"
    />
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
    <InputNumber
      formatter="{{formatter}}"
      size="large"
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      formatter="{{formatter}}"
      min="1"
      model="value"
    />
    <br><br>
    <InputNumber
      formatter="{{formatter}}"
      size="small"
      min="1"
      model="value"
    />
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
value / model | 当前值 | number | - | -
max | 最大值 | number | - | -
min | 最小值 | number | - | -
step | 每次改变的步进值 | number | - | 1
size | 大小 | string | `default`, `small`, `large` | `default`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
disabled | 是否禁用 | boolean | - | false
editable | 是否可编辑 | boolean | - | true
autoFocus | 原生 `autofocus` 属性 | boolean | - | `false`
readOnly | 原生 `readonly` 属性 | boolean | - | `false`
formatter | 指定输入框展示值的格式 | Function | - | -
placeholder | 占位文本 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化后回调 | value
focus | 聚焦后触发 | value
blur | 失焦后触发 | value