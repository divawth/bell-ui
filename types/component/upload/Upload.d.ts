import { CustomEventInterface } from 'yox';
declare type UploadFile = {
    id: number | string;
    file: File;
    name: string;
    size: number;
};
declare const _default: import("yox").ComponentOptions<unknown, unknown, unknown, {
    beforeUpload(fileList: UploadFile[]): void;
    upload(file: UploadFile): void;
    reset(): void;
    click(): void;
    onChange(event: CustomEventInterface): void;
}> & ThisType<{
    beforeUpload(fileList: UploadFile[]): void;
    upload(file: UploadFile): void;
    reset(): void;
    click(): void;
    onChange(event: CustomEventInterface): void;
} & import("yox").YoxInterface>;
export default _default;
