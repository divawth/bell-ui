export declare const STATUS_UPLOADING = "uploading";
export declare const STATUS_ERROR = "error";
export declare const STATUS_FAILURE = "failure";
export declare function readLocalFile(item: any): Promise<unknown>;
export declare function validateFile(item: any, minSize: number, maxSize: number, minRatio: number, maxRatio: number, minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, minDuration: number, maxDuration: number): any[];
export declare function formatFileSize(size: number): string;
