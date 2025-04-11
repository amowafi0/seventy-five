import WhyChooseSeventyFive from '@/components/shared/WhyChooseSeventyFive/WhyChooseSeventyFive.tsx';
import LastServes from '@/components/shared/LastServes.tsx';
import Review from '@/components/shared/Review/Review.tsx';
import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';

function AboutUs() {
    return (
        <div className="bg-[#F5FAFF]">
            <div className="flex h-[244px] max-w-screen items-center justify-center bg-gradient-to-b from-[#F0577833] to-[#F0577800] text-4xl font-bold text-[#2D3645]">
                من نحن
            </div>

            <div className="mx-auto flex min-h-[400px] items-center justify-center gap-40 pr-4 max-xl:gap-10 max-lg:gap-4 max-sm:mx-5 max-sm:flex-col max-sm:gap-1">
                <div className="flex max-w-[482px] flex-col items-center justify-start gap-10 pt-9 max-lg:max-w-[330px]">
                    <h1 className="text-[38px] font-bold">
                        نقدم تجربة استثنائية في عالم صيانة وإصلاح السيارات
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        من خلال مجموعة واسعة من الخدمات التي تشمل السمكرة،
                        والبوية، والصيانة الميكانيكية. نعتمد على فريق من الخبراء
                        المتخصصين الذين يضعون اهتمامهم بأدق التفاصيل لنعيد
                        لسيارتك رونقها وكأنها جديدة.
                    </p>
                </div>
                <div className="max-w-[585px]">
                    <img src={img1} />
                </div>
            </div>
            <div className="mx-auto flex min-h-[400px] items-center justify-center gap-40 pl-4 max-xl:gap-10 max-lg:gap-4 max-sm:mx-5 max-sm:flex-col max-sm:flex-col-reverse max-sm:gap-1">
                <div className="max-w-[585px]">
                    <img src={img2} />
                </div>
                <div className="flex max-w-[482px] flex-col items-start justify-start pt-9 text-start max-lg:max-w-[330px]">
                    <h1 className="text-[38px] font-bold">
                        نتفهم أهمية وقتك وراحتك
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        ولهذا نقدم لك خدمة "لباب المنزل" حيث يمكننا استلام
                        سيارتك من موقعك وإعادتها بعد إتمام التصليحات المطلوبة،
                        كما نتيح لك إمكانية متابعة مراحل الإصلاح عبر موقعنا، مما
                        يمنحك الشفافية والاطمئنان في كل خطوة.في سفنتي فايف،
                        هدفنا هو توفير خدمة متكاملة تجعل من صيانة سيارتك عملية
                        سهلة ومرضية، واضعين الجودة وثقة العميل على رأس
                        أولوياتنا.
                    </p>
                    <p className="pt-5 text-base font-bold text-[#F05778] max-lg:pt-2">
                        سفنتي فايف، الجودة التي تستحقها سيارتك!
                    </p>
                </div>
            </div>
            <WhyChooseSeventyFive />
            <LastServes />
            <Review />
        </div>
    );
}

export default AboutUs;
