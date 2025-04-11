import {
    Navigation,
    Pagination,
    Scrollbar,
    Autoplay,
    A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import { useRef } from 'react';
import { Link } from 'react-router';

function MainSwiper() {
    const swiperRef = useRef<SwiperClass>(null);

    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            loop={true}
        >
            <SwiperSlide>
                <div className="slider1 relative flex h-[624px] w-screen flex-col items-center justify-center gap-5">
                    <div className="slidermask relative flex h-[624px] w-screen flex-col items-center justify-center gap-5">
                        <div className="flex min-h-[154px] max-w-[538px] flex-col items-center justify-center gap-3 pb-5 text-center">
                            <div className="text-2xl font-bold text-[#F05778]">
                                سفنتي فايف
                            </div>
                            <div className="text-[42px] font-bold text-white max-md:text-[35px]">
                                خدمة سمكرة وبوية سياراتك باحترافية وجودة عالية
                            </div>
                        </div>
                        <div className="flex min-h-[53px] w-[683px] items-center justify-center text-center text-white max-sm:w-[300px]">
                            استمتع بخدمات متكاملة تشمل السمكرة، البوية،
                            والميكانيكا من فريق من الخبراء المتخصصين. الآن يمكنك
                            متابعة حالة سيارتك خطوة بخطوة، من الاستلام وحتى
                            التسليم، بكل سهولة وشفافية. راحتك تهمنا!
                        </div>
                        <div className="flex items-center justify-center gap-8 pt-4 max-md:flex-col">
                            <button className="h-[38px] w-[160px] cursor-pointer rounded-3xl border border-[#F05778] text-xs font-bold text-white">
                                <Link to="/Services">معرفة التفاصيل</Link>
                            </button>
                            <button className="h-[38px] w-[160px] cursor-pointer rounded-3xl border bg-[#F05778] text-xs font-bold text-white">
                                <Link to="/request-service">
                                    احجز موعدك الآن
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider1 relative flex h-[624px] w-screen flex-col items-center justify-center gap-5">
                    <div className="slidermask relative flex h-[624px] w-screen flex-col items-center justify-center gap-5">
                        <div className="flex min-h-[154px] max-w-[538px] flex-col items-center justify-center gap-3 pb-5 text-center">
                            <div className="text-2xl font-bold text-[#F05778]">
                                سفنتي فايف
                            </div>
                            <div className="text-[42px] font-bold text-white max-md:text-[35px]">
                                خدمة سمكرة وبوية سياراتك باحترافية وجودة عالية
                            </div>
                        </div>
                        <div className="flex min-h-[53px] w-[683px] items-center justify-center text-center text-white max-sm:w-[300px]">
                            استمتع بخدمات متكاملة تشمل السمكرة، البوية،
                            والميكانيكا من فريق من الخبراء المتخصصين. الآن يمكنك
                            متابعة حالة سيارتك خطوة بخطوة، من الاستلام وحتى
                            التسليم، بكل سهولة وشفافية. راحتك تهمنا!
                        </div>
                        <div className="flex items-center justify-center gap-8 pt-4 max-md:flex-col">
                            <button className="h-[38px] w-[160px] cursor-pointer rounded-3xl border border-[#F05778] text-xs font-bold text-white">
                                <Link to="/Services">معرفة التفاصيل</Link>
                            </button>
                            <button className="h-[38px] w-[160px] cursor-pointer rounded-3xl border bg-[#F05778] text-xs font-bold text-white">
                                <Link to="/request-service">
                                    احجز موعدك الآن
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <button
                className="custom-prev absolute top-1/2 left-2 z-10 ml-20 flex -translate-y-1/2 transform items-center gap-1 max-lg:ml-5 max-sm:hidden"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <div className="order-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F057781A] text-xs font-bold text-white shadow-md">
                    السابق
                </div>
                <svg
                    className="order-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 12H4M4 12L10 6M4 12L10 18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <button
                className="custom-next absolute top-1/2 right-2 z-10 mr-20 flex -translate-y-1/2 transform items-center gap-1 max-lg:mr-5 max-sm:hidden"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <div className="order-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F057781A] text-xs font-bold text-white shadow-md">
                    التالي
                </div>
                <svg
                    className="order-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </Swiper>
    );
}

export default MainSwiper;
