import createHttpService from "./http-service.ts";

export const createCocktailService = (route: string) => {
    return createHttpService(route);
}