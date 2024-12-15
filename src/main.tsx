import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme.ts';
import './index.css'
import App from "./App.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2
        }
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </ChakraProvider>
  </StrictMode>
)

// {path: '/', element: <Home />},
//     // {path: '/signin', element: <LoginForm / >},
//     // {path: '/signup', element: <RegisterForm / >},
//     // {path: '/profile', element: <Profile / >},
//     // {path: '/editProfile', element: <EditProfile / >},
//     // {path: '/guide', element: <Guide / >},
//     // {path: '/cocktail/:type', element: <SpiritOverview / >},
//     // {path: '/cocktail/edit/:id', element: <EditCocktail / >},
//     // {path: '/cocktail/:id', element: <CocktailDetailView / >},
//     // {path: '/add_cocktail', element: <AddCocktailView / >},
//     // {path: '/admin', element: <AdminView />},
//     // {path: '/adminEditProfile/id', element: <AdminEditProfileView />},
//     // {path: '/about', element: <AboutView />},
//     // {path: '404', element: <FourOFourView />},