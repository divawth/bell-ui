declare const _default: import("yox").ComponentOptions<{
    customImageWidth: unknown;
    customImageHeight: unknown;
    restCount: unknown;
}, unknown, unknown, {
    handleImageClick(image: object, index: number): void;
    getImageIndexById(id: number): number;
    checkReady(): {
        hasLocal: boolean;
        hasUploading: boolean;
        hasError: boolean;
    };
    appendItems(items: any[]): void;
    removeItem(index: number): void;
    upload(): void;
    uploadItem(id: number): void;
    fireError(error: string): void;
    fireChange(): void;
}> & ThisType<{
    handleImageClick(image: object, index: number): void;
    getImageIndexById(id: number): number;
    checkReady(): {
        hasLocal: boolean;
        hasUploading: boolean;
        hasError: boolean;
    };
    appendItems(items: any[]): void;
    removeItem(index: number): void;
    upload(): void;
    uploadItem(id: number): void;
    fireError(error: string): void;
    fireChange(): void;
} & import("yox").YoxInterface>;
export default _default;
