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

export interface Cocktail {
    _id: string;
    cocktailName: string;
    spiritName: string;
    preparation: string;
    ingredients: string[];
    story: string;
    cocktailImage: string;
    tips: string;
    cocktailHeaderImage: string;
}

export interface Login {
    email: string;
    password: string;
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



export interface FetchCocktailResponse<T> {
    results: T[];
}