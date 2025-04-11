import Card from './Card.tsx';
import img1 from '../../../assets/img/985162464700725_1e2b.png';
import img2 from '../../../assets/img/4six6xIxAUpJVWvEdc4kfR0r7WApgdpYhruBQPWF40gEGUQohxcsA7QMGjCQ5trXZdkFQAerjHGt1r_hPs6TMPL5ICszESUvzTHPASXqRZy9f_1g6QX6SAfsgsK20xCqNnvHzuDjqVZRWW7BNCMKEZMoASRiD17XihWd4jo6kUWXTcRqIdFRWqkkTZSELX.png';
import img3 from '../../../assets/img/car-paint-protection.png';

function Serves() {
    return (
        <>
            <div className="min-h-[709px] bg-[#FBFCFF] pt-7">
                <div className="flex flex-col items-center justify-center gap-y-7 max-sm:mx-4">
                    <div className="text-[25px] font-medium text-[#F05778]">
                        خدماتنا
                    </div>
                    <div className="text-base font-medium text-[#606B7D]">
                        نقدم مجموعة واسعة من خدمات تصليح السيارات، تضمن لك
                        العناية المتكاملة بأعلى معايير الجودة والاحترافية
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[16px] pt-10">
                    <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
                        <Card
                            tite="استعد مظهر سيارتك الأصلي مع خدمات السمكرة والبوية المتكاملة. نقوم بإصلاح الخدوش والتجاعيد والطلاء المتضرر باستخدام مواد عالية الجودة لضمان نتائج تدوم طويلاً."
                            header=" السمكرة والبوية"
                            img={img2}
                        />
                        <Card
                            tite="نعالج كافة الأعطال الميكانيكية، من المشكلات البسيطة إلى المعقدة. خبراؤنا يستخدمون أحدث التقنيات لتشخيص وحل مشكلات المحرك، نظام الفرامل، التعليق، وغيرها"
                            header="الميكانيكا العامة"
                            img={img3}
                        />
                        <Card
                            tite='راحتك هي أولويتنا. نقدم خدمة "لباب المنزل" حيث نقوم باستلام سيارتك من موقعك، وإعادتها إليك بعد التصليح وهي في أفضل حالاتها. ببساطة، صوّر سيارتك وأرسل لنا التفاصيل، ونحن سنتكفل بالباقي'
                            header="خدمة لباب المنزل"
                            img={img1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Serves;
