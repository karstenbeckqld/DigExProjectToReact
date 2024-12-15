import { useUser } from "../hooks/useUser.tsx";
import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, useToast } from "@chakra-ui/react";
import CocktailCard from "../components/CocktailCard.tsx";
import Navbar from "../components/Navbar.tsx";
import useCocktails from "../hooks/useCocktails.ts";

const SpiritOverview = () => {

    const {user} = useUser();
    const {type} = useParams();
    const toast = useToast();
    const {data, error} = useCocktails(`/cocktail/${type}`);


    return (
        <>
            {error && toast({
                title: 'Something went wrong, please try again.',
                description: error.message,
                status: 'error',
                position: 'top',
                duration: 3000
            })}
            <Navbar user={user} />
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
                    {data?.map(cocktail => <CocktailCard key={cocktail._id} cocktail={cocktail} />)}
            </SimpleGrid>
        </>
    );
};

export default SpiritOverview;