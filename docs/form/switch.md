> 基础用法

    export default {
        template: `
            <div>
                <Switch model="single" on-change="change()">
                </Switch>
                <p class="bell-text">{{single}}</p>
            </div>
        `,
        methods: {
            change: function (events, data) {
                console.log(data.isChecked);
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
                <Switch></Switch>
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
                <Switch type="info">
                    <template slot="checkedText">开</template>
                    <template slot="unCheckedText">关</template>
                </Switch>
                <Switch size="large" type="info">
                    <template slot="checkedText">开</template>
                    <template slot="unCheckedText">关</template>
                </Switch>
                <br><br>
                <Switch size="large" type="info">
                    <template slot="checkedText">开启</template>
                    <template slot="unCheckedText">关闭</template>
                </Switch>
                <Switch type="success">
                    <template slot="checkedText">开</template>
                    <template slot="unCheckedText">关</template>
                </Switch>
                <Switch size="large" type="warning">
                    <template slot="checkedText">ON</template>
                    <template slot="unCheckedText">OFF</template>
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
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | boolean | - | false
checked | 是否选中 | boolean | - | -

> Slots

参数 | 说明
---|---
prepend | 自定义选中时的内容
append | 自定义未选中时的内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value
