import { Data } from 'yox';
declare function checkInteger(rule: Data, value: any): "type" | "min" | "max";
declare function checkNumber(rule: Data, value: any): "type" | "min" | "max";
declare function checkString(rule: Data, value: any): "type" | "min" | "max" | "empty" | "pattern";
declare function checkBoolean(rule: Data, value: any): string;
declare function checkEnum(rule: Data, value: any): string;
declare function checkArray(rule: Data, value: any): "type" | "min" | "max" | "itemType";
declare function checkObject(rule: Data, value: any): string;
declare class Validator {
    rules: Record<string, (rule: Data, value: any) => string | void>;
    constructor();
    validate(data: Data, rules: Data, messages: Data): {};
}
export { Validator, checkInteger, checkNumber, checkString, checkBoolean, checkEnum, checkObject, checkArray, };
