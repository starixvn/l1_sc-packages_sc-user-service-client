import axios from "axios";

import Auth from "./auth";
import Settings from "./settings";
import UserSettings from "./userSettings";

export default class UserServiceClient {
    private _auth: Auth;
    private _settings: Settings;
    private _userSettings: UserSettings;

    constructor(userServiceUrl: string) {
        const axiosInstance = axios.create({
            baseURL: userServiceUrl
        });

        this._auth = new Auth(axiosInstance);
        this._settings = new Settings(axiosInstance);
        this._userSettings = new UserSettings(axiosInstance);
    }

    get auth(): Auth {
        return this._auth;
    }

    get settings(): Settings {
        return this._settings;
    }

    get userSettings(): UserSettings {
        return this._userSettings;
    }
}
