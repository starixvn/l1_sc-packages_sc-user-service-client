import { AxiosInstance } from "axios";

export enum UserSettingKeys {
    quickBet,
    darkMode
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

    async updateUserSettings(session: string, username: string, settingKeys: UserSettingKeys, value: boolean) {
        const response = await this.axiosInstance.post<Response>("users/settings/update", {
            session,
            username,
            browserUserAgent: navigator.userAgent,
            key: UserSettingKeys[settingKeys],
            value
        });

        return response.data;
    }
}
