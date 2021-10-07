import axios from "axios";

import Auth from "./auth";
import UserSettings from "./userSettings";

export default class UserServiceClient {
    private _auth: Auth;
    private _userSettings: UserSettings;

    constructor(userServiceUrl: string) {
        const axiosInstance = axios.create({
            baseURL: userServiceUrl
        });

        this._auth = new Auth(axiosInstance);
        this._userSettings = new UserSettings(axiosInstance);
    }

    get auth(): Auth {
        return this._auth;
    }

    get userSettings(): UserSettings {
        return this._userSettings;
    }
}
