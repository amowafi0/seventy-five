import FooterCard from './footercard.tsx';
import logo from '../../../assets/img/logo footer.png';
import call from '../../../assets/img/call.png';
import mas from '../../../assets/img/message.png';
import tiktok from '../../../assets/img/tiktok.png';
import snapchat from '../../../assets/img/snapchat.png';
import x from '../../../assets/img/x.png';
import instgram from '../../../assets/img/instgram.png';
import facebook from '../../../assets/img/facebook.png';
import whatapp from '../../../assets/img/whatsapp.svg';
import { Link } from 'react-router';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="w-full bg-[#F5FAFF] pt-52 max-sm:pt-96">
                <div className="relative flex min-h-[506px] w-full flex-col items-center justify-center bg-[#2D3645]">
                    <FooterCard />

                    <div className="grid grid-cols-3 gap-56 pt-44 pr-2 text-[#AAB2BB] max-xl:gap-20 max-lg:gap-3 max-sm:grid-cols-1 max-sm:gap-0 max-sm:pt-7">
                        <div className="flex max-w-[243px] flex-col items-start justify-center gap-10">
                            <div>
                                <img src={logo} className="" />
                            </div>
                            <div className="flex text-sm font-medium">
                                {' '}
                                نطمح لأن نكون الخيار الأول في المملكة العربية
                                السعودية لتصليح السيارات، من خلال تقديم تجربة
                                متميزة تتجاوز توقعات عملائنا، حيث تلتقي الجودة
                                مع الشفافية والثقة.
                            </div>
                        </div>
                        <div className="flex max-w-[243px] flex-col items-start justify-center pt-20 text-start">
                            <div className="flex items-start justify-start text-start text-white">
                                سفنتي فايف
                            </div>
                            <div className="grid grid-cols-2 justify-items-start">
                                <div className="flex flex-col gap-y-2 pt-4 text-start">
                                    <Link to={'/'} onClick={scrollToTop}>
                                        الرئيسية
                                    </Link>
                                    <Link
                                        to={`/about-us`}
                                        onClick={scrollToTop}
                                    >
                                        {' '}
                                        من نحن
                                    </Link>
                                    <Link
                                        to={'/Services'}
                                        onClick={scrollToTop}
                                    >
                                        خدماتنا
                                    </Link>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-y-2 pt-4 text-start">
                                    <Link
                                        to={'/frequently-asked-questions'}
                                        onClick={scrollToTop}
                                    >
                                        الاسئلة الشائعة
                                    </Link>
                                    <Link to={'/contact'} onClick={scrollToTop}>
                                        {' '}
                                        اتصل بنا
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[243px] flex-col items-start justify-center gap-6 pt-3">
                            <div className="flex items-start justify-start">
                                <ol className="flex h-[40px] w-[183px] gap-x-4">
                                    <button>
                                        <a
                                            href="https://www.tiktok.com/en/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={tiktok} />
                                        </a>
                                    </button>
                                    <button>
                                        <a
                                            href="https://www.snapchat.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={snapchat} />
                                        </a>
                                    </button>
                                    <button>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={instgram} />
                                        </a>
                                    </button>
                                    <button>
                                        <a
                                            href="https://x.com/?lang=en"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={x} />
                                        </a>
                                    </button>
                                    <button>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src={facebook} />
                                        </a>
                                    </button>
                                </ol>
                            </div>
                            <div className="flex flex-col gap-6 text-sm font-medium">
                                <div className="text-white">تواصل معنا</div>
                                <div className="flex flex-col gap-4">
                                    <a
                                        className="flex gap-2"
                                        href="tel:+966 55 290 4270"
                                    >
                                        <img src={call} />
                                        966552904270+
                                    </a>
                                    <a
                                        className="flex gap-2"
                                        href="https://wa.me/+966552904270"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        <img src={whatapp} />
                                        966552904270+
                                    </a>

                                    <a
                                        className="flex gap-2"
                                        href="mailto:info@rofood.com"
                                    >
                                        <img src={mas} />
                                        info@rofood.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-10 w-full border-[#606B7D26]" />
                    <div className="flex items-center justify-center pt-5 text-center text-[#AAB2BB]">
                        جميع الحقوق محفوظة ©2025 لموقع سفنتي فايف
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
