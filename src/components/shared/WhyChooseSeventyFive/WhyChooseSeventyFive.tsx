import Card from './card.tsx';
import img1 from '../../../assets/img/Screenshot 2024-11-04 175248 1.png';
import img2 from '../../../assets/img/Screenshot 2024-11-04 175253 1.png';
import img3 from '../../../assets/img/Screenshot 2024-11-04 175258 1.png';

function WhyChooseSeventyFive() {
    return (
        <>
            <div className="min-h-[709px] bg-[#F5FAFF] pt-7">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[25px] font-medium text-[#F05778] max-sm:text-[23px]">
                        لماذا تختار خدمات سفنتي فايف؟
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[16px] pt-7">
                    <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
                        <Card
                            img={img1}
                            header="جودة فائقة "
                            title="نهتم بأدق التفاصيل ونستخدم أحدث التقنيات لضمان نتائج مثالية"
                        />
                        <Card
                            img={img2}
                            header="تتبع مستمر"
                            title="نوفر لك إمكانية متابعة حالة سيارتك لحظة بلحظة عبر موقعنا الإلكتروني"
                        />
                        <Card
                            img={img3}
                            header="خدمة لباب المنزل"
                            title="نأتي إليك حيثما كنت، ونضمن لك راحة تامة من خلال خدمة استلام السيارة وإعادتها بعد التصليح"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChooseSeventyFive;
