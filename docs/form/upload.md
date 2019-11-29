> 文件上传

只提供基本的选择文件和上传文件的功能，不支持拖拽文件，也没有预设 UI。

```js
export default {
  template: `
    <div>
      <Upload action="https://jsonplaceholder.typicode.com/posts" data="{{data}}">
        <Button>Upload files</Button>
      </Upload>
      <img src="{{url}}">
    </div>
  `,
  data: function () {
    return {
      data: {
      }
    }
  }
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
action | 上传的地址 | string | - | -
headers | 上传头部信息 | object | - | -
withCredentials | 上传是否携带 cookie 信息 | boolean | `false`
multiple | 是否支持多选 | boolean | - | `false`
accept | 允许什么类型的文件上传，如 `image/*` | string | - | -
data | 上传需要的值 | object | - | -
name | 上传文件的文件名 | name | - | `file`
beforeUpload | 上传前执行的函数 | function | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
start | 开始上传的回调 | `{id: xx, file: xx}`
end | 上传结束的回调 | `{id: xx, file: xx}`
progress | 上传过程中的回调 | `{id: xx, file: xx, progress: xx}`
success | 上传成功的回调 | `{id: xx, file: xx, response: xx}`
error | 上传失败的回调 | `{id: xx, file: xx}`
abort | 上传取消的回调 | `{id: xx, file: xx}`