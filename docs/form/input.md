> 基础用法

```js
export default {
  template: `
  <div>
    <Input
      placeholder="Basic usage"
      model="value"
    />
    <br><br>
    <Input
      placeholder="Basic usage"
      model="value"
      disabled
    />
  </div>
  `
}
```

> 三种大小

```js
export default {
  template: `
    <div class="example-input">
      <Input
        placeholder="large size"
        size="large"
      />
      <br><br>
      <Input
        placeholder="default size"
      />
      <br><br>
      <Input
        placeholder="small size"
        size="small"
      />
    </div>
  `
}
```

> 前置/后置标签

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div>
      <Input
        model="value1"
        placeholder="请输入..."
        width="400"
      >
        <template slot="prepend">http://</template>
        <template slot="append">.com</template>
      </Input>
      <br><br>
      <Input
        model="value2"
        placeholder="请输入..."
        width="400"
      >
        <Button slot="append">搜索</Button>
      </Input>
      <br><br>
      <Input
        model="value3"
        placeholder="请输入..."
        width="400"
      >
        <Select slot="prepend" width="90">
          <Option value="www1">
            www1
          </Option>
          <Option value="www2">
            www2
          </Option>
        </Select>
      </Input>
    </div>
  `
}
```

> 搜索框

```js
export default {
  template: `
  <div>
    <Input
      prefix="search"
      placeholder="Enter something..."
    />
  </div>
  `
}
```

> 密码框

```js
export default {
  template: `
  <div>
    <Input
      type="password"
      secure
      placeholder="Enter something..."
    />
  </div>
  `
}
```

> 可清除

```js
export default {
  template: `
    <Input
      placeholder="请输入..."
      width="300"
      model="value"
      clearable
    />
  `
}
```

> 带 Icon 的输入框

```js
export default {
  template: `
  <div>
    <Input prefix="contact" />
    <br><br>
    <Input suffix="calendar" />
    <br><br>
    <Input>
      <Icon
        slot="prefix"
        name="contact"
      />
    </Input>
    <br><br>
    <Input>
      <Icon
        slot="suffix"
        name="calendar"
      />
    </Input>
  </div>
  `
}
```

> type 设置为 textarea, 通过 rows 设置显示行数

```js
export default {
  template: `
  <div>
    <Input
      model="value"
      type="textarea"
      rows="4"
      placeholder="请输入..."
    />
  </div>
  `
}
```

> 适应文本高度的文本域

```js
export default {
  template: `
  <div>
    <Input
      model="value"
      type="textarea"
      placeholder="Enter something..."
      autoSize="{{autoSize}}"
    />
  </div>
  `,
  data() {
    return {
      autoSize: {
        minRows: 2,
        maxRows: 5
      }
    }
  }
}
```

> 禁用状态

```js
export default {
  template: `
  <div>
    <Input
      model="value1"
      placeholder="Enter something..."
      disabled
    />
    <br><br>
    <Input
      model="value2"
      type="textarea"
      placeholder="Enter something..."
      disabled
    />
  </div>
  `
}
```


> 状态

```js
export default {
  template: `
  <div>
    <Input
      model="value"
      placeholder="info input"
      status="info"
    />
    <br><br>
    <Input
      model="value"
      placeholder="info input"
      status="success"
    />
    <br><br>
    <Input
      model="value"
      placeholder="info input"
      status="error"
    />
    <br><br>
    <Input
      model="value"
      placeholder="info input"
      status="warning"
    />
  </div>
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | input 的值 | string | - | -
type | 类型 | string | `text`, `password`, `textarea` | `text`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
size | 大小 | string | `default`, `small`, `large` | `default`
placeholder | placeholder | string | - | -
clearable | 清空按钮 | boolean | - | false
disabled | 设置按钮为禁用状态 | boolean | - | false
prefix | 输入框头部图标 | string | - | -
suffix | 输入框尾部图标 | string | - | -
rows | 行数, 仅在 `textarea` 类型下有效 | number | - | 1
autoSize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Object | - | -
secure | 是否可以隐藏显示（仅在 password 下有效） | boolean | - | false
wrap | wrap 属性规定当在表单中提交时，文本区域（text area）中的文本如何换行 | string | soft, hard | -
spellCheck | 是否对元素内容进行拼写检查 | boolean | - | -
readOnly | 设置输入框为只读 | boolean | - | false
maxLength | 最大输入长度 | number | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
enter | 按下回车键时触发 | -
keyup | 原生的 keyup 事件 | -
keydown | 原生的 keyup 事件 | -
keypress | 原生的 keypress 事件 | -
change | 输入时值发生改变时触发 | value
focus | 聚焦时触发 | -
blur | 失焦时触发 | -
clear | 点击清除时触发 | -

> Slots

参数 | 说明
---|---
prepend | 自定义前插槽
append | 自定义后插槽
prefix | 输入框头部图标
suffix | 输入框尾部图标