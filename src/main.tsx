import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme.ts';
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </ChakraProvider>
  </StrictMode>,
)
