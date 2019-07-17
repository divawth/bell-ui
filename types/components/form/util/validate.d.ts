import { Data } from "yox";
declare function checkInteger(rule: Data, value: any): "type" | "min" | "max";
declare function checkNumber(rule: Data, value: any): "type" | "min" | "max";
declare function checkString(rule: Data, value: any): "type" | "min" | "max" | "empty" | "pattern";
declare function checkBoolean(rule: Data, value: any): string;
declare function checkEnum(rule: Data, value: any): string;
declare function checkArray(rule: Data, value: any): "type" | "min" | "max" | "itemType";
declare function checkObject(rule: Data, value: any): string;
interface ValidateType {
    int: (rule: Data, value: any) => string;
    integer: (rule: Data, value: any) => string;
    number: (rule: Data, value: any) => string;
    string: (rule: Data, value: any) => string;
    bool: (rule: Data, value: any) => string;
    boolean: (rule: Data, value: any) => string;
    enum: (rule: Data, value: any) => string;
    array: (rule: Data, value: any) => string;
    object: (rule: Data, value: any) => string;
}
declare type TranslateType = (key: string, value: any, errorType: any, rule: Data) => void;
declare class Validator {
    rules: ValidateType;
    messages: Data;
    translate: TranslateType;
    constructor(translate?: TranslateType);
    validate(data: Data, rules: Data, messages: Data): {};
}
export { Validator, checkInteger, checkNumber, checkString, checkBoolean, checkEnum, checkObject, checkArray };
