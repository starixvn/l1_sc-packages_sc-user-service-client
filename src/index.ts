import axios from "axios";

import Auth from "./auth";
import Settings from "./settings";

export default class UserServiceClient {
    private _auth: Auth;
    private _settings: Settings;

    constructor(userServiceUrl: string) {
        const axiosInstance = axios.create({
            baseURL: userServiceUrl
        });

        this._auth = new Auth(axiosInstance);
        this._settings = new Settings(axiosInstance);
    }

    get auth(): Auth {
        return this._auth;
    }

    get settings(): Settings {
        return this._settings;
    }
}
