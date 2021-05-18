import { AxiosInstance } from "axios";

export enum UserSettingKeys {
    quickBet,
    theme
}

export interface Response {
    errorCode: string;
    message: string;
    isSuccessful: boolean;
}

export default class UserSettings {
    constructor(readonly axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async updateUserSettings(session: string, username: string, settingKey: UserSettingKeys, value: any) {
        const response = await this.axiosInstance.post<Response>("users/settings/update", {
            session,
            username,
            browserUserAgent: navigator.userAgent,
            key: UserSettingKeys[settingKey],
            value
        });

        return response.data;
    }
}
