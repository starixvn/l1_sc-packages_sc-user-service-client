import { AxiosInstance } from "axios";

export interface TrackingRequest {
    timestamp: string;
    visitorId: string;
    session: string;
    username: string;
    browserUserAgent: string;
}

export interface TrackingResponse {
    isSuccessful: boolean;
    message?: string;
    errorCode?: string;
}

export default class Tracking {
    constructor(readonly axiosInstance: AxiosInstance) {}

    async track(session: string, username: string, visitorId: string, browserUserAgent: string, timestamp?: string) {
        const request: TrackingRequest = {
            timestamp: timestamp || new Date().toISOString(),
            visitorId,
            session,
            username,
            browserUserAgent
        };

        const response = await this.axiosInstance.post<TrackingResponse>("/tracking/track", request);

        return response.data;
    }
}
