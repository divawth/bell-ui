interface Config {
    type?: string;
    color?: string;
    height?: number;
    percent?: number;
}
declare const _default: {
    start(options?: Config): any;
    finish(): void;
    update(data: Config): void;
    config(data: Config): void;
    destroy(): void;
};
export default _default;
