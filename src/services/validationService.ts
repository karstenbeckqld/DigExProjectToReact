import ApiClient from "./apiClient.ts";
import { User } from "../types/types.ts";

export interface LoginResponse {
    accessToken: string;
    user: User;
}

export const createValidationApiClient = (route: string) => {
    return new ApiClient<LoginResponse>(route);
}