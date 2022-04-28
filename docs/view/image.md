> 基础用法

```js
export default {
  template: `
    <Image
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
    />
  `,
}
```

> 使用 url 参数获取更小尺寸的图片

```js
export default {
  template: `
    <Image
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      formatImageUrl="{{formatImageUrl}}"
    />
  `,
  data() {
    return {
      formatImageUrl(data) {
        return 'https://avatars.githubusercontent.com/u/2732303?v=4'
      }
    }
  }
}
```

> 预览操作

```js
export default {
  template: `
    <Image
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      showPreview
      on-preview="previewImage()"
    />
  `,
  methods: {
    previewImage(event, data) {
      console.log('preview', event, data)
    },
  }
}
```

> 上传

```js
export default {
  template: `
    <Image
      width="140"
      height="140"
      uploadTitle="上传图片"
      uploadImage="{{uploadImage}}"
      on-upload-success="uploadSuccess()"
    />
  `,
  data: {
    uploadImage(data) {
      console.log('upload', data)
      data.onStart()
      setTimeout(
        function () {
          data.onSuccess({})
        },
        500
      )
    }
  },
  methods: {
    uploadSuccess(event, data) {
      console.log('uploadSuccess', event, data)
    }
  }
}
```

> 使用上传样式，但实际不上传

```js
export default {
  template: `
    <Image
      width="140"
      height="140"
      uploadTitle="上传图片"
      on-upload-click="upload()"
    />
  `,
  methods: {
    upload() {
      console.log('upload')
    }
  }
}
```

> 简洁风格

```js
export default {
  template: `
    <Image
      width="140"
      height="140"
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      simple
    />
  `
}
```

> 自定义占位图

当没有可显示的图片时，显示占位图。

```js
export default {
  template: `
    <Image
      width="140"
      height="140"
    >
      <template slot="placeholder">
        随便显示啥
      </template>
    </Image>
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
url | 图片地址 | string | - | -
width | 显示宽度 | numeric | - | `60`
height | 显示宽度 | numeric | - | `60`
mode | 显示模式 | string | `scaleToFit`、`aspectFit` | `scaleToFit`
minSize | 允许上传文件的最小尺寸 | numeric | - | -
maxSize | 允许上传文件的最大尺寸 | numeric | - | -
minRatio | 允许上传文件的最小宽高比 | numeric | - | -
maxRatio | 允许上传文件的最大宽高比 | numeric | - | -
minWidth | 允许上传文件的最小宽度 | numeric | - | -
maxWidth | 允许上传文件的最大宽度 | numeric | - | -
minHeight | 允许上传文件的最小高度 | numeric | - | -
maxHeight | 允许上传文件的最大高度 | numeric | - | -
alt | 原生 `alt` 属性 | string | - | -
simple | 是否为简洁风格 | boolean | - | -
showPreview | 是否显示预览图标 | boolean | - | -
accept | 允许什么类型的文件上传，如 `image/*` | string | - | -
formatImageUrl | 图片裁剪函数 | function | - | -
uploadTitle | 上传按钮标题 | string | - | -
uploadingTitle | 正在上传的提示话术 | string | - | -
uploadImage | 上传函数 | function | - | -
cropImage | 上传前的图片裁剪函数 | function | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
placeholder | 自定义占位图

> Events

名称 | 说明
---|---
preview | 点击预览图标时触发
uploadClick | 点击上传按钮时触发
uploadSuccess | 上传成功时触发