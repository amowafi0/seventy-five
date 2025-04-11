import Steps from '@/components/shared/steps/Steps.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function FrequentlyAskedQuestions() {
    return (
        <div className="bg-[#F5FAFF]">
            <div className="flex h-[244px] max-w-screen items-center justify-center bg-gradient-to-b from-[#F0577833] to-[#F0577800] text-4xl font-bold text-[#2D3645]">
                الاسئلة الشائعة
            </div>
            <div className="flex justify-center max-sm:mx-2.5">
                <div className="flex gap-3.5 max-sm:flex-col max-sm:gap-y-10">
                    <div className="flex w-[580px] flex-col gap-4 max-sm:w-full">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    كيف أطلب خدمة لباب المنزل؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    يمكنك طلب خدمة لباب المنزل بسهولة من خلال
                                    نموذج الطلب المتوفر على موقعنا. قم بتعبئة
                                    بيانات سيارتك، وتحميل صور للسيارة، وتحديد
                                    الخدمات المطلوبة، وسيقوم فريقنا بالتواصل معك
                                    لتأكيد الطلب وتحديد موعد الاستلام.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    هل أستطيع اختيار نوع الدهان أو التشطيب
                                    لسيارتي؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    نوفر لك إمكانية متابعة حالة سيارتك عبر
                                    الموقع. بعد تسجيل الدخول إلى حسابك، يمكنك
                                    الاطلاع على مراحل العمل وتحديثات حالة
                                    السيارة في الوقت الفعلي، مما يضمن لك
                                    الشفافية والاطمئنان.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    هل تقدمون ضماناً على خدماتكم؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    نوفر لك إمكانية متابعة حالة سيارتك عبر
                                    الموقع. بعد تسجيل الدخول إلى حسابك، يمكنك
                                    الاطلاع على مراحل العمل وتحديثات حالة
                                    السيارة في الوقت الفعلي، مما يضمن لك
                                    الشفافية والاطمئنان.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="flex w-[580px] flex-col gap-4 max-sm:w-full">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    كيف أتابع حالة سيارتي أثناء الإصلاح؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    نوفر لك إمكانية متابعة حالة سيارتك عبر
                                    الموقع. بعد تسجيل الدخول إلى حسابك، يمكنك
                                    الاطلاع على مراحل العمل وتحديثات حالة
                                    السيارة في الوقت الفعلي، مما يضمن لك
                                    الشفافية والاطمئنان.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    ما هي مدة إصلاح السيارة عادةً؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    نوفر لك إمكانية متابعة حالة سيارتك عبر
                                    الموقع. بعد تسجيل الدخول إلى حسابك، يمكنك
                                    الاطلاع على مراحل العمل وتحديثات حالة
                                    السيارة في الوقت الفعلي، مما يضمن لك
                                    الشفافية والاطمئنان.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    هل يمكنني إلغاء أو تعديل موعد الاستلام؟
                                </AccordionTrigger>
                                <AccordionContent>
                                    نوفر لك إمكانية متابعة حالة سيارتك عبر
                                    الموقع. بعد تسجيل الدخول إلى حسابك، يمكنك
                                    الاطلاع على مراحل العمل وتحديثات حالة
                                    السيارة في الوقت الفعلي، مما يضمن لك
                                    الشفافية والاطمئنان.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="pt-36">
                <Steps />
            </div>
        </div>
    );
}

export default FrequentlyAskedQuestions;
