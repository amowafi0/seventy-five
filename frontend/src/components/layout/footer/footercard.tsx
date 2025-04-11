import maskimg from '../../../assets/img/Mask and img footer.png';
import { NavLink } from 'react-router';

function FooterCard() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="absolute bottom-[330px] flex h-[350px] w-[1182px] rounded-3xl bg-[#f05778] pr-10 max-xl:w-[1000px] max-xl:pr-6 max-lg:w-[750px] max-sm:bottom-[720px] max-sm:w-[300px]">
            <div className="flex items-center justify-center max-xl:w-[500px] max-lg:w-[320px]">
                <div className="flex max-w-[550px] flex-col items-start gap-[16px] pl-[45px] max-md:gap-0">
                    <div className="flex h-[49px] max-w-[453px] items-center justify-start text-start text-3xl font-bold text-white">
                        خدمات سفنتي فايف لباب المنزل
                    </div>
                    <div className="flexitems-center flex h-[96px] max-w-[437px] justify-start text-start text-xl text-white max-sm:pt-3">
                        استمتع بتجربة مريحة وسلسة مع خدمة لباب المنزل، حيث نحرص
                        على تقديم أفضل خدمة لك، دون الحاجة للخروج من منزلك
                    </div>
                    <NavLink
                        to="request-service"
                        className="h-[38px] max-w-[160px] rounded-2xl bg-[#2D3645] text-white max-lg:mt-4 max-sm:mt-20"
                    >
                        <button
                            onClick={scrollToTop}
                            className="h-[38px] w-[160px] rounded-2xl bg-[#2D3645] text-sm text-white"
                        >
                            <span className="font-medium">اطلب الخدمة</span>
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center max-sm:hidden">
                <img
                    src={maskimg}
                    className="absolute bg-cover max-xl:w-[450px] max-lg:w-[400px]"
                />
            </div>
        </div>
    );
}
export default FooterCard;
