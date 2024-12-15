import apiClient from "./api-client.ts";
import { AxiosRequestConfig } from "axios";

interface Entity {
    id: number;
}

class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>(requestConfig?: AxiosRequestConfig) {
        const controller = new AbortController();
        const response = apiClient.get<T>(this.endpoint, {
            signal: controller.signal,
            ...requestConfig
        });
        return {response, cancel: () => controller.abort()};
    }

    get<T>(requestConfig?: AxiosRequestConfig) {
        const controller = new AbortController();
        const response = apiClient.get<T>(this.endpoint, {
            signal: controller.signal,
            ...requestConfig
        });
        return {response, cancel: () => controller.abort()};
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.put(this.endpoint + '/' + entity.id, entity);
    }

    delete = (id: number) => {
        return apiClient.delete(this.endpoint + '/' + id);
    }
}

const createHttpService = (endpoint: string) => new HttpService(endpoint);

export default createHttpService;