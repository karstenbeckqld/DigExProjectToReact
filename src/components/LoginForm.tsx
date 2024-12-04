import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    useColorMode,
    VStack,
    Image
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthClient from "../services/authClient.ts";

const schema = z.object({
    email: z.string()
        .min(3, { message: 'An email is required to be at least 3 characters long' }),
    password: z.string()
        .min(8, { message: 'A password must be at least 8 characters long' })
})

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const {colorMode} = useColorMode();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: zodResolver(schema)});
    const apiClient = new AuthClient('/signin');

    const onSubmit = (data: FieldValues) => {
        const res = apiClient.post(data);
        console.log(res);
    };

    return (
        <div className='loginView'>
            <Container width='100%' className={colorMode === 'dark' ? 'text-slate-50' : 'text-black'}>
                <HStack width='640px' maxW='100%' gap='60px' marginLeft='25%' margin-top='25%' alignItems='center' >
                    <Box maxW='320px' padding='1em'>
                        <h1>Welcome<br /> to Spirit Artisans</h1>
                        <Text>This website is only accessible to registered users. Please log in or register an account to get
                           access to the world of cocktails. Here we can provide you with recipes, tips and tricks of the
                           trade.</Text>
                    </Box>
                    <Box maxW='320px'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack spacing={4}> <Box w='100%' marginTop='80px'>
                            <Image src='../assets/images/logo-white.svg' width='300px' alt='Spirit Artisans Logo' />

                        </Box> <Box w='100%' h='80px'> <FormControl marginBottom={5}> <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input
                                    { ...register('email') }
                                    type='email'
                                    id="email"
                                />
                                {errors.email && <Text color='red.400'>{errors.email.message}</Text>}
                            </FormControl>
                        </Box>
                        <Box w='100%' h='80px'>
                            <FormControl>
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input
                                    { ...register('password') }
                                    type='password'
                                    id='password'
                                />
                                {errors.password && <Text color='red.400'>{errors.password.message}</Text>}
                            </FormControl>
                        </Box>
                        <Button
                            colorScheme='blue'
                            w='100%'
                            type='submit'
                            >Login</Button>
                    </VStack>
                </form>
                    </Box>
                </HStack>
            </Container>
        </div>
    );
};

export default LoginForm;