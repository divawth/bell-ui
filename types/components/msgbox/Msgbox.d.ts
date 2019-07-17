import { Data } from 'yox';
declare function Alert(data: Data): void;
declare function Confirm(data: Data): void;
declare const _default: {
    Alert: typeof Alert;
    Confirm: typeof Confirm;
};
export default _default;
