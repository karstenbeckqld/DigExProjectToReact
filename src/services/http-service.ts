import apiClient from "./api-client.ts";

interface Entity {
    id: number;
}

class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const response = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal,
        });
        return {response, cancel: () => controller.abort()};
    }

    get<T>() {
        const controller = new AbortController();
        const response = apiClient.get<T>(this.endpoint, {
            signal: controller.signal,
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

const createHttpServiceInstance = (endpoint: string) => new HttpService(endpoint);

export default createHttpServiceInstance;