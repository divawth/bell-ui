let id = 0;

let createAlert = (data) => {

    let namespace = 'bell-msg-alert-' + id++;
    let body = document.getElementById('bell-msgbox-wrapper');
    let element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    let instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: `
            <div class="bell-msg-alert-wrapper
            {{#if isHidden}} bell-msg-alert-hidden{{/if}}
            ">
                <div class="bell-msg-alert"{{#if width}} style="width: {{width}}px;"{{/if}}>
                    {{#if closable}}
                    <div class="bell-msg-alert-close" on-click="hide()">
                        <i class="bell-icon bell-icon-ios-close-empty"></i>
                    </div>
                    {{/if}}

                    {{#if title}}
                    <div class="bell-msg-alert-title bell-text-main bell-text-medium">
                        {{{title}}}
                    </div>
                    {{/if}}

                    <div class="bell-msg-alert-desc bell-text-sub bell-text-small">
                        {{{content}}}
                    </div>

                    <div class="bell-msg-alert-footer">
                        <Button type="{{button.type}}" on-click="hide()">
                            {{button.text}}
                        </Button>
                    </div>
                </div>
                <div class="bell-msg-mask" on-click="maskClick()"></div>
            </div>
        `,
        data() {
            let me = this;
            return {
                isHidden: true,
                closable: data.closable,
                title: data.title || '温馨提示',
                content: data.content || data,
                button: data.button || {
                    text: '我知道了',
                    type: 'info'
                }
            }
        },

        methods: {
            maskClick() {
                if (!data.maskClosable) {
                    return;
                }
                this.hide();
            },
            hide() {
                let me = this;
                let transTime = 500;
                me.set({
                    isHidden: true
                });
                me.transTimeFuc = setTimeout(
                    () => {
                        element.remove();
                        if (Yox.is.func(data.onClose)) {
                            data.onClose();
                        }
                        if (instance) {
                            instance.destroy();
                        }
                    },
                    transTime
                );
            }
        },

        afterMount() {
            let me = this;
            let transTime = 300;
            me.transTimeFuc = setTimeout(
                () => {
                    me.set({
                        isHidden: false
                    });
                },
                transTime
            );
        },

        beforeDestroy() {
            let me = this;
            clearTimeout(me.transTimeFuc);
        }
    });
};

let createConfirm = (data) => {

    let namespace = 'bell-msg-confirm-' + id++;
    let body = document.getElementById('bell-msgbox-wrapper');
    let element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    let instance = new Yox({
        el: '#' + namespace,
        replace: true,
        template: `
            <div class="bell-msg-confirm-wrapper
            {{#if isHidden}} bell-msg-confirm-hidden{{/if}}
            ">
                <div class="bell-msg-confirm"{{#if width}} style="width: {{width}}px;{{/if}}">
                    {{#if closable}}
                    <div class="bell-msg-confirm-close" on-click="hide()">
                        <i class="bell-icon bell-icon-ios-close-empty"></i>
                    </div>
                    {{/if}}

                    {{#if title}}
                    <div class="bell-msg-confirm-title bell-text-main bell-text-medium">
                        {{{title}}}
                    </div>
                    {{/if}}

                    <div class="bell-msg-confirm-desc bell-text-sub bell-text-small">
                        {{{content}}}
                    </div>
                    {{#if buttons}}
                    <div class="bell-msg-confirm-footer">
                        {{#each buttons:index}}
                        <Button type="{{type}}" on-click="buttonClick(index)">
                            {{text}}
                        </Button>
                        {{/each}}
                    </div>
                    {{/if}}
                </div>
                <div class="bell-msg-mask" on-click="maskClick()"></div>
            </div>
        `,
        data() {
            let me = this;
            return {
                isHidden: true,
                width: data.width,
                closable: data.closable,
                title: data.title || data,
                content: data.content || data,
                buttons: data.buttons,
                maskClosable: data.maskClosable
            }
        },

        methods: {

            buttonClick(index) {
                let me = this;
                let handler = me.get('buttons.' + index + '.action');
                handler.call(instance);
                return false;
            },

            maskClick() {
                if (!data.maskClosable) {
                    return;
                }
                this.hide();
            },

            hide() {
                let me = this;
                let transTime = 500;
                me.set({
                    isHidden: true
                });
                me.transTimeFuc = setTimeout(
                    () => {
                        element.remove();
                        if (Yox.is.func(data.onClose)) {
                            data.onClose();
                        }
                        if (instance) {
                            instance.destroy();
                        }
                    },
                    transTime
                );
            }
        },

        afterMount() {
            let me = this;
            let transTime = 300;
            me.transTimeFuc = setTimeout(
                () => {
                    me.set({
                        isHidden: false
                    });
                },
                transTime
            );
        },

        beforeDestroy() {
            let me = this;
            clearTimeout(me.transTimeFuc);
        }
    });
};

export let addAlert = (data) => {
    createAlert(data);
};

export let addConfirm = (data) => {
    createConfirm(data);
};
