import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading, HStack,
    Image,
    Input,
    Link,
    Text,
    useToast,
    VStack
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '../assets/images/logo.svg';
import { VscTriangleRight } from "react-icons/vsc";
import { LoginResponse } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client.ts";
import { useUser } from '../hooks/useUser.tsx';

const schema = z.object({
    email: z.string()
        .min(3, {message: 'An email is required to be at least 3 characters long'}),
    password: z.string()
        .min(8, {message: 'A password must be at least 8 characters long'})
})

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    const toast = useToast();
    const { setUser } = useUser();

    const onSubmit = (data: FieldValues) => {
        apiClient.post<LoginResponse>('/auth/signin', data)
            .then((res) => {
                console.log(res);
                localStorage.setItem('accessToken', res.data.accessToken);
                setUser(res.data.user);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.message);
                toast({
                    title: 'We couldn\'t sign you in',
                    description: err.response.data.message,
                    status: 'error',
                    position: 'top',
                    duration: 3000
                })
            });
    };

    return (
        <div className='loginView'>
            <div className='loginFormContainer'>
                <HStack alignItems='end'>
                    <Box width='40%' padding='1em'>
                        <Heading color='#a4e443'>Welcome<br /> to Spirit Artisans</Heading>
                        <p>This website is only accessible to registered users. Please log in or register an account to get
                           access to the world of cocktails. Here we can provide you with recipes, tips and tricks of the
                           trade.</p>
                    </Box>
                    <Box width='40%'>
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
                                        /> {errors.email && <Text color='red.400'>{errors.email.message}</Text>}
                                    </FormControl>
                                </Box>
                                <Box w='100%'>
                                    <FormControl>
                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input{...register('password')}
                                            type='password'
                                            id='password'
                                        /> {errors.password && <Text color='red.400'>{errors.password.message}</Text>}
                                    </FormControl>
                                </Box>
                                <Button
                                variant='themedButton'
                                type='submit'> Login </Button>
                                <Text display="inline" verticalAlign="middle"> No account?
                                    <VscTriangleRight
                                        style={{
                                            display: 'inline',
                                            verticalAlign: 'middle'
                                        }}
                                    />{' '}
                                    <Link href='#'>register</Link>
                                </Text>
                            </VStack>
                        </form>
                    </Box>
                </HStack>
            </div>
        </div>
    );
};

export default LoginForm;