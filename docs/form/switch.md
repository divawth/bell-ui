> 基础用法

    export default {
        template: `
            <Switch model="single" onChange="{{onChange}}">

            </Switch>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

> 设置 size 为 large 或 small 使用大号和小号的开关

    export default {
        template: `
            <div>
                <Switch size="large"></Switch>
                <Switch></Switch>
                <Switch size="small"></Switch>
            </div>
        `
    }

> 设置 type 修改风格颜色

    export default {
        template: `
            <div>
                <Switch type="info"></Switch>
                <Switch type="success"></Switch>
                <Switch type="warning"></Switch>
                <Switch type="error"></Switch>
            </div>
        `
    }

> 修改文字和图标

如果使用2个汉字，将开关尺寸设置为 large

    export default {
        template: `
            <div>
                <Switch type="info" onLabel="开" offLabel="关">
                </Switch>
                <Switch size="large" type="info" onLabel="开" offLabel="关">
                </Switch>
                <br><br>
                <Switch size="large" type="info" onLabel="开启" offLabel="关闭">
                </Switch>

                <Switch type="success">
                    <span class="bell-switch-on">开</span>
                    <span class="bell-switch-off">关</span>
                </Switch>
                <Switch size="large" type="warning">
                    <span class="bell-switch-on">ON</span>
                    <span class="bell-switch-off">OFF</span>
                </Switch>
                <Switch type="error"></Switch>
            </div>
        `
    }


> checked 默认选中

    export default {
        template: `
            <div>
                <Switch type="info" checked></Switch>
                <Switch type="success" checked></Switch>
                <Switch type="warning" checked></Switch>
                <Switch type="error" checked></Switch>
            </div>
        `
    }

> disabled 禁用

    export default {
        template: `
            <div>
                <Switch type="info" disabled></Switch>
                <Switch type="success" disabled checked></Switch>
                <Switch type="warning" disabled checked></Switch>
                <Switch type="error" disabled></Switch>
            </div>
        `
    }

#### API

Switch

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 选中值 | string, boolean | - | -
onLabel | 选项选中描述话术 | string | - | -
offLabel | 选项非选中时描述话术 | string | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | string， boolean | - | false
checked | 是否选中 | string， boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值变化的时候回调 | value
