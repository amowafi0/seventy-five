import Card from './Card.tsx';

function Steps() {
    return (
        <>
            <div className="min-h-[550px] bg-[#F5FAFF] pt-2 pb-4">
                <div className="flex flex-col items-center justify-center gap-y-7 max-sm:mx-5">
                    <div className="text-[25px] font-medium text-[#F05778]">
                        خطوات بسيطة، نتائج مبهرة
                    </div>
                    <div className="max-w-[801px] text-center text-base font-medium text-[#606B7D] max-lg:px-3">
                        في سفنتي فايف نجعل عملية إصلاح وتجديد سيارتك سهلة
                        وواضحة، مع ضمان الشفافية في كل خطوة. إليك كيف نعمل على
                        تقديم الخدمة بجودة واحترافية
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[16px] pt-16">
                    <div className="grid grid-cols-4 px-2 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1 xl:gap-10">
                        <Card
                            num="1"
                            header="التسجيل وتقديم الطلب"
                            title='احجز موعدك عبر نموذج الطلب على موقعنا،  يمكنك إدخال تفاصيل سيارتك ونوع الخدمة التي تحتاجها، أو حجز خدمة "لباب المنزل" ليقوم فريقنا باستلام سيارتك من موقعك'
                        />
                        <Card
                            num="2"
                            header="الفحص بدء بعملية الإصلاح"
                            title="عند وصول سيارتك، يقوم فريق الخبراء بإجراء فحص شامل لتشخيص حالة السيارة يبدأ فريقنا المتخصص في العمل على سيارتك باستخدام أحدث التقنيات ومواد عالية الجودة"
                        />
                        <Card
                            num="3"
                            header="متابعة مراحل العمل عبر الموقع"
                            title="أثناء عملية الإصلاح، يمكنك متابعة حالة سيارتك عبر الموقع، ومعرفة ما تم إنجازه في كل مرحلة بكل شفافية ومتابعه تقدم عملية السمكرة والطلاء خطوة بخطوة"
                        />
                        <Card
                            num="4"
                            header="التسليم النهائي"
                            title='بعد الانتهاء من التصليحات، نقوم بإجراء فحص نهائي للتأكد من الجودة، ثم يتم تسليم السيارة لك بأفضل حال، إما في الورشة أو عبر خدمة "لباب المنزل"'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Steps;
