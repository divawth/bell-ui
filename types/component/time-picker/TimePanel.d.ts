declare const _default: import("yox").ComponentOptions<{
    showSecond: unknown;
    validHourIndex: unknown;
    validMinuteIndex: unknown;
    validSecondIndex: unknown;
    hasValue: unknown;
}, {
    hourIndex: unknown;
    minuteIndex: unknown;
    secondIndex: unknown;
}, unknown, {
    handleHourClick(hourIndex: number): void;
    handleMinuteClick(minuteIndex: number): void;
    handleSecondClick(secondIndex: number): void;
    handleSubmitClick(): void;
    fireChange(hourIndex: number, minuteIndex: number, secondIndex: number): void;
}> & ThisType<{
    handleHourClick(hourIndex: number): void;
    handleMinuteClick(minuteIndex: number): void;
    handleSecondClick(secondIndex: number): void;
    handleSubmitClick(): void;
    fireChange(hourIndex: number, minuteIndex: number, secondIndex: number): void;
} & import("yox").YoxInterface>;
export default _default;
