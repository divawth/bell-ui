export declare function formatExpandedKeys(data: any[], expandedKeys: string[] | void, defaultExpandAll: boolean): string[];
export declare function formatSelectedKeys(selectedKeys: string[] | void): string[];
export declare function formatCheckedKeys(data: any[], checkedKeys: string[] | void, checkStrictly: boolean): {
    checkedKeys: string[];
    indeterminateKeys: string[];
};
export declare function setCheckedKey(data: any[], checkedKeys: string[], indeterminateKeys: string[], key: string, checked: boolean, checkStrictly: boolean): void;
