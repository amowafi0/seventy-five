import { FC, PropsWithChildren, useState } from 'react';
import { User, AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<User | null>(
        localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user')!)
            : null
    );
    const [token, setToken] = useState<string | null>(
        localStorage.getItem('token')
    );
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        user !== null && token !== null
    );
    const navigate = useNavigate();

    const login = (user: User, token: string) => {
        setIsAuthenticated(true);
        setUser(user);
        setToken(token);
        localStorage.setItem('user', user ? JSON.stringify(user) : '');
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, user, token, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
