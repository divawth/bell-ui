> 基础用法

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="60"
      height="60"
    />
  `,
}
```

> 图片裁剪

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="60"
      height="60"
      formatUrl="{{formatUrl}}"
    />
  `,
  data() {
    return {
      formatUrl(data) {
        console.log('formatUrl', data)
        return 'https://avatars.githubusercontent.com/u/2732303?v=4'
      }
    }
  }
}
```

> 放大操作

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="140"
      height="140"
      showZoom
      on-zoom="zoomImage()"
    />
  `,
  methods: {
    zoomImage() {
      console.log('zoom')
    },
  }
}
```

> 占位图

当还没有缩略图时，可显示占位图。

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
    >
      <template slot="placeholder">
        随便显示啥
      </template>
    </Thumbnail>
  `
}
```

> 使用上传样式，但实际不上传

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
      uploadTitle="上传图片"
      on-upload="upload()"
    >
    </Thumbnail>
  `,
  methods: {
    upload() {
      console.log('upload')
    }
  }
}
```

> 上传

```js
export default {
  template: `
    <Thumbnail
      width="100"
      height="100"
      mode="aspectFit"
      uploadTitle="上传图片"
      uploadImage="{{uploadImage}}"
      on-change="change()"
    >
    </Thumbnail>
  `,
  data: {
    uploadImage(data) {
      console.log('upload', data)
      data.onStart()
      setTimeout(
        function () {
          data.onError('服务器异常')
          // data.onSuccess({})
        },
        1000
      )
    }
  },
  methods: {
    change(event, data) {
      console.log('change', event, data)
    }
  }
}
```

> 简洁风格

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      simple
    />
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
url | 图片地址 | string | - | -
width | 显示宽度 | numeric | - | -
height | 显示宽度 | numeric | - | -
alt | 原生 `alt` 属性 | string | - | -
simple | 是否为简洁风格 | boolean | - | -
loading | 是否加载中 | boolean | - | -
showZoom | 是否显示放大图标 | boolean | - | -
formatUrl | 图片裁剪函数 | function | - | -
beforeUpload | 上传前执行的函数 | function | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
placeholder | 自定义占位图

> Events

名称 | 说明
---|---
error | 图片加载失败时触发
zoom | 点击放大图标时触发