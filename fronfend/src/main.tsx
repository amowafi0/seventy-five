import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/layout/header/Header.tsx';
import Footer from '@/components/layout/footer/footer.tsx';
import AuthProvider from './context/Auth/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <App />
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
