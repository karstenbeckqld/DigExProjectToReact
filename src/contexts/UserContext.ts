import { createContext } from 'react';
import { UserContextType } from '../types/types.ts';

export const UserContext = createContext<UserContextType | undefined>(undefined);