export declare const MODE_HEX = "hex";
export declare const MODE_RGB = "rgb";
export declare const COLOR_DEFAULT = "#000";
export declare function normalizeHue(hue: number): number;
export declare function normalizeSaturation(saturation: number): number;
export declare function normalizeValue(value: number): number;
export declare function normalizeAlpha(alpha: number): number;
export declare function getColorByName(color: string): string;
export declare function getModeByColor(color: string): "rgb" | "hex";
export declare function hsv2rgb(h: number, s: number, v: number): number[];
export declare function rgb2hsv(r: number, g: number, b: number): number[];
/**
 * rgb2hex
 *
 * @param {number} r 红色颜色值 0~255
 * @param {number} g 绿色颜色值 0~255
 * @param {number} b 蓝色颜色值 0~255
 * @param {number|void} a 透明度 0~1，默认 1
 */
export declare function rgb2hex(r: number, g: number, b: number, a: number | void): string;
/**
 * hex2rgb
 *
 * @param {string} hex hex颜色值 eg: #000、#325312、#b2c343
 */
export declare function hex2rgb(hex: string): number[];
export declare function stringifyRgb(rgb: number[], alpha: number | void): string;
export declare function parseColor(value: string, alphaEnabled: boolean): {
    hsv: number[];
    rgb: any[];
    alpha: any;
};
