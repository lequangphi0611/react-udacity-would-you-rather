export default interface ErrorResponse {
    errorCode: number;
    message: string;
    detailMessage?: string;
}