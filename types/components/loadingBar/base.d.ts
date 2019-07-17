interface Config {
    type?: string;
    color?: string;
    height?: number;
    percent?: number;
}
export declare function add(data: Config): any;
export declare const remove: () => void;
export declare const update: (config: Config) => void;
export {};
