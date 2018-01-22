import { addAlert, addConfirm } from './base'

let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-msgbox-wrapper');
body.append(element);

Yox.prototype.$alert = function (data) {
    addAlert(data);
};

Yox.prototype.$confirm = function (data) {
    addConfirm(data);
};
