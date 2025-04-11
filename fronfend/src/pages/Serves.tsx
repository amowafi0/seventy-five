import img1 from '../assets/img/3.png';
import img2 from '../assets/img/4.png';
import img3 from '../assets/img/5.png';
import img4 from '../assets/img/6.png';
import img5 from '../assets/img/7.png';

function Serves() {
    return (
        <div className="bg-[#F5FAFF]">
            <div className="flex h-[244px] max-w-screen items-center justify-center bg-gradient-to-b from-[#F0577833] to-[#F0577800] text-4xl font-bold text-[#2D3645]">
                خدماتنا{' '}
            </div>
            <div className="flex min-h-[400px] justify-center gap-4 px-3 max-sm:mx-5 max-sm:flex-col">
                <div className="max-lg flex w-[482px] flex-col items-start justify-center pb-32 text-start max-sm:order-1 max-sm:w-[270px]">
                    <h1 className="text-[38px] font-bold">
                        خدمات السمكرة والهيكل
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        نحن نعيد للسيارات شكلها الأصلي ونصلح أي أضرار في الهيكل
                        الخارجي، سواء كانت ناتجة عن حوادث أو خدوش، باستخدام
                        تقنيات حديثة وأدوات متقدمة لإعادة التناسق والجمال لهيكل
                        سيارتك.
                    </p>
                </div>
                <div className="h-[289px] w-[582px] max-sm:order-2 max-sm:w-[270px]">
                    <img src={img1} />
                </div>
            </div>
            <div className="flex min-h-[400px] justify-center gap-4 px-3 max-sm:mx-5 max-sm:flex-col">
                <div className="h-[289px] w-[582px] max-sm:order-2 max-sm:w-[270px]">
                    <img src={img2} />
                </div>
                <div className="flex w-[482px] flex-col items-start justify-center pb-32 text-start max-sm:order-1 max-sm:w-[270px]">
                    <h1 className="text-[38px] font-bold">
                        خدمات الدهان (البوية)
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        استعد بريق سيارتك من خلال خدمات الدهان المتخصصة لدينا.
                        نقدم خيارات متنوعة من الألوان عالية الجودة والتشطيبات
                        المتقنة التي تجعل سيارتك تبدو كالجديدة. نضمن لك مظهرًا
                        يدوم طويلاً ويتحمل الظروف الجوية.
                    </p>
                </div>
            </div>
            <div className="flex min-h-[400px] justify-center gap-4 px-3 max-sm:mx-5 max-sm:flex-col">
                <div className="flex w-[482px] flex-col items-start justify-center pb-32 text-start max-sm:w-[270px]">
                    <h1 className="text-[38px] font-bold">
                        الصيانة الميكانيكية
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        مهما كانت مشكلات السيارة، فريقنا من الفنيين المتمرسين
                        مستعد لتشخيص وإصلاح جميع أنواع الأعطال الميكانيكية. سواء
                        كانت في المحرك، نظام التعليق، أو أنظمة الكهرباء، نعتمد
                        أحدث التقنيات لضمان أداء فائق لسيارتك.
                    </p>
                </div>
                <div className="h-[289px] w-[582px] max-sm:w-[270px]">
                    <img src={img3} />
                </div>
            </div>
            <div className="flex min-h-[400px] justify-center gap-4 px-3 max-sm:mx-5 max-sm:flex-col">
                <div className="h-[289px] w-[582px] max-sm:order-2 max-sm:w-[270px]">
                    <img src={img4} />
                </div>
                <div className="flex w-[482px] flex-col items-start justify-center pb-32 text-start max-sm:order-1 max-sm:w-[270px]">
                    <h1 className="text-[38px] font-bold">خدمة لباب المنزل</h1>
                    <p className="text-base text-[#606B7D]">
                        انفردنا بتوفير نظام متابعة متكامل عبر موقعنا، حيث يمكنك
                        متابعة حالة سيارتك في كل مرحلة من مراحل الصيانة، مما
                        يمنحك الشفافية وراحة البال، ويضمن لك الاطلاع على كل خطوة
                        أثناء عملية الإصلاح.
                    </p>
                </div>
            </div>
            <div className="flex min-h-[400px] justify-center gap-4 px-3 max-sm:mx-5 max-sm:flex-col">
                <div className="flex w-[482px] flex-col items-start justify-center pb-32 text-start max-sm:w-[270px]">
                    <h1 className="text-[38px] font-bold">
                        المتابعة اللحظية عبر الموقع
                    </h1>
                    <p className="text-base text-[#606B7D]">
                        انفردنا بتوفير نظام متابعة متكامل عبر موقعنا، حيث يمكنك
                        متابعة حالة سيارتك في كل مرحلة من مراحل الصيانة، مما
                        يمنحك الشفافية وراحة البال، ويضمن لك الاطلاع على كل خطوة
                        أثناء عملية الإصلاح.
                    </p>
                </div>
                <div className="h-[289px] w-[582px] max-sm:w-[270px]">
                    <img src={img5} />
                </div>
            </div>
        </div>
    );
}

export default Serves;
