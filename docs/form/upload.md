> 基础用法

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
  },
  events: {
    uploadsuccess: function (event, data) {
      this.set({
        url: data.data.url
      });
    }
  }
}
```

> 上传头像

```js
export default {
  template: `
    <div>
      {{#if avatarUrl}}
        <Avatar src="{{avatarUrl}}" />
      {{/if}}
      <Upload
        action="https://jsonplaceholder.typicode.com/posts/"
        name="avatar"
        listType="picture-card"
        showUploadList="{{false}}"
        onSuccess="{{uploadSuccess}}"
      >
        <div class="upload-el">
          <Icon size="20" name="{{loading ? 'loading' : 'camera'}}" />
        </div>
      </Upload>
      <style>
        .bell-avatar {
          margin-right: 10px;
        }
        .upload-el {
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border: 1px dashed #ccc;
        }
        .upload-el:hover {
          border-color: rgb(45, 140, 240);
        }
      </style>
    </div>
  `,
  data() {
    let me = this
    return {
      data: { },
      uploadSuccess: function (data) {
        me.set({
          avatarUrl: `https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4`
        });
      }
    }
  }
}

```

>! 拖拽上传

#### API

Upload

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
action | 上传的地址 | string | - | -
headers | 上传头部信息 | object | - | -
withCredentials | 上传是否携带 cookie 信息 | boolean | false
multiple | 是否支持多选 | boolean | - | false
accept | 允许什么类型的文件上传 | array | - | -
data | 上传需要的值 | object | - | -
name | 上传文件的文件名 | name | - | -
beforeUpload | 上传前执行的函数 | function | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
start | 开始上传的回调 | -
end | 上传结束的回调 | -
progress | 上传过程中的回调 | progress
success | 上传成功的回调 | response
error | 上传失败的回调 | -
abort | 上传取消的回调 | -