import { useUser } from "../hooks/useUser.tsx";
import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, useToast } from "@chakra-ui/react";
import CocktailCard from "../components/CocktailCard.tsx";
import Navbar from "../components/Navbar.tsx";
import { createCocktailService } from "../services/cocktailService.ts";
import { useEffect, useState } from "react";
import { Cocktail } from "../types/types.ts";
import { CanceledError } from "../services/api-client.ts";
import IsLoading from "../components/IsLoading.tsx";

const SpiritOverview = () => {

    const {user} = useUser();
    const {type} = useParams();
    const toast = useToast();

    const cocktailService = createCocktailService(`/cocktail/${type}`)
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const { response, cancel } = cocktailService.getAll<Cocktail[]>();
        response
            .then((res) => {
                setCocktails(res.data);
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
                status: 'success',
                position: 'top',
                duration: 3000
            })}

            <Navbar user={user} />
            <IsLoading isLoading={isLoading} />
            <Heading>{type} Cocktails</Heading>
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3
                }}
                maxWidth='1200px'
                margin='0 auto'
                spacing={6}
                padding='10px' >
                    {cocktails?.map(cocktail => <CocktailCard key={cocktail._id} cocktail={cocktail} />)}
            </SimpleGrid>
        </>
    );
};

export default SpiritOverview;