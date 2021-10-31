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
    addDraggingItemClass(index: number): void;
    removeDraggingItemClass(index: number): void;
    handleDragStart(index: number): void;
    handleDragEnd(): void;
    handleDragOver(index: number): false;
    handleDragEnter(index: number): false;
    handleDragLeave(index: number): void;
    handleDragDrop(index: number): false;
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
    addDraggingItemClass(index: number): void;
    removeDraggingItemClass(index: number): void;
    handleDragStart(index: number): void;
    handleDragEnd(): void;
    handleDragOver(index: number): false;
    handleDragEnter(index: number): false;
    handleDragLeave(index: number): void;
    handleDragDrop(index: number): false;
} & import("yox").YoxInterface>;
export default _default;
