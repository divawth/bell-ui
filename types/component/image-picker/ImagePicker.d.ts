declare const _default: import("yox").ComponentOptions<{
    customImageWidth: unknown;
    customImageHeight: unknown;
    restCount: unknown;
    canDraggable: unknown;
}, unknown, unknown, {
    handleImageClick(image: object, index: number): void;
    getImageIndexById(id: number): number;
    validateImageList(imageList: any[]): void;
    checkReady(): {
        hasLocal: boolean;
        hasUploading: boolean;
        hasError: boolean;
    };
    appendItems(items: any[]): void;
    replaceItem(item: any, index: number): void;
    removeItem(index: number): void;
    upload(): void;
    uploadItem(id: number, index: number): void;
    fireError(error: string): void;
    fireChange(): void;
    addImgWrapperItemClass(index: number, className: string): void;
    removeImgWrapperItemClass(index: number, className: string): void;
    handleMouseEnter(index: number): void;
    handleMouseLeave(index: number): void;
    handleDragStart(index: number): void;
    handleDragEnd(): void;
    handleDragOver(index: number): false;
    handleDragEnter(index: number): false;
    handleDragLeave(index: number): void;
    handleDragDrop(index: number): false;
}> & ThisType<{
    handleImageClick(image: object, index: number): void;
    getImageIndexById(id: number): number;
    validateImageList(imageList: any[]): void;
    checkReady(): {
        hasLocal: boolean;
        hasUploading: boolean;
        hasError: boolean;
    };
    appendItems(items: any[]): void;
    replaceItem(item: any, index: number): void;
    removeItem(index: number): void;
    upload(): void;
    uploadItem(id: number, index: number): void;
    fireError(error: string): void;
    fireChange(): void;
    addImgWrapperItemClass(index: number, className: string): void;
    removeImgWrapperItemClass(index: number, className: string): void;
    handleMouseEnter(index: number): void;
    handleMouseLeave(index: number): void;
    handleDragStart(index: number): void;
    handleDragEnd(): void;
    handleDragOver(index: number): false;
    handleDragEnter(index: number): false;
    handleDragLeave(index: number): void;
    handleDragDrop(index: number): false;
} & import("yox").YoxInterface>;
export default _default;
