> 基础用法

```js
export default {
  template: `
    <div>
      <Checkbox model="single">
        Checkbox
      </Checkbox>

      <Checkbox checked>
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
      <br/><br/>
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

```js
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
  data () {
    return {
      social: []
    }
  },
  methods: {
    change: function (events, data) {
      console.log(data.selected)
    }
  }
}
```

> 添加全选

```js
export default {
  template: `
    <div>
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px; margin-bottom:6px;">
        <Checkbox indeterminate="{{indeterminate}}" model="checkAll" on-change="checkAllChange($data)">
          全选
        </Checkbox>
      </div>
      <CheckboxGroup type="success" model="fruit" on-groupChange="groupChange($data)">
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
    checkAllChange: function (data) {
      let indeterminate = this.get('fruit').length >= 1 && this.get('fruit').length < 3
      if (data.checked) {
        this.set('fruit', ['1', '2', '3'])
      } else if (!indeterminate) {
        this.set('fruit', [])
      }
      this.set('indeterminate', indeterminate)
    },
    groupChange: function (data) {
      let value = data.selected
      if (value.length === 3) {
        this.set({
          checkAll: true,
          indeterminate: false
        })
      } else if (value.length > 0) {
        this.set({
          checkAll: false,
          indeterminate: true
        })
      } else {
        this.set({
          checkAll: false,
          indeterminate: false
        })
      }
      
      console.log('groupChange')
    }
  },

  data: function () {
    return {
      indeterminate: false,
      checkAll: false,
      fruit: ['1']
    }
  }
}
```

> vertical

```js
export default {
  template: `
    <div>
      <CheckboxGroup vertical model="social">
        <Checkbox value="twitter">
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <span>Facebook</span>
        <Checkbox value="github">
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
      <p> [ {{showArray(social)}} ] </p>
      <CheckboxGroup vertical model="fruit">
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

> 设置 size

```js
export default {
  template: `
    <div>
      <Checkbox size="tiny" model="single">
        Checkbox
      </Checkbox>
      <br><br>
      <Checkbox size="small" model="single">
        Checkbox
      </Checkbox>
      <br><br>
      <Checkbox size="default" model="single">
        Checkbox
      </Checkbox>
      <br><br>
      <Checkbox size="large" model="single">
        Checkbox
      </Checkbox>
      <br><br>
      <Checkbox size="huge" model="single">
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

#### API

Checkbox

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked | 只在单独使用时有效。可以使用 model 双向绑定数据 | string | - | -
label | 文本描述 | string | - | -
disabled | 是否禁用 | boolean | - | false
indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false
type | 风格 | string | success, info, warning, error, primary | primary
size | 大小 | string | large, huge, small, tiny, default | default

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | checked, value


CheckboxGroup

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | checkbox 的 name | string | - | -
type | 风格 | string | success, info, warning, error, primary | primary
disabled | 是否禁用 | boolean | - | false
vertical | 是否使用垂直排版 | boolean | - | false
selected | 只在单独使用时有效。可以使用 model 双向绑定数据 | Array | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
groupChange | 值变化的时候回调 | selected

