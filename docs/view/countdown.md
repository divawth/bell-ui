#### Countdown 倒计时

本组件只提供倒计时的逻辑，无样式。

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div>
      <Divider>
        秒、毫秒
      </Divider>
      <Countdown
        value="{{59 * 1000}}"
        step="{{33}}"
        format="ss:SSS"
      />
      <Divider>
        秒
      </Divider>
      <Countdown
        value="{{89 * 1000}}"
        step="{{1000}}"
        format="s"
      />
      <Countdown
        value="{{89 * 1000}}"
        step="{{1000}}"
        format="mm:ss"
      />
      <Countdown
        value="{{89 * 1000}}"
        step="{{1000}}"
        format="H:mm:ss"
      />
      <Divider>
        分、秒
      </Divider>
      <Countdown
        value="{{5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="ss"
      />
      <Countdown
        value="{{5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="mm:ss"
      />
      <Countdown
        value="{{5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="HH:mm:ss"
      />
      <Divider>
        时、分、秒
      </Divider>
      <Countdown
        value="{{3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="ss"
      />
      <Countdown
        value="{{3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="mm:ss"
      />
      <Countdown
        value="{{3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="HH:mm:ss"
      />
      <Divider>
        天、时、分、秒
      </Divider>
      <Countdown
        value="{{2 * 86400000 + 3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="ss"
      />
      <Countdown
        value="{{2 * 86400000 + 3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="mm:ss"
      />
      <Countdown
        value="{{2 * 86400000 + 3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="HH:mm:ss"
      />
      <Countdown
        value="{{2 * 86400000 + 3 * 3600000 + 5 * 60000 + 59 * 1000}}"
        step="{{1000}}"
        format="dd:HH:mm:ss"
      />
    </div>
  `,
  events: {
    change(event, data) {
      console.log(event, data)
    },
    finish(event, data) {
      console.log(event, data)
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 剩下的毫秒数 | numeric | - | -
step | 每次递减的毫秒数 | numeric | - | `1000`
format | 显示格式 | string | - | `HH:mm:ss`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 倒计时时间变化时触发 | -
finish | 倒计时完成时触发 | -