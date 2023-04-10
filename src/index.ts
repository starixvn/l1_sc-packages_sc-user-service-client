import axios from "axios/dist/axios.min.js";
import Auth from "./auth";
import Lobby from "./lobby";
import UserSettings from "./userSettings";

export default class UserServiceClient {
    private _auth: Auth;
    private _userSettings: UserSettings;
    private _lobby: Lobby;

    constructor(userServiceUrl: string) {
        const axiosInstance = axios.create({
            baseURL: userServiceUrl
        });

        this._auth = new Auth(axiosInstance);
        this._userSettings = new UserSettings(axiosInstance);
        this._lobby = new Lobby(axiosInstance);
    }

    get auth(): Auth {
        return this._auth;
    }

    get userSettings(): UserSettings {
        return this._userSettings;
    }

    get lobby(): Lobby {
        return this._lobby;
    }
}
