import UserServiceClient, { IUserServiceClient } from ".";

export default class UserClientCommunication {
    private static instance: IUserServiceClient | null = null;

    public static getUserClientInstance(gameDomain: string): IUserServiceClient | null {
        if (!this.instance) {
            this.instance =
                typeof window !== "undefined" ? new UserServiceClient(this.getUserServiceUrl(gameDomain)) : null;
        }
        return this.instance;
    }

    private static getUserServiceUrl(gameDomain: string): string {
        const path = "/user";
        return `${gameDomain}${path}`;
    }
}
