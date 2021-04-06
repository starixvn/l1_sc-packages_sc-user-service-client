import axios from "axios";

import Auth from "./auth";

export default class UserServiceClient {
    private _auth: Auth;

    constructor(userServiceUrl: string) {
        const axiosInstance = axios.create({
            baseURL: userServiceUrl
        });

        this._auth = new Auth(axiosInstance);
    }

    get auth(): Auth {
        return this._auth;
    }
}
