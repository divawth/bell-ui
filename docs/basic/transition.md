> Fade 淡入淡出

    export default {
        template: `
            <div>
                <Button on-click="click()">
                    Fade
                </Button>
                <br><br>
                <Transition appear model="isShow" type="ease-out" mode="fade">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        fade-ease-out
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="ease-in" mode="fade">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        fade-ease-in
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="linear" mode="fade">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        fade-linear
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="ease" mode="fade">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        fade-ease
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="ease-in-out" mode="fade">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        fade-ease-in-out
                    </div>
                </Transition>
            </div>
        `,
        methods: {
            click: function () {
                this.set({
                    isShow: !this.get('isShow')
                });
            }
        }
    }

> Zoom 缩放

    export default {
        template: `
            <div>
                <Button on-click="click()">
                    Zoom
                </Button>
                <br><br>
                <Transition model="isShow" type="lineart" mode="zoom-left">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-left
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="linear" mode="zoom-right">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-right
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="linear" mode="zoom-top">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-top
                    </div>
                </Transition>
                <br><br>
                <Transition model="isShow" type="linear" mode="zoom-bottom">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-bottom
                    </div>
                </Transition>

                <br><br>
                <Transition model="isShow" type="linear" mode="zoom-center-y">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-center-y
                    </div>
                </Transition>

                <br><br>
                <Transition model="isShow" type="linear" mode="zoom-center-x">
                    <div style="
                        width: 100px;
                        height: 100px;
                        line-height: 100px;
                        background-color: #2892F0;
                        text-align:  center;
                        color:  #ffff;
                    ">
                        zoom-center-x
                    </div>
                </Transition>
            </div>
        `,
        methods: {
            click: function () {
                this.set({
                    isShow: !this.get('isShow')
                });
            }
        }
    }

> Collapse 折叠效果

    export default {
        template: `
            <div>
                <Button on-click="click()">
                    Collapse
                </Button>
                <br><br>
                <Transition model="isShow" type="lineart" mode="collapse">
                    <div style="background: #2892F0">
                        <div style="
                            width: 100px;
                            height: 100px;
                            line-height: 100px;
                            text-align:  center;
                            color:  #ffff;
                        ">
                            Panel 1
                        </div>

                        <div style="
                            width: 100px;
                            height: 100px;
                            line-height: 100px;
                            text-align:  center;
                            color:  #ffff;
                        ">
                            Panel 2
                        </div>
                    </div>
                </Transition>
            </div>
        `,
        methods: {
            click: function () {
                this.set({
                    isShow: !this.get('isShow')
                });
            }
        }
    }


> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
appear | 是否在初始渲染时使用过渡 | boolean | - | false
css | 是否使用 CSS 过渡类。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子 | boolean | - | true
type | 指定过渡事件类型，侦听过渡何时结束 | string | linear, ease, ease-in, ease-out, ease-in-out | -
mode | 动画类型 | string | zoom, fade, collapse | -
enterClass | 类名 | string | - | -
leaveClass | 类名 | string | - | -
appearClass | 类名 | string | - | -
enterToClass | 类名 | string | - | -
leaveToClass | 类名 | string | - | -
appearToClass | 类名 | string | - | -
enterActiveClass | 类名 | string | - | -
leaveActiveClass | 类名 | string | - | -
appearActiveClass | 类名 | string | - | -


> Events

事件名称 | 说明 | 回调参数
---|---|---
onEnter | 进入动画 | -
onLeave | 离开动画 | -
onAppear | 消失动画 | -
onEnd | 结束动画 | -
