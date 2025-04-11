import { createContext, useContext } from 'react';

export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    photo: string;
    phone: string;
    role: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);
