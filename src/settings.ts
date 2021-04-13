import { AxiosInstance } from "axios";

export interface SettingsResponse {
    isUM: boolean;
    umInfo: UMInfo;
}

export interface UMInfo {
    time: Date;
    start: Date;
    end: Date;
    finish: boolean;
}

export default class Settings {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async getSettings() {
        const response = await this.axiosInstance.get<SettingsResponse>("/settings");
        return response.data;
    }
}
