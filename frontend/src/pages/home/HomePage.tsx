import MainSwiper from './MainSwiper.tsx';
import AboutUs from './AboutUs.tsx';
import Serves from '@/components/shared/serves/Serves.tsx';
import WhyChooseSeventyFive from '@/components/shared/WhyChooseSeventyFive/WhyChooseSeventyFive.tsx';
import LastServes from '@/components/shared/LastServes.tsx';
import Review from '@/components/shared/Review/Review.tsx';
import Steps from '@/components/shared/steps/Steps.tsx';

function HomePage() {
    return (
        <>
            <MainSwiper />
            <AboutUs />
            <Serves />
            <WhyChooseSeventyFive />
            <LastServes />
            <Steps />
            <Review />
        </>
    );
}

export default HomePage;
