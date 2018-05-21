import { addAlert, addConfirm } from './base'

let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-msgbox-wrapper');
body.append(element);

Yox.prototype.$Alert = function (data) {
    addAlert(data);
};

Yox.prototype.$Confirm = function (data) {
    addConfirm(data);
};
