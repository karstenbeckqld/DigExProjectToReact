import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                themedButton: {
                    bg: '#a4e443', // Background color
                    color: 'black',
                    width: '100%',
                    _hover: {
                        bg: '#7fb035', // Hover background color
                        color: 'white'
                    },
                },
            },
        },
    },
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111',
        }
    }
});

export default theme;