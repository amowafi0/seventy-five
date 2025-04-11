import aro from '../../../assets/img/solar_arrow-left-linear.png';
import { Link } from 'react-router';

interface CardProps {
    img: string;
    header: string;
    tite: string;
}

function Cardtherd({ img, header, tite }: CardProps) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="mx-2 min-h-[464px] max-w-[382px] rounded-3xl">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <img src={img} className="min-h-[220px] rounded-t-3xl" />
                    <h1 className="text-xl font-bold">{header}</h1>
                    <p className="min-h-[104px] max-w-[325px] text-base text-[#606B7D]">
                        {tite}
                    </p>
                    <button
                        className="flex h-[24px] w-[116px] items-center justify-center gap-1 text-center text-[#F05778]"
                        onClick={scrollToTop}
                    >
                        <Link
                            to="/request-service"
                            className="flex items-center justify-center gap-1"
                        >
                            طلب الخدمة
                            <img src={aro} className="h-[24px] w-[24px]" />
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cardtherd;
