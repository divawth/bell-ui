> 基础用法

    export default {
        template: `
            <div>
                <Button on-click="click()">
                    Fade
                </Button>
                <br><br>
                <Transition model="isShow" type="ease-out" mode="fade">
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


> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 用于自动生成 CSS 过渡类名 | string | - | -
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
beforeEnter | 进入动画之前 | -
beforeLeave | 离开动画之前 | -
beforeAppear | 消失动画之前 | -
onEnter | 进入动画 | -
onLeave | 离开动画 | -
onAppear | 消失动画 | -
afterEnter | 进入动画之后 | -
afterLeave | 离开动画之后 | -
afterAppear | 消失动画之后 | -
