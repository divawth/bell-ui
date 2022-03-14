import { CustomEventInterface } from 'yox';
declare type LocalFile = {
    id: number | string;
    file: File;
    name: string;
    size: number;
};
declare const _default: import("yox").ComponentOptions<unknown, unknown, unknown, {
    beforeUpload(fileList: FileList): void;
    upload(file: LocalFile): void;
    reset(): void;
    handleClick(): void;
    handleDragenter(): void;
    handleDragleave(): void;
    handleDragover(event: CustomEventInterface): void;
    handleDrop(event: CustomEventInterface): void;
    handleChange(event: CustomEventInterface): void;
}> & ThisType<{
    beforeUpload(fileList: FileList): void;
    upload(file: LocalFile): void;
    reset(): void;
    handleClick(): void;
    handleDragenter(): void;
    handleDragleave(): void;
    handleDragover(event: CustomEventInterface): void;
    handleDrop(event: CustomEventInterface): void;
    handleChange(event: CustomEventInterface): void;
} & import("yox").YoxInterface>;
export default _default;
