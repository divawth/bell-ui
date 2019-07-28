> 基础用法

```js
export default {
  template: `
    <div>
      <Switch model="single" on-change="change()">
        <template slot="on">开</template>
        <template slot="off">关</template>
      </Switch>
      <p class="bell-text">{{single}}</p>
    </div>
  `,
  methods: {
    change: function (events, data) {
      console.log(data.checked)
    }
  },
  data: function () {
    return {
      single: true
    }
  }
}
```

> 设置 size 为 large 或 small 使用大号和小号的开关

```js
export default {
  template: `
  <div>
    <Switch size="small" />
    <Switch />
    <Switch size="large" />
  </div>
  `
}
```

> 设置 type 修改风格颜色

```js
export default {
  template: `
    <div>
      <Switch />
      <Switch type="info" />
      <Switch type="success" />
      <Switch type="warning" />
      <Switch type="error" />
    </div>
  `
}
```

> 修改文字和图标（建议使用文字字数相同）

```js
export default {
  template: `
  <div>
    <Switch type="info">
      <template slot="on">开</template>
      <template slot="off">关</template>
    </Switch>
    <Switch size="large" type="info">
      <template slot="on">开</template>
      <template slot="off">关</template>
    </Switch>
    <br><br>
    <Switch size="large" type="info">
      <template slot="on">开启</template>
      <template slot="off">关闭</template>
    </Switch>
    <Switch type="success">
      <template slot="on">开</template>
      <template slot="off">关</template>
    </Switch>
    <Switch size="large" type="warning">
      <template slot="on">ON</template>
      <template slot="off">OFF</template>
    </Switch>
    <Switch type="error" />
  </div>
  `
}
```

> checked 默认选中

```js
export default {
  template: `
    <div>
      <Switch type="info" checked />
      <Switch type="success" checked />
      <Switch type="warning" checked />
      <Switch type="error" checked />
    </div>
  `
}
```

> disabled 禁用

```js
export default {
  template: `
    <div>
      <Switch type="info" disabled="{{disabled}}" />
      <Switch type="success" disabled="{{disabled}}" checked />
      <Switch type="warning" disabled="{{disabled}}" checked />
      <Switch type="error" disabled="{{disabled}}" />
      <br><br>
      <Button type="primary" on-click="toggle('disabled')">
        {{disabled ? 'Undisabled' : 'Disabled'}}
      </Button>
    </div>
  `
}
```

> loading

```js
export default {
  template: `
    <div>
      <Switch loading />
      <Switch loading checked />
      <Switch loading size="small" checked />
      <Switch loading size="large" checked />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked | 是否选中 | boolean | - | -
size | switch 大小 | string | large, small, - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | boolean | - | false
loading | 加载中的开关 | boolean | - | false

> Slots

参数 | 说明
---|---
on | 自定义选中时的内容
off | 自定义未选中时的内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value
