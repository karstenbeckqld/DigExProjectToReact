import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from './pages/Home.tsx';
import LoginForm from "./pages/LoginForm.tsx";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: '/',
        element: React.createElement(Home)
    },
    {
        path: '/signin',
        element: React.createElement(LoginForm)
    }
] satisfies RouteObject[])

export default router;