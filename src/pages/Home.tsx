import { useUser } from "../hooks/useUser.tsx";
import Navbar from "../components/Navbar.tsx";
import { Box, Button, Center, Heading, HStack, Image } from "@chakra-ui/react";
import ginCocktail from '../assets/images/gin-cocktail.jpg';
import rumCocktail from '../assets/images/rum-cocktail.jpg';
import whiskeyCocktail1 from '../assets/images/whiskey-cocktail-1.png';
import whiskeyCocktail2 from '../assets/images/whiskey-cocktail-2.png';
import vodkaCocktail from '../assets/images/vodka-cocktail.jpg';
import tequilaCocktail from '../assets/images/tequila-cocktail.jpg';
import { Link } from "react-router-dom";

const Home = () => {

    const {user} = useUser();

    return (
        <>
            <Navbar user={user} />

            <Center maxWidth='1200px' margin='20px auto' className='w-50'>
                <Box textAlign='center'>
                    <Heading textAlign='center' fontSize='36px' color='#A4E443' margin='40px 0'>
                        Hi {user?.firstName}, welcome to the World of Cocktails.
                    </Heading>
                    <p className='mb-10'>Cocktails are known for their creative and unique names, many of which will draw you in and help you
                       find a favorite new recipe. Whether you're searching for a new sipper to enjoy after work or that
                       perfect recipe to match a party's theme, these cocktails, shots, and shooters should be all you
                       need.</p>
                </Box>
            </Center>

            <HStack gap='80px' maxW='1200px' margin='40px auto 0 auto'>
                <Image width='60%' borderRadius='0 20px 20px 0' src={ginCocktail} alt="placeholder" />
                <Box width='40%'>
                    <Heading fontSize='24px' marginBottom='20px' color='#A4E443'>Gin Cocktails</Heading>
                    <p>Gin is a great liquor to explore. Its botanicals give it a characteristic that no other liquor has;
                       one brand can have a completely different profile from another, and it is surprisingly versatile when
                       it comes to flavor profiles. Gin is also the foundation for some of the best drinks ever made,
                       including the iconic martini.</p>
                    <Link to='/cocktail/gin'><Button variant='themedButton' width='100px' marginTop='20px'>Explore</Button></Link>
                </Box>
            </HStack>

            <HStack gap='80px' maxW='1200px' margin='40px auto'>
                <Box width='40%'>
                    <Heading fontSize='24px' marginBottom='20px' color='#A4E443'>Rum Cocktails</Heading>
                    <p>The best rum cocktails feel like vacation in a glass. Break out the bottle and learn to make easy rum
                       cocktails with a tropical twist, including the mojito, daiquiri, piña colada, dark 'n' stormy and
                       more.</p>
                    <Link to='/cocktail/rum'><Button variant='themedButton' width='100px' marginTop='20px'>Explore</Button></Link>
                </Box>
                <Image width='60%' borderRadius='20px 0 0 20px' src={rumCocktail} alt="placeholder" />
            </HStack>

            <HStack gap='80px' maxW='1200px' margin='40px auto'> <Image src={whiskeyCocktail1} alt="placeholder" />
                <Box className="spirit-detail">
                    <Heading fontSize='24px' marginBottom='20px' color='#A4E443'>Whiskey Cocktails</Heading>
                    <p> The world of whiskey is vast and the list of great whiskey cocktails is constantly expanding.
                        There are, however, a few tried and true recipes that are essential to creating a well-rounded
                        whiskey experience. These drinks showcase the versatility of whiskey. They include some of the
                        most popular whiskey cocktails that enthusiasts have enjoyed for decades</p>
                    <Link to='/cocktail/whiskey'><Button variant='themedButton' width='100px' marginTop='20px'>Explore</Button></Link>
                </Box>
                <Image className="cocktail-image right anim-in" src={whiskeyCocktail2} alt="placeholder" />
            </HStack>

            <HStack gap='80px' maxW='1200px' margin='40px auto'>
                <Box width='40%' className="spirit-detail">
                    <Heading fontSize='24px' marginBottom='20px' color='#A4E443'>Vodka Cocktails</Heading>
                    <p>Vodka may be the most mixable and useful liquor in the bar. The clear spirit's clean taste pairs well
                       with any flavor, from sweet to savory and dry to spicy. Featured in thousands of cocktail recipes,
                       vodka is a spirit that can be used to create a cocktail for every drinker and occasion. Come with us
                       on a journey through the wide world of vodka-based cocktails to learn just how versatile this
                       underrated spirit really is. </p>
                    <Link to='/cocktail/vodka'><Button variant='themedButton' width='100px' marginTop='20px'>Explore</Button></Link>
                </Box>
                <Image width='60%' borderRadius='20px 0 0 20px' src={vodkaCocktail} alt="placeholder" />
            </HStack>

            <HStack gap='80px' maxW='1200px' margin='40px auto'>
                <Image width='60%' borderRadius='0 20px 20px 0' src={tequilaCocktail} alt="placeholder" />
                <Box width='40%'>
                    <Heading fontSize='24px' marginBottom='20px' color='#A4E443'>Tequila Cocktails</Heading>
                    <p>Tequila cocktails are diverse and a lot of fun to explore. You can mix up the original margarita
                       or enjoy it in a variety of flavors, from strawberry to tamarind. The beauty of tequila is that
                       its agave flavor brings an earthy, semi-sweet element to drinks. It's a flavor you won't find in
                       any other distilled spirit, and it's fascinating to discover how that reacts with a variety of
                       mixers. </p>
                    <Link to='/cocktail/tequila'><Button variant='themedButton' width='100px' marginTop='20px'>Explore</Button></Link>
                </Box>
            </HStack>
        </>
    );
};

export default Home;