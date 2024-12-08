import { ReactNode, useState } from 'react';
import { User } from "../types/types.ts";
import { UserContext } from './UserContext.ts';

export const UserContextProvider = ({children}: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null); // Manage the global user state

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};