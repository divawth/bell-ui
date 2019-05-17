> 基础用法

```js
export default {
  template: `
    <div>
      <Checkbox model="single">
        Checkbox
      </Checkbox>

      <p>{{single}}</p>
    </div>
  `,
  data: function () {
    return {
      single: false
    }
  }
}
```


> CheckboxGroup 组用法

```js
export default {
  template: `
    <div>
      <CheckboxGroup model="social">
        <Checkbox value="twitter">
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
      <p> [ {{showArray(social)}} ] </p>
      <CheckboxGroup model="fruit">
        <Checkbox value="香蕉"></Checkbox>
        <Checkbox value="苹果"></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
      </CheckboxGroup>
      <p> [ {{showArray(fruit)}} ] </p>
    </div>
  `,
  data: function () {
    return {
      social: [ "snapchat" ],
      fruit: [ "香蕉" ]
    }
  },
  filters: {
    showArray: function (arr) {
      return arr.join(', ');
    }
  }
}
```

> 不可用 

```js
export default {
  template: `
    <div>
      <Checkbox model="disabledSingle" disabled>Checkbox</Checkbox>
      <CheckboxGroup model="disabledGroup">
          <Checkbox value="香蕉" disabled></Checkbox>
          <Checkbox value="苹果" disabled></Checkbox>
          <Checkbox value="西瓜"></Checkbox>
      </CheckboxGroup>
    </div>
  `,
  data () {
    return {
      disabledSingle: true,
      disabledGroup: ['苹果']
    }
  }
}
```

> 与其它组件通信 

```js
export default {
  template: `
    <div>
      <Checkbox model="checked" disabled="{{disabled}}">
        <span>{{Checked ? 'Checked' : 'Unchecked'}}</span>
        - 
        <span>{{disabled ? 'Disabled' : 'Usable'}}</span>
      </Checkbox>
      <br>
      <Button type="primary" on-click="toggle('checked')">
        <span>{{Checked ? 'Checked' : 'Unchecked'}}</span>
      </Button>
      <Button type="primary" on-click="toggle('disabled')">
        <span>{{disabled ? 'Disabled' : 'Usable'}}</span>
      </Button>
    </div>
  `,
  data () {
    return {
      disabledSingle: true,
      disabledGroup: ['苹果']
    }
  }
}
```

> type 切换风格

    export default {
        template: `
            <div>
                <CheckboxGroup type="success" model="social" on-change="change()">
                    <Checkbox value="twitter">
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <span>Snapchat</span>
                    </Checkbox>
                </CheckboxGroup>
                <br><br>
                <Checkbox type="success">
                    <span>success</span>
                </Checkbox>
                <br><br>
                <Checkbox type="info">
                    <span>info</span>
                </Checkbox>
                <br><br>
                <Checkbox type="warning">
                    <span>warning</span>
                </Checkbox>
                <br><br>
                <Checkbox type="error">
                    <span>error</span>
                </Checkbox>
            </div>
        `,
        methods: {
            change: function (events, data) {
                console.log(data.value)
            }
        },
        data: function () {
            return {
                social: []
            }
        }
    }

> 添加全选

    export default {
        template: `
            <div>
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px; margin-bottom:6px;">
                    <Checkbox indeterminate model="checkAll" on-change="checkAllChange()">
                        全选
                    </Checkbox>
                </div>
                <CheckboxGroup type="success" model="fruit" on-change="change()">
                    <Checkbox value="1">
                        香蕉
                    </Checkbox>
                    <Checkbox value="2">
                        苹果
                    </Checkbox>
                    <Checkbox value="3">
                        西瓜
                    </Checkbox>
                </CheckboxGroup>
            </div>
        `,

        methods: {
            checkAllChange: function (events, data) {
                var me = this;
                if (data.isChecked) {
                    me.set({
                        fruit: ['1', '2', '3']
                    });
                }
                else {
                    me.set({
                        fruit: []
                    });
                }
            },
            change: function (events, data) {
                console.log(data)
                var me = this;
                if (data && data.value.length == 3) {
                    me.set({
                        checkAll: true
                    });
                }
                else {
                    me.set({
                        checkAll: false
                    });
                }
            }
        },

        data: function () {
            var me = this;
            return {
                checkAll: false,
                fruit: true
            }
        }
    }



> 默认选中状态

    export default {
        template: `
            <Checkbox checked model="single" onChange="{{onChange}}">
                Checkbox
            </Checkbox>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

#### API

Checkbox

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 选中值 | string, boolean | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | string， boolean | - | false
checked | 是否选中 | string， boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value


CheckboxGroup

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | checkbox 的 name | string | - | -
model | 选中值 | string, boolean | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | string， boolean | - | false
vertical | 是否使用垂直排版 | string， boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value

