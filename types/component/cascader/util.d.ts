export declare function isLeafOption(option: any): boolean;
export declare function getOptionsProps(options: any[], propName: string): string[];
export declare function renderValue(value: any): any;
export declare function formatOptions(options: any[] | void, values: any[] | void, multiple: boolean): {
    selectedOptions: any[];
    checkedOptions: any[];
    indeterminateOptions: any[];
};
export declare function setCheckedOptions(options: any[], checkedOptions: any[], indeterminateOptions: any[], values: any[], checked: any[]): void;
