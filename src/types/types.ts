import React, { SetStateAction } from "react";

export interface User  {
    firstName: string;
    lastName: string;
    email: string;
    accessLevel: number;
    password: string;
    avatar: string;
    bio: string;
    newUser: boolean;
}

export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    user: User;
}

export interface Toast {
    id: string;
    content: string;
    type?: string;
}

export interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<SetStateAction<User | null>>;
}