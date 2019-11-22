> Success

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
      <template slot="extra">
        <Button type="primary">
          Go Console
        </Button>
        <Button>
          Buy Again
        </Button>
      </template>
    </Result>
  `
}
```

> Error

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
    >
      <template slot="extra">
        <Button type="primary">
          Go Console
        </Button>
        <Button>
          Buy Again
        </Button>
      </template>
    </Result>
  `
}
```

> Info

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Result
      status="info"
      title="Your operation has been executed."
    >
      <template slot="extra">
        <Button type="primary">
          Go Console
        </Button>
      </template>
    </Result>
  `
}
```

> Warning

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Result
      status="warning"
      title="There are some problems with your operation."
    >
      <template slot="extra">
        <Button type="primary">
          Go Console
        </Button>
      </template>
    </Result>
  `
}
```

> 自定义图标

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Result
      title="Great, we have done all the operations!"
    >
      <template slot="icon">
        <Icon
          name="emotion-happy-fill"
          size="70"
          color="#2d8cf0"
        />
      </template>
      <template slot="extra">
        <Button type="primary">
          Go Console
        </Button>
      </template>
    </Result>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题 | string | - | -
subTitle | 内容 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
icon | 自定义图标
extra | 自定义底部栏