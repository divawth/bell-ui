> 基础用法

    export default {
      template: `
        <div>
          <Upload action="/v1/upload/image" data="{{data}}">
            <Button>Upload files</Button>
          </Upload>
          <img src="{{url}}">
        </div>
      `,
      data: function () {
        return {
          data: {
            app_version: '2.0.0'
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

>! 拖拽上传

#### API

Upload

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
data | 上传需要的值 | object | - | -
action | 上传的地址 | string | - | -
multiple | 是否支持多选 | boolean | - | false
accept | 文件类型 | array | - | -