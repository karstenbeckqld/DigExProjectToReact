import createHttpService from "./http-service.ts";

const dataService = (endpoint: string) => {
    return createHttpService(endpoint);
}

export default dataService;