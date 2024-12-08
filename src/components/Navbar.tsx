import { User } from "../types/types.ts";
import { HStack, Image, Heading, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const Navbar = ({user}: { user: User | null }) => {

    const avatarUrl = `http://localhost:3456/public/images/processed/${user?.avatar}`;
    const { colorMode } = useColorMode();

    return (
        <HStack height='100px' backgroundColor={"teal.300"} justifyContent='space-between' padding='10px' textColor={colorMode === 'dark' ? 'white' : 'black'}>
            <Image src={avatarUrl} alt="Logo" boxSize={20} />
            <Heading>{user?.firstName} {user?.lastName}</Heading>
            <HStack justifyContent='space-evenly' alignContent='center' gap={10} >
                <Link to='#'>Home</Link>
                <Link to='#'>Cocktails</Link>
                <ColorModeSwitch />
            </HStack>
        </HStack>
    );
};

export default Navbar;