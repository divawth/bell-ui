import MsgboxTpl from './template/Msgbox.html'
import ConfirmTpl from './template/Confirm.html'

let id = 0;

let createAlert = (data) => {

  let namespace = 'bell-msg-alert-' + id++;
  let body = document.getElementById('bell-msgbox-wrapper');
  let element = document.createElement('div');
  element.setAttribute('id', namespace);
  body.appendChild(element);

  let instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: MsgboxTpl,
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
  let body = Yox.dom.find('#bell-msgbox-wrapper');
  let element = Yox.dom.createElement('div');
  element.setAttribute('id', namespace);
  body.appendChild(element);

  let instance = new Yox({
    el: '#' + namespace,
    replace: true,
    template: ConfirmTpl,
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
