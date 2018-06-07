> 基础用法

    export default {
        template: `
            <div>
                <Spinner size="small"></Spinner>
                <Spinner></Spinner>
                <Spinner size="large"></Spinner>
            </div>
        `
    }

> 设置类型

    export default {
        template: `
            <div>
                <Spinner type="error"></Spinner>
                <Spinner type="warning"></Spinner>
                <Spinner type="success"></Spinner>
            </div>
        `
    }

> 设置文字

    export default {
        template: `
            <div>
                <Spinner>
                    加载中...
                </Spinner>
                <Spinner>
                    <template slot="children">
                        <Icon type="load-c" style="font-size: 18px;" className="demo-spin-icon-load"></Icon>
                        <div>
                            Loading
                        </div>
                    </template>
                </Spinner>
                <style>
                    .bell-spinner {
                        padding: 15px;
                    }
                    .demo-spin-icon-load{
                        animation: ani-demo-spin 1s linear infinite;
                    }
                    @keyframes ani-demo-spin {
                        from { transform: rotate(0deg);}
                        50%  { transform: rotate(180deg);}
                        to   { transform: rotate(360deg);}
                    }
                </style>
            </div>
        `,
    }

> 设置文字 loading

    export default {
        template: `
            <div >
                <div class="bell-border demo-spin-article">
                    <h3>登金陵凤凰台</h3>
                    <address>李白</address>
                    <article>
                        <p>凤凰台上凤凰游，凤去台空江自流。</p>
                        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                        <p>三山半落青天外，二水中分白鹭洲。</p>
                        <p>总为浮云能蔽日，长安不见使人愁。</p>
                    </article>
                    {{#if spinShow}}
                    <Spinner size="large" fix></Spinner>
                    {{/if}}
                </div>
                <br>
                切换显示状态：
                <Switch model="spinShow" onChange="{{onChange}}"></Switch>

                <style>
                    .demo-spin-article {
                        position: relative;
                    }
                </style>
            </div>
        `,
        data: function () {
            return {
                spinShow: false,
                onChange: function() {
                    this.toggle('spinShow');
                }
            }
        }
    }


#### API

> slot

参数 | 说明
---|---
children | 自定义 Spinner 的内容，设置 slot 后，默认的样式不生效

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, tiny | -
text | 文字 | string | - | -
fix | 是否固定 | string | - | -
type | 风格 | string | circle, - | -
