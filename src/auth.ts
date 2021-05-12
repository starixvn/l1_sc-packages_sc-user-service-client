import { AxiosInstance } from "axios";

export interface SSOResponse {
    isAuthenticated: boolean;
    username: string;
    language: string;
    ss: string;
}

export interface Response {
    errorCode: string;
    message: string;
    isSuccessful: boolean;
}

export interface ReCheckInResponse {
    isSuccessful: boolean;
    message: string;
    balance: number;
    isDisableAccount: boolean;
    apiError: APIError;
}

export interface APIError {
    errorCode: number | string;
    errorMessage: string;
}

export interface AuthorizeResponse {
    authorized: boolean;
    user: User;
}

export interface SignNameResponse {
    isSuccessful: boolean;
    message: string;
    user: User;
}

export interface User {
    UID: number;
    avatarId: number;
    currency: string;
    name: string;
    red: number;
}

export interface GetBalanceResponse extends Response {
    balance: number;
    isDisableAccount: boolean;
}

export default class Auth {
    constructor(readonly axiosInstance: AxiosInstance) {}

    async sso(token: string, system = 1) {
        const response = await this.axiosInstance.get<SSOResponse>(`/auth/sso?token=${token}&system=${system}`);
        return response.data;
    }

    async reCheckIn(session: string, username: string) {
        const request = {
            session,
            username,
            browserUserAgent: navigator.userAgent
        };
        const response = await this.axiosInstance.post<GetBalanceResponse>("/auth/reCheckIn", request);
        return response.data;
    }

    async authorize(session: string, username: string) {
        const request = {
            session,
            username,
            browserUserAgent: navigator.userAgent
        };
        const response = await this.axiosInstance.post<AuthorizeResponse | Response>("/auth/authorize", request);
        return response.data;
    }

    async verifySession(session: string, username: string) {
        const request = {
            session,
            username,
            browserUserAgent: navigator.userAgent
        };
        const response = await this.axiosInstance.post<Response>("/auth/session/verify", request);
        return response.data;
    }

    async signName(session: string, username: string, nickname: string) {
        const request = {
            session,
            username,
            nickname,
            browserUserAgent: navigator.userAgent
        };
        const response = await this.axiosInstance.post<AuthorizeResponse | Response>("/auth/signName", request);
        return response.data;
    }

    async getBalance(session: string, username: string) {
        const request = {
            session,
            username,
            browserUserAgent: navigator.userAgent
        };

        const response = await this.axiosInstance.post<GetBalanceResponse>("/auth/balance", request);
        return response.data;
    }
}
