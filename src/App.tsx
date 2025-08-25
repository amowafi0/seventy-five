import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage.tsx';
import AboutUs from '@/pages/AboutUs.tsx';
import Serves from '@/pages/Serves.tsx';
import Contact from '@/pages/ContactUs.tsx';
import FrequentlyAskedQuestions from '@/pages/FrequentlyAskedQuestions.tsx';
import UserProfile from '@/pages/UserProfile/UserProfile.tsx';
import OrderList from '@/pages/OrderdList.tsx';
import TrackOrder from '@/pages/TrackOrder.tsx';
import NotFound from '@/pages/NotFound.tsx';
import RequestService from './pages/RequestService';
import ResetPassword from '@/pages/ResetPassword.tsx';
import AuthGuard from './guard/auth-guard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="services" element={<Serves />} />
            <Route path="contact" element={<Contact />} />
            <Route
                path="frequently-asked-questions"
                element={<FrequentlyAskedQuestions />}
            />
            <Route element={<AuthGuard />}>
                <Route path="orderlist" element={<OrderList />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="trackorder" element={<TrackOrder />} />
                <Route path="request-service" element={<RequestService />} />
            </Route>
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
