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
