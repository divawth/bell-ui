import { addAlert, addConfirm } from './base';

let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-msgbox-wrapper');
body.append(element);

Yox.prototype.$Alert = (data) => {
    addAlert(data);
};

Yox.prototype.$Confirm = (data) => {
    addConfirm(data);
};
