import { useNavigate } from 'react-router';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input.tsx';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import StyledDropzone from '@/components/ui/Dropzone';
import { FormProvider, useForm } from 'react-hook-form';

function RequestService() {
    const navigate = useNavigate();

    const SERVICES = [
        { label: 'سمكرة السيارة', value: 'bodywork' },
        { label: 'دهان السيارة', value: 'painting' },
        { label: 'إصلاح ميكانيكي', value: 'mechanical' },
    ];

    const [homePick, setHomePick] = useState<boolean>(false);
    const [date, setDate] = useState<Date>();
    const [open, setOpen] = useState(false);
    const methods = useForm();

    return (
        <div className="flex flex-col items-center justify-center bg-[#F5FAFF]">
            <div className="flex w-[1180px] flex-col gap-4 py-7 max-sm:w-screen">
                <div className="flex items-center gap-4 text-2xl font-bold">
                    <button
                        className="cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.47 5.46983C13.6106 5.32938 13.8012 5.25049 14 5.25049C14.1988 5.25049 14.3894 5.32938 14.53 5.46983L20.53 11.4698C20.6705 11.6105 20.7493 11.8011 20.7493 11.9998C20.7493 12.1986 20.6705 12.3892 20.53 12.5298L14.53 18.5298C14.4613 18.6035 14.3785 18.6626 14.2865 18.7036C14.1945 18.7446 14.0952 18.7666 13.9945 18.7684C13.8938 18.7702 13.7938 18.7517 13.7004 18.714C13.607 18.6762 13.5222 18.6201 13.451 18.5489C13.3797 18.4776 13.3236 18.3928 13.2859 18.2994C13.2482 18.206 13.2296 18.106 13.2314 18.0053C13.2332 17.9046 13.2552 17.8053 13.2962 17.7133C13.3372 17.6213 13.3963 17.5385 13.47 17.4698L18.19 12.7498H4C3.80109 12.7498 3.61032 12.6708 3.46967 12.5302C3.32902 12.3895 3.25 12.1987 3.25 11.9998C3.25 11.8009 3.32902 11.6102 3.46967 11.4695C3.61032 11.3288 3.80109 11.2498 4 11.2498H18.19L13.47 6.52983C13.3295 6.3892 13.2507 6.19858 13.2507 5.99983C13.2507 5.80108 13.3295 5.61045 13.47 5.46983Z"
                                fill="#858E99"
                            />
                        </svg>
                    </button>
                    <span>طلب الخدمة</span>
                </div>

                <div className="pr-10 text-sm font-medium text-[#606B7D]">
                    في سفنتي فايف، نسعى لجعل تجربة الصيانة والإصلاح سهلة ومرنة.
                    املأ النموذج أدناه لتحديد احتياجاتك، وسنقوم بالاهتمام بكافة
                    التفاصيل!
                </div>

                <FormProvider {...methods}>
                    {/* Car Information Section */}
                    <div className="mx-4 mt-4 min-h-[203px] max-w-full rounded-xl border bg-white">
                        <div className="py-4 pr-10 text-xl font-medium text-[#F05778]">
                            معلومات السيارة
                        </div>
                        <div className="mx-7 grid grid-cols-3 gap-3.5 border-t max-lg:grid-cols-2 max-sm:grid-cols-1">
                            <div className="grid grid-cols-1 gap-2 py-4">
                                <span className="font-medium">الماركة</span>
                                <Select>
                                    <SelectTrigger className="w-full bg-[#FCFEFF] py-7">
                                        <SelectValue
                                            className="text-[#757B8A]/70"
                                            placeholder="اختر ماركة سيارتك"
                                        />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#FCFEFF]">
                                        <SelectGroup>
                                            <SelectItem value="bmw">
                                                BMW
                                            </SelectItem>
                                            <SelectItem value="banana">
                                                Banana
                                            </SelectItem>
                                            <SelectItem value="blueberry">
                                                Blueberry
                                            </SelectItem>
                                            <SelectItem value="grapes">
                                                Grapes
                                            </SelectItem>
                                            <SelectItem value="pineapple">
                                                Pineapple
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-1 gap-2 py-4">
                                <span className="font-medium">الموديل</span>
                                <Select>
                                    <SelectTrigger className="w-full bg-[#FCFEFF] py-7">
                                        <SelectValue
                                            className="text-[#757B8A]/70"
                                            placeholder="حدد موديل سيارتك"
                                        />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#FCFEFF]">
                                        <SelectItem value="light">
                                            Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-1 gap-2 py-4">
                                <span className="font-medium">
                                    رقم لوحة السياره
                                </span>
                                <Input
                                    type="text"
                                    placeholder="ادخل رقم لوحة السياره"
                                    className="w-full bg-[#FCFEFF] py-7 placeholder:text-[#757B8A]/70"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Requested Services Section */}
                    <div className="mx-4 min-h-[259px] rounded-xl border bg-white">
                        <div className="py-4 pr-10 text-xl font-medium text-[#F05778] max-md:pr-8">
                            الخدمات المطلوبة
                        </div>
                        <div className="flex flex-col border-t px-8 py-4 font-medium text-[#2D3645]">
                            <div className="mt-3.5 grid grid-cols-3 gap-48 max-lg:grid-cols-2 max-lg:gap-4 max-sm:grid-cols-1 max-sm:gap-8">
                                {SERVICES.map((service) => (
                                    <div
                                        key={service.value}
                                        className="flex items-center gap-4 max-sm:gap-3"
                                    >
                                        <Checkbox className="h-[24px] w-[24px] accent-[#0ca678]" />
                                        {service.label}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-col gap-4">
                                <div>
                                    وصف المشكلة
                                    <span className="pr-1 text-xs text-[#7f8792]">
                                        (اختياري)
                                    </span>
                                </div>
                                <textarea
                                    placeholder="شاركنا بأي تفاصيل أو مشاكل تريد حلها لتسهيل عملية التشخيص"
                                    className="min-h-[56px] w-full rounded-[10px] border bg-[#F5FAFF] pr-2 whitespace-pre-line placeholder:text-[#757B8A]/70"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Home Service Section */}
                    <div className="mx-4 max-w-full rounded-xl border bg-white">
                        <div className="py-4 pr-10 text-xl font-medium text-[#F05778]">
                            خدمة لباب المنزل
                        </div>
                        <div className="flex flex-col border-t px-8 py-4 font-medium text-[#2D3645]">
                            <span className="font-medium text-[#606B7D]">
                                إذا كنت ترغب في الاستفادة من خدمة لباب المنزل،
                                الرجاء تفعيل الخيار أدناه، وسيقوم فريقنا بترتيب
                                موعد لاستلام السيارة من موقعك وإعادتها بعد إتمام
                                الخدمة.
                            </span>
                            <div className="mt-5 w-full rounded-[10px] bg-[#36CA56]/10 px-6 py-5">
                                <div className="flex items-center gap-4 max-sm:gap-3">
                                    <Checkbox
                                        onCheckedChange={(checked: boolean) =>
                                            setHomePick(checked)
                                        }
                                        className="h-[24px] w-[24px] accent-[#0ca678]"
                                    />
                                    تفعيل خدمة لباب المنزل
                                </div>
                            </div>
                            {homePick && (
                                <div className="mt-5 flex space-x-6 max-sm:flex-col max-sm:gap-4">
                                    <div className="w-full">
                                        <span className="font-medium">
                                            رقم لوحة السياره
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="أدخل عنوانك الكامل لاستلام السيارة"
                                            className="mt-3 w-full bg-[#FCFEFF] py-7 placeholder:text-[#757B8A]/70"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <span className="font-medium">
                                            وقت الاستلام المفضل
                                        </span>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'mt-3 w-full justify-between bg-[#FCFEFF] py-7 text-left font-normal',
                                                        !date &&
                                                            'text-muted-foreground'
                                                    )}
                                                >
                                                    {date ? (
                                                        format(date, 'PPP')
                                                    ) : (
                                                        <span className="text-[#757B8A]/70">
                                                            حدد الوقت المناسب لك
                                                            لاستلام السيارة
                                                        </span>
                                                    )}

                                                    <svg
                                                        className="h-[24px] w-[24px]"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
                                                            fill="#F05778"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M6.99998 1.75C7.19889 1.75 7.38965 1.82902 7.53031 1.96967C7.67096 2.11032 7.74998 2.30109 7.74998 2.5V3.263C8.41198 3.25 9.14098 3.25 9.94298 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4696 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.2563 3.37233 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.94498C8.10698 22.75 6.65098 22.75 5.51198 22.597C4.33998 22.439 3.39098 22.107 2.64198 21.359C1.89398 20.61 1.56198 19.661 1.40398 18.489C1.25098 17.349 1.25098 15.894 1.25098 14.056V11.944C1.25098 10.106 1.25098 8.65 1.40398 7.511C1.56198 6.339 1.89398 5.39 2.64198 4.641C3.39098 3.893 4.33998 3.561 5.51198 3.403C5.74531 3.37233 5.99164 3.347 6.25098 3.327V2.5C6.25098 2.30126 6.32986 2.11065 6.47029 1.97002C6.61073 1.8294 6.80124 1.75026 6.99998 1.75ZM5.70998 4.89C4.70498 5.025 4.12498 5.279 3.70198 5.702C3.27898 6.125 3.02498 6.705 2.88998 7.71C2.86731 7.88 2.84798 8.05967 2.83198 8.249H21.168C21.152 8.05967 21.1326 7.87967 21.11 7.709C20.975 6.704 20.721 6.124 20.298 5.701C19.875 5.278 19.295 5.024 18.289 4.889C17.262 4.751 15.907 4.749 14 4.749H9.99998C8.09298 4.749 6.73898 4.752 5.70998 4.89ZM2.74998 12C2.74998 11.146 2.74998 10.403 2.76298 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H9.99998C8.09298 21.25 6.73898 21.248 5.70998 21.11C4.70498 20.975 4.12498 20.721 3.70198 20.298C3.27898 19.875 3.02498 19.295 2.88998 18.289C2.75198 17.262 2.74998 15.907 2.74998 14V12Z"
                                                            fill="#F05778"
                                                        />
                                                    </svg>
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    selected={date}
                                                    onSelect={(selectedDate) => {
                                                        setDate(selectedDate);
                                                        setOpen(false);
                                                    }}
                                                    disabled={false}
                                                    placeholder="حدد التاريخ"
                                                    className="p-3"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mx-4 max-w-full rounded-xl border bg-white">
                        <div className="py-4 pr-10 text-xl font-medium text-[#F05778]">
                            صور السيارة
                            <span className="pr-1 text-sm text-[#7f8792]">
                                (اختياري)
                            </span>
                        </div>
                        <div className="flex flex-col border-t px-8 py-4 font-medium text-[#2D3645]">
                            <span className="font-medium text-[#606B7D]">
                                يمكنك تحميل صور توضح حالة السيارة للمساعدة في
                                تقييم الحالة قبل الوصول إليها.
                            </span>

                            <StyledDropzone name="carImages" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <button className="h-[56px] w-[282px] cursor-pointer rounded-full bg-[#F05778] text-white hover:bg-[#F05778]/85">
                            إرسال الطلب
                        </button>
                    </div>
                </FormProvider>
            </div>
        </div>
    );
}

export default RequestService;
