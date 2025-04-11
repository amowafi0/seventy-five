import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import img from '../../assets/img/Screenshot 2024-11-04 175258 1.png';
import img1 from '../../assets/img/home-banner3.png';
import img2 from '../../assets/img/Screenshot 2024-11-04 175248 1.png';

function LastServes() {
    const navigation = { nextEl: '.custom-next', prevEl: '.custom-prev' };
    const swiperRef = useRef<SwiperClass>(null);
    const breakPoint = {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-7 bg-[#F5FAFF] py-5 pb-8">
                <div className="text-2xl font-bold text-[#F05778]">
                    أعمالنا تتحدث عن نفسها
                </div>
                <div className="flex w-full items-center justify-around px-2 text-base font-medium text-[#606B7D]">
                    <button
                        className="flex items-center gap-1"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <div className="order-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F057781A]/10 text-xs font-bold text-[#F05778] shadow-md">
                            السابق
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
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="max-sm:w-56 max-sm:pr-2">
                        {' '}
                        صور السيارات التي خضعت لخدماتنا المتنوعة في سفنتي فايف
                    </div>
                    <button
                        className="flex items-center gap-1"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <div className="order-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F057781A]/10 text-xs font-bold text-[#F05778] shadow-md">
                            التالي
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
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="w-3/4 pt-7">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation={navigation}
                        onSwiper={(swiper: SwiperClass) =>
                            (swiperRef.current = swiper)
                        }
                        pagination={{ clickable: true }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerGroup={1}
                        initialSlide={2}
                        breakpoints={breakPoint}
                    >
                        <SwiperSlide>
                            <div className="px flex justify-center">
                                <img
                                    src={img}
                                    className="h-[436px] w-[782px] max-lg:w-[590px] max-sm:w-[300px]"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px flex justify-center">
                                <img
                                    src={img1}
                                    className="h-[436px] w-[782px] max-lg:w-[590px] max-sm:w-[300px]"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="px flex justify-center">
                                <img
                                    src={img2}
                                    className="h-[436px] w-[782px] max-lg:w-[590px] max-sm:w-[300px]"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default LastServes;
