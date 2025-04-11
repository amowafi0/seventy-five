import { useAuth } from '@/context/Auth/AuthContext';
import { Navigate, Outlet } from 'react-router';

const AuthGuard = () => {
    const auth = useAuth();

    if (!auth?.isAuthenticated) {
        return <Navigate to="/" replace={true} />;
    }

    return <Outlet />;
};

export default AuthGuard;
