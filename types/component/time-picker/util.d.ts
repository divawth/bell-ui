export declare function toTimeProps(value: Date | number | void, hourList: number[], minuteList: number[], secondList: number[]): {
    hour: number;
    minute: number;
    second: number;
    hourIndex: number;
    minuteIndex: number;
    secondIndex: number;
    text: string;
};
export declare function formatTime(hour: number, minute: number, second: number): string;
export declare function createRangeList(start: number, end: number, step: number): number[];
export declare function getValidTimeItemIndex(listLength: number, index: number): number;
export declare function scrollTimeItemInToView(listElement: HTMLElement, index: number, animated?: boolean): void;
