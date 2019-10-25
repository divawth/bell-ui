import { Data } from 'yox';
declare type Arg = string | Data;
declare const _default: {
    success(arg: Arg, onClose?: Function): void;
    info(arg: Arg, onClose?: Function): void;
    warning(arg: Arg, onClose?: Function): void;
    error(arg: Arg, onClose?: Function): void;
    config(arg: Record<string, any>): void;
};
export default _default;
