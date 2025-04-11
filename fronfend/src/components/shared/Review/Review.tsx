import SwaiperReview from './Swiper.tsx';

function Review() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-7 bg-[#F5FAFF] py-8">
                <div className="text-2xl font-bold text-[#F05778]">
                    اراء عملائنا{' '}
                </div>
                <div className="text-base font-medium text-[#606B7D]">
                    تجارب عملائنا تتحدث عن خدماتنا
                </div>
                <div className="flex w-3/4 items-center justify-center">
                    <SwaiperReview />
                </div>
            </div>
        </>
    );
}

export default Review;
