> 文件上传

只提供基本的选择文件和上传文件的功能，不支持拖拽文件，也没有预设 UI。

```js
export default {
  template: `
    <div>
      <Upload upload="{{uploadFile}}">
        <Button>Upload files</Button>
      </Upload>
      <img src="{{url}}">
    </div>
  `,
  data: function () {
    return {
      uploadFile(data) {

      }
    }
  }
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
multiple | 是否支持多选 | boolean | - | -
accept | 允许什么类型的文件上传，如 `image/*` | string | - | -
draggable | 是否支持拖拽上传 | boolean | - | -
beforeUpload | 上传前执行的函数 | function | - | -
upload | 上传单个文件执行的函数，传入的回调函数需按时机调用 | function | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
start | 开始上传的回调 | `{id: xx, file: xx}`
end | 上传结束的回调 | `{id: xx, file: xx}`
progress | 上传过程中的回调 | `{id: xx, file: xx, progress: xx}`
success | 上传成功的回调 | `{id: xx, file: xx, response: xx}`
error | 上传失败的回调 | `{id: xx, file: xx}`
abort | 上传取消的回调 | `{id: xx, file: xx}`