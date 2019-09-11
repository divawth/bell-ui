> 基础用法

```js
export default {
  template: `
    <div>
      <Switch model="checked" on-change="change()">
        <template slot="on">
          开
        </template>
        <template slot="off">
          关
        </template>
      </Switch>
      <p class="bell-text">
        {{checked}}
      </p>
    </div>
  `,
  methods: {
    change: function (events, data) {
      console.log(data.checked)
    }
  },
  data: function () {
    return {
      checked: true
    }
  }
}
```

> 风格

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

> 尺寸

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

> 修改描述

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

> 选中状态

```js
export default {
  template: `
    <div>
      <Switch checked />
      <Switch type="info" checked />
      <Switch type="success" checked />
      <Switch type="warning" checked />
      <Switch type="error" checked />
    </div>
  `
}
```

> 禁用状态

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
        {{disabled ? 'Enable' : 'Disable'}}
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
      <Switch loading size="small" />
      <Switch loading size="small" checked />
      <br>
      <Switch loading />
      <Switch loading checked />
      <br>
      <Switch loading size="large" />
      <Switch loading size="large" checked />
      <br>
      <Switch loading size="large" type="info" />
      <Switch loading size="large" type="info" checked />
      <br>
      <Switch loading size="large" type="success" />
      <Switch loading size="large" type="success" checked />
      <br>
      <Switch loading size="large" type="error" />
      <Switch loading size="large" type="error" checked />
      <br>
      <Switch loading size="large" type="warning" />
      <Switch loading size="large" type="warning" checked />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked / model | 是否选中 | boolean | - | false
size | 大小 | string | default, large, small | default
type | 风格 | string | primary, info, warning, success, error | primary
disabled | 是否禁用 | boolean | - | false
loading | 是否正在加载 | boolean | - | false

> Slots

参数 | 说明
---|---
on | 选中时的内容
off | 未选中时的内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化后触发 | value
