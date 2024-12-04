import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input, Link,
    Text,
    useColorMode,
    VStack
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthClient from "../services/authClient.ts";
import logo from '../assets/images/logo-white.svg';
import { VscTriangleRight } from "react-icons/vsc";

const schema = z.object({
    email: z.string()
        .min(3, {message: 'An email is required to be at least 3 characters long'}),
    password: z.string()
        .min(8, {message: 'A password must be at least 8 characters long'})
})

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const {colorMode} = useColorMode();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});
    const apiClient = new AuthClient('/signin');

    const onSubmit = (data: FieldValues) => {
        const res = apiClient.post(data);
        console.log(res);
    };

    return (
        <div className='loginView'>
            <Flex
                className={colorMode === 'dark' ? 'text-slate-50' : 'text-black'}
                width={{
                    lg: '40%',
                    md: '80%',
                    sm: '100%'
                }}
                marginLeft={{
                    lg: '50%',
                    md: '80%',
                    sm: '0'
                }}
                gap='60px'
                alignItems='end'
                justifyContent='space-between'
            >
                <Box width='50%' padding='1em'>
                    <Heading color='#a4e443'>Welcome<br /> to Spirit Artisans</Heading>
                    <Text>This website is only accessible to registered users. Please log in or register an account to get
                          access to the world of cocktails. Here we can provide you with recipes, tips and tricks of the
                          trade.</Text>
                </Box>
                <Box width='50%'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack spacing={4}>
                            <Box marginTop='80px'>
                            <Image src={logo} width='300px' alt='Spirit Artisans Logo' />
                            </Box>
                            <Box w='100%'>
                                <FormControl marginBottom={5}>
                                    <FormLabel htmlFor='email'>Email</FormLabel>
                                    <Input{...register('email')}
                                        type='email'
                                        id="email"
                                    />
                                    {errors.email && <Text color='red.400'>{errors.email.message}</Text>}
                                </FormControl>
                            </Box>
                            <Box w='100%'>
                                <FormControl>
                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                    <Input{...register('password')}
                                        type='password'
                                        id='password'
                                    />
                                    {errors.password && <Text color='red.400'>{errors.password.message}</Text>}
                                </FormControl>
                            </Box>
                            <Button
                                variant='themedButton'
                                type='submit'>
                                Login
                            </Button>
                            <Text display="inline" verticalAlign="middle">
                                No account? <VscTriangleRight style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                                <Link href='#'>register</Link></Text>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </div>
    );
};

export default LoginForm;