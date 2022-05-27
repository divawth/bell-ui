export declare function getLastNodeKey(nodes: any[]): any;
export declare function formatExpandedKeys(data: any[], expandedKeys: string[] | void, defaultExpandAll: boolean): string[];
export declare function formatSelectedKeys(selectedKeys: string[] | void): string[];
export declare function formatCheckedKeys(data: any[], checkedKeys: string[] | void, checkStrictly: boolean): {
    checkedNodes: any[];
    indeterminateNodes: any[];
};
export declare function setCheckedKey(data: any[], checkedNodes: any[], indeterminateNodes: any[], keys: string[], checked: boolean[], checkStrictly: boolean): void;
