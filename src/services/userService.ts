import ApiClient from "./apiClient.ts";
import { User } from '../types/types.ts';

export const createUserApiClient = (route: string) => {
    return new ApiClient<User>(route);
}