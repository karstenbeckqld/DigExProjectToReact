import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3456',
    headers: {
        'Authorization': `Bearer ${localStorage.accessToken}`
    }
})

class ApiClient<T> {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async () => {
        const res = await axiosInstance
            .get<T[]>(this.endpoint);
        return res.data;
    }

    get = async () => {
        const res = await axiosInstance
            .get<T>(this.endpoint);
        return res.data;
    }

    post = async (data: T) => {
        const res = await axiosInstance
            .post<T>(this.endpoint, data);
        return res.data;
    }
}

export default ApiClient;