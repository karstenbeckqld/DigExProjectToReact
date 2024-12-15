import ApiClient from "./apiClient.ts";

export interface Cocktail {
    _id: string;
    cocktailName: string;
    spiritName: string;
    preparation: string;
    ingredients: string[];
    story: string;
    cocktailImage: string;
    tips: string;
    cocktailHeaderImage: string;
}

export const createCocktailApiClient = (route: string) => {
    return new ApiClient<Cocktail>(route);
}