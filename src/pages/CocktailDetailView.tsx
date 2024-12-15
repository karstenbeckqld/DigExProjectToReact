import { useUser } from "../hooks/useUser.tsx";
import Navbar from "../components/Navbar.tsx";
import useCocktail from "../hooks/useCocktail.ts";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";


const CocktailDetailView = () => {

    const { user } = useUser();
    const { id } = useParams();
    const toast = useToast();

    console.log(id);

    const {data: cocktail, error} = useCocktail(`/cocktail/cocktail/${id}`);

    return (
        <> {error && toast({
            title: 'Redirecting',
            description: error.message,
            status: 'error',
            position: 'top',
            duration: 3000
        })}
            <Navbar user={user} />
            <ul>
                <li>{cocktail?._id}</li>
                <li>{cocktail?.cocktailName}</li>
                <li>{cocktail?.spiritName}</li>
                <li>{cocktail?.preparation}</li>
                <li>{cocktail?.ingredients.map((ingredient: string, index: number) =>
                    <p key={index}>Ingredient {index+1}: {ingredient}</p>
                )}</li>
                <li>{cocktail?.story}</li>
                <li>{cocktail?.tips}</li>
                <li>{cocktail?.cocktailHeaderImage}</li>
            </ul>


        </>
    );
};

export default CocktailDetailView;