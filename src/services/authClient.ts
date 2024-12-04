import { axiosInstance } from "./authService.ts";
import { AxiosRequestConfig } from "axios";

class AuthClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (requestConfig?: AxiosRequestConfig) => {
        const controller = new AbortController();
        const request = axiosInstance.get<T[]>(this.endpoint, {
            signal: controller.signal,
            ...requestConfig
        });
        return {request, cancel: () => controller.abort()};
    }

    post = (data: T) => {
        return axiosInstance
            .post(this.endpoint, data)
            .then((res) => res.data);
    }

    put = (data: T) => {
        const response =  axiosInstance
            .put(this.endpoint, data)
            .then((res) => res.data);
        return { response };
    }

    delete = (id: number) => {
        return axiosInstance
            .delete(this.endpoint + '/' + id)
            .then((res) => res.data);
    }
}

export default AuthClient;