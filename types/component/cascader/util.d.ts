export declare function isLeafOption(option: any): boolean;
export declare function getOptionsProps(options: any[], propName: string): any[];
export declare function renderValue(value: any): any;
export declare function formatOptions(options: any[] | void, values: any[] | void, multiple: boolean): {
    checkedOptions: any[];
    selectedOptions: any[];
    indeterminateOptions: any;
};
export declare function setCheckedOptions(options: any[], checkedOptions: any[], indeterminateOptions: any[] | void, values: any[], checked: any[]): void;
