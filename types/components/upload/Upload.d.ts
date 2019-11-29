import { CustomEventInterface } from 'yox';
declare type UploadFile = {
    id: number;
    file: File;
};
declare const _default: import("yox").ComponentOptions<unknown, unknown, unknown, {
    upload(files: UploadFile[]): void;
    uploadFile(file: UploadFile): void;
    click(): void;
    changeFiles(event: CustomEventInterface): void;
}> & ThisType<{
    upload(files: UploadFile[]): void;
    uploadFile(file: UploadFile): void;
    click(): void;
    changeFiles(event: CustomEventInterface): void;
} & import("yox").YoxInterface>;
export default _default;
