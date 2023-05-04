import { AxiosInstance } from "axios/dist/axios.min.js";

export interface SettingResponse {
    chips: ChipInfo[];
}

export interface ChipInfo {
    time: string;
    text: string;
    value: number;
    color: string;
}

export default class Setting {
    constructor(readonly axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async getSettings(session: string, username: string) {
        const request = {
            session,
            username,
            browserUserAgent: navigator.userAgent
        };
        const response = await this.axiosInstance.post<SettingResponse>("/settings", request);

        return response.data;
    }
}
