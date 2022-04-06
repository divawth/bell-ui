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
}, {
    resize: unknown;
}, {
    scrollHourIntoView(animated?: boolean): void;
    scrollMinuteIntoView(animated?: boolean): void;
    scrollSecondIntoView(animated?: boolean): void;
    handleHourClick(hourIndex: number): void;
    handleMinuteClick(minuteIndex: number): void;
    handleSecondClick(secondIndex: number): void;
    handleNowClick(): void;
    handleSubmitClick(): void;
    fireChange(hourIndex: number, minuteIndex: number, secondIndex: number): void;
}> & ThisType<{
    scrollHourIntoView(animated?: boolean): void;
    scrollMinuteIntoView(animated?: boolean): void;
    scrollSecondIntoView(animated?: boolean): void;
    handleHourClick(hourIndex: number): void;
    handleMinuteClick(minuteIndex: number): void;
    handleSecondClick(secondIndex: number): void;
    handleNowClick(): void;
    handleSubmitClick(): void;
    fireChange(hourIndex: number, minuteIndex: number, secondIndex: number): void;
} & import("yox").YoxInterface>;
export default _default;
