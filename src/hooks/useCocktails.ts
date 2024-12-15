import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_COCKTAILS } from '../constants.ts';
import { Cocktail, createCocktailApiClient } from '../services/cocktailService.ts';

const useCocktails = (url: string) => {

    const cocktailService = createCocktailApiClient(url)

    return useQuery<Cocktail[], Error>({
        queryKey: CACHE_KEY_COCKTAILS,
        queryFn: cocktailService.getAll,
        staleTime: 10 * 1000
    })
}

export default useCocktails;