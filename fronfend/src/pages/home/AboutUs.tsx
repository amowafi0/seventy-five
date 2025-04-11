import img from '../../assets/img/Screenshot 2024-11-03 230042_upscayl_4x_ultramix_balanced 1.png';
import { NavLink } from 'react-router';

function AboutUs() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="flex justify-center bg-[#F5FAFF] py-20 max-md:flex-col">
                <div className="flex max-w-[678px] flex-col items-start justify-start pt-7 text-start max-xl:pr-8 max-md:pr-1 max-sm:mx-4">
                    <div className="text-start text-2xl font-medium text-[#F05778]">
                        من نحن
                    </div>
                    <div className="min-h-[107px] max-w-[538px] pt-3 text-[38px] font-medium max-md:text-[30px]">
                        خيارك الأول والمميز في المملكة لسمكــــــرة
                        وبــــــــوية سـيارتك
                    </div>
                    <div className="min-h-[104px] max-w-[456px] pt-3 text-[16px] text-[#606B7D]">
                        ورشة متخصصة في تصليح السيارات، نقدم خدمات عالية الجودة
                        تشمل السمكرة، البوية، والميكانيكا بلمسة احترافية ومعايير
                        متقدمة. نحن نؤمن بأن كل سيارة تستحق العناية الكاملة،
                        ولهذا نسعى لنكون الوجهة الأولى لمالكي السيارات الذين
                        يبحثون عن حلول دقيقة وموثوقة
                    </div>
                    <div className="mt-4 h-[38px] w-[160px] items-start justify-center rounded-2xl bg-[#F05778] text-white">
                        <button className="h-[38px] w-[160px] rounded-2xl">
                            <NavLink to={'/about-us'} onClick={scrollToTop}>
                                اعرف اكثر
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div className="flex h-[432px] max-w-[678px] items-center justify-center">
                    <img
                        src={img}
                        className="max-h-[432px] w-[678px] max-sm:bg-contain"
                    />
                </div>
            </div>
        </>
    );
}

export default AboutUs;
