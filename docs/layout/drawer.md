> 基础抽屉

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div class="template">
      <Button on-click="this.set('value1', true)" type="primary">Open</Button>
      <Drawer title="Basic Drawer" closable="false" model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  `,
  data: function () {
    return {
      value1: false
    }
  }
}
```

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div class="template">
    <RadioGroup name="pos" model="position" vertical>
      <div style="padding: 10px 0;">
        位置
      </div>
      <Radio value="left" checked>
        左侧
      </Radio>
      <Radio value="right">
        右侧
      </Radio>
      <Radio value="top">
        上方
      </Radio>
      <Radio value="bottom">
        下方
      </Radio>
    </RadioGroup>
    <div style="padding: 10px 0;">
      使用遮罩层
    </div>
    <Switch model="useMask" on-change="change()">
      <template slot="checkedText">开</template>
      <template slot="unCheckedText">关</template>
    </Switch>

    <Button style="margin-top: 15px;" on-click="click()" fluid>
      toggle drawer
    </Button>
    <Drawer position="{{position}}" useMask="{{useMask}}" open="{{isOpen}}" size="300">
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
      </ul>
    </Drawer>
  </div>
  `,
  data: function () {
    return {
      useMask: false,
      position: 'left',
      isOpen: false
    }
  },
  methods: {
    change: function (event, data) {
      console.log(data.checked);
    },
    click: function () {
      var me = this;
      me.set({
        isOpen: true
      });
      console.log(me.get('useMask'), me.get('position'), me.get('isOpen'))
    }
  }
}
```
