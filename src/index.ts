import axios from "axios";

import Auth from "./auth";

export default function (userServiceUrl: string) {
    const axiosInstance = axios.create({
        baseURL: userServiceUrl
    });

    return {
        auth: new Auth(axiosInstance)
    };
}
