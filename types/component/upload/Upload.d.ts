import { CustomEventInterface } from 'yox';
declare type UploadFile = {
    id: number;
    file: File;
};
declare const _default: import("yox").ComponentOptions<unknown, unknown, unknown, {
    beforeUpload(files: UploadFile[]): void;
    upload(file: UploadFile): void;
    reset(): void;
    click(): void;
    onChange(event: CustomEventInterface): void;
}> & ThisType<{
    beforeUpload(files: UploadFile[]): void;
    upload(file: UploadFile): void;
    reset(): void;
    click(): void;
    onChange(event: CustomEventInterface): void;
} & import("yox").YoxInterface>;
export default _default;
