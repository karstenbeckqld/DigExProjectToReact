import { User } from "../types/types.ts";
import {
    Avatar,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    Image,
    useColorMode,
    useDisclosure
} from '@chakra-ui/react';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import logo from '../assets/images/logo-white.svg'
import { BiMenuAltRight } from "react-icons/bi";
import { useRef } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({user}: { user: User | null }) => {

    // const avatarUrl = `http://localhost:3456/public/images/processed/${user?.avatar}`;
    const {colorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <HStack
                width='100%'
                height='100px'
                backgroundColor='#A4E443'
                justifyContent='space-between'
                alignItems='center'
                padding='10px'
                textColor={colorMode === 'dark' ? '#121212' : 'black'}
            >
                <HStack gap={8}> <Link to='/'><Image src={logo} alt="Logo" boxSize={60} /></Link>
                    <p>{user?.firstName} {user?.lastName}</p>
                </HStack>
                <HStack justifyContent='space-between' alignItems='center' paddingRight='20px'>
                    <Link to='/'>Home</Link>
                    <Link to='#'>About</Link>
                    <Avatar size='md' bg='blackAlpha.300' name={user?.firstName} src={undefined}></Avatar>
                    <ColorModeSwitch />
                    <Button backgroundColor='transparent' color='#121212' ref={btnRef} onClick={onOpen}><BiMenuAltRight fontSize='30px' /></Button> </HStack>
                </HStack>
                <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef} >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Find your Cocktail</DrawerHeader>

                        <DrawerBody className='sidebarDrawerBody'>
                            <NavLink to='/cocktail/gin' className='sidebarNavLink'>Gin Cocktails<br/></NavLink>
                            <NavLink to='/cocktail/rum' className='sidebarNavLink'>Rum Cocktails<br/></NavLink>
                            <NavLink to='/cocktail/whiskey' className='sidebarNavLink'>Whiskey Cocktails<br/></NavLink>
                            <NavLink to='/cocktail/vodka' className='sidebarNavLink'>Vodka Cocktails<br/></NavLink>
                            <NavLink to='/cocktail/tequila' className='sidebarNavLink'>Tequila Cocktails<br/></NavLink>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
        </>
    );
};

export default Navbar;