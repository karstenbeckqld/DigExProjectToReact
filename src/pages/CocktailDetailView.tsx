import { useUser } from "../hooks/useUser.tsx";
import Navbar from "../components/Navbar.tsx";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { createCocktailService } from "../services/cocktailService.ts";
import { useEffect, useState } from "react";
import { Cocktail } from "../types/types.ts";
import { CanceledError } from "../services/api-client.ts";
import IsLoading from "../components/IsLoading.tsx";


const CocktailDetailView = () => {

    const { user } = useUser();
    const { id } = useParams();
    const toast = useToast();

    console.log(id);

    const cocktailService = createCocktailService(`/cocktail/cocktail/${id}`)
    const [cocktail, setCocktail] = useState<Cocktail>();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const { response, cancel } = cocktailService.get<Cocktail>();
        response
            .then((res) => {
                setCocktail(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => cancel();
    }, []);

    return (
        <>

            {error && toast({
            title: 'Redirecting',
            description: error,
            status: 'error',
            position: 'top',
            duration: 3000
        })}
            <Navbar user={user} />
            <IsLoading isLoading={isLoading} />
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