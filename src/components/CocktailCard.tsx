import { Card, CardBody, CardHeader, Image, Text, useToast } from "@chakra-ui/react";
import { Cocktail } from '../services/cocktailService.ts';
import { useNavigate } from "react-router-dom";


interface CocktailCardProps{
    cocktail: Cocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {

    const navigate = useNavigate();
    const toast = useToast();

    return (
        <Card onClick={() => {
            toast({
                title: 'Redirecting',
                description: 'Getting you to your cocktail.',
                status: 'error',
                position: 'top',
                duration: 3000
            })
            navigate(`/cocktail/cocktail/${cocktail._id}`);
        }} cursor='pointer'>
            <CardHeader fontSize='2em' fontWeight='bold' margin='0 auto'>
                {cocktail.cocktailName}
            </CardHeader>
            <CardBody>
                <Text>{cocktail._id}</Text>
                <Image
                    margin='0 auto'
                    src={`http://localhost:3456/images/processed/${cocktail.cocktailImage}`}
                    alt={cocktail.cocktailName} />
            </CardBody>
        </Card>
    );
};

export default CocktailCard;