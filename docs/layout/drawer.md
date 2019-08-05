> 基础抽屉

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

```js
export default {
  template: `
    <div class="template">
      <Button on-click="this.set('value1', true)" type="primary">Open</Button>
      <Drawer title="Basic Drawer" closable="{{true}}" model="value1">
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

> 自定义位置

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div class="template">
    <RadioGroup name="pos" model="placement" vertical>
      <div style="padding: 10px 0">
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
    <br><br>
    <Button style="margin-top: 15px;" type="primary" on-click="open()">
      toggle drawer
    </Button>
    <Drawer placement="{{placement}}"
      model="isOpen"
      width="300"
      title="Basic Drawer"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
  `,
  data: function () {
    return {
      placement: 'left',
      isOpen: false
    }
  },
  methods: {
    change: function (event, data) {
      console.log(data.checked);
    },
    open: function () {
      this.set({
        isOpen: true
      })
    }
  }
}
```

> 对象编辑

用于承载编辑相关操作，需要点击关闭按钮关闭。

```js
export default {
  template: `
    <div class="template">
      <Button on-click="this.set('value1', true)" type="primary">Open</Button>
      <Drawer title="Create"
        maskClosable="{{false}}"
        width="720"
        model="value1"
        on-close="close()"
      >
        <Form model="formData">
          <Row gutter="32">
            <Col span="12">
              <FormItem label="Name" label-position="top">
                <Input model="formData.name" placeholder="please enter user name" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="Url" label-position="top">
                <Input model="formData.url" placeholder="please enter url">
                  <span slot="prepend">http://</span>
                  <span slot="append">.com</span>
                </Input>
              </FormItem>
            </Col>
          </Row>
          <Row gutter="32">
            <Col span="12">
              <FormItem label="Owner" label-position="top">
                <Select model="formData.owner" placeholder="please select an owner">
                  <Option value="jobs">Steven Paul Jobs</Option>
                  <Option value="ive">Sir Jonathan Paul Ive</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="Type" label-position="top">
                <Select model="formData.type" placeholder="please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row gutter="32">
            <Col span="12">
              <FormItem label="Approver" label-position="top">
                <Select model="formData.approver" placeholder="please choose the approver">
                  <Option value="jobs">Steven Paul Jobs</Option>
                  <Option value="ive">Sir Jonathan Paul Ive</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="DateTime" label-position="top">
                <DatePicker model="formData.date" type="dateRange" placeholder="please select the date" style="display: block" placement="bottom-start"></DatePicker>
              </FormItem>
            </Col>
          </Row>
            <FormItem label="Description" label-position="top">
              <Input type="textarea" model="formData.desc" rows="4" placeholder="please enter the description" />
            </FormItem>
        </Form>
        <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" on-click="this.set('value1', false)">Cancel</Button>
          <Button type="primary" on-click="this.set('value1', false)">Submit</Button>
        </div>
      </Drawer>
      <style>
        .demo-drawer-footer {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          border-top: 1px solid #e8e8e8;
          padding: 10px 16px;
          text-align: right;
          background: #fff;
        }
      </style>
    </div>
  `,
  data: function () {
    return {
      value1: false
    }
  },
  methods: {
    close() {
      console.log('close')
    }
  }
}
```

> 信息预览抽屉

需要快速预览对象概要时使用，点击遮罩区关闭。

```js
export default {
  template: `
    <div class="template">
      <Button on-click="this.set('value1', true)" type="primary">
        View Profile
      </Button>
      <Drawer closable="false" width="640" model="value1">
        <p>User Profile</p>
        <p>Personal</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Full Name: Aresn
            </Col>
            <Col span="12">
              Account: aresn@aresn.com
            </Col>
          </Row>
          <Row>
            <Col span="12">
              City: BeiJing
            </Col>
            <Col span="12">
              Country: China
            </Col>
          </Row>
          <Row>
            <Col span="12">
              Birthday: May 14, 1991
            </Col>
            <Col span="12">
              Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
            </Col>
          </Row>
          Message: Hello, Developer
        </div>
        <Divider />
        <p>Company</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Position: Programmer
            </Col>
            <Col span="12">
              Responsibilities:Coding
            </Col>
          </Row>
          <Row>
            <Col span="12">
              Department: Map visualization
            </Col>
          </Row>
          Skills:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
        </div>
        <Divider />
        <p>Contacts</p>
        <div class="demo-drawer-profile">
          <Row>
            <Col span="12">
              Email: admin@aresn.com
            </Col>
            <Col span="12">
              Phone Number: +86 18888888888
            </Col>
          </Row>
          <Row>
            <Col span="12">
              GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
            </Col>
          </Row>
        </div>
      </Drawer>
      <style>
        p {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
          display: block;
          margin-bottom: 16px;
        }
      </style>
    </div>
  `,
  data: function () {
    return {
      value1: false
    }
  }
}
```

> 多层抽屉

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

```js
export default {
  template: `
    <div class="template">
      <Button on-click="this.set('value5', true)" type="primary">Open Drawer</Button>
      <Drawer title="Multi-level drawer" width="512" closable="false" model="value5">
        <Button on-click="this.set('value6', true)" type="primary">Two-level Drawer</Button>
      </Drawer>
      <Drawer title="Two-level Drawer" closable="false" model="value6">
        This is two-level drawer.
      </Drawer>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
open | 抽屉是否显示，可使用 model 双向绑定数据 | boolean | - | false
title | 抽屉标题，如果使用 slot 自定义了页头，则 title 无效 | string | - | -
width | 抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素 | string | - | 256
height | 高度, 只在方向为 'top'或'bottom' 时生效 | string | - | 256
closable | 是否显示右上角的关闭按钮 | boolean | - | false
maskClosable | 是否允许点击遮罩层关闭 | boolean | - | false
mask | 是否显示遮罩层 | boolean | - | true
placement | 抽屉的方向 | string | left, right, top, bottom | left

> Slots

参数 | 说明
---|---
title | title

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 收起的时候的回调 | -
open | 展开的时候的回调 | -
