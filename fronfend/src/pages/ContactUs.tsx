import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import whatsApp from '../assets/img/hugeicons_whatsapp.png';
import mail from '../assets/img/solar_letter-unread-outline.png';
import call from '../assets/img/solar_phone-calling-outline.png';
import { massegService } from '@/services/masseg.ts';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const getD = [
        { title: 'WhatsApp', link: 'https://wa.me/123456789', icon: whatsApp },
        { title: 'Email', link: 'mailto:example@example.com', icon: mail },
        { title: 'Call', link: 'tel:+123456789', icon: call },
    ];

    const onSubmit = async (data: any) => {
        try {
            setIsSubmitting(true);

            // Replace with your actual API endpoint
            await massegService.createmasseg({
                firstname: data.firstName,
                lastname: data.lastName,
                phone: data.phone,
                email: data.email,
                description: data.message,
            });

            // Show success toast notification
            toast.success('تم إرسال رسالتك بنجاح!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                rtl: true, // Right-to-left for Arabic
            });

            reset(); // Clear the form
        } catch (error) {
            console.error('Error submitting form:', error);

            // Show error toast notification
            toast.error(
                'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    rtl: true, // Right-to-left for Arabic
                }
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#F5FAFF] pb-10">
            {/* Toast Container for notifications */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="flex h-[244px] max-w-screen items-center justify-center bg-gradient-to-b from-[#F0577833] to-[#F0577800] text-4xl font-bold text-[#2D3645]">
                اتصل بنا
            </div>
            <div className="m-auto mt-20 w-4/5">
                <div className="mw-full grid grid-cols-3 justify-items-center gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
                    {getD.map((item, index) => (
                        <div
                            key={index}
                            className="flex gap-5 rounded-3xl p-6 max-xl:w-[350px] max-lg:w-[280px] max-lg:flex-col max-sm:items-center max-sm:justify-center"
                        >
                            <img
                                src={item.icon}
                                className="w-[70px] rounded-3xl p-5"
                                alt={item.title}
                            />
                            <a
                                href={item.link}
                                target="_blank"
                                className="flex flex-col gap-5 max-xl:gap-2 max-sm:text-center"
                                rel="noopener noreferrer"
                            >
                                <div>{item.title}</div>
                                <div>{item.link}</div>
                            </a>
                        </div>
                    ))}
                </div>
                <p className="mt-20 text-center">ابقي علي تواصل معنا</p>
                <p className="mt-4 text-center text-2xl">
                    لديك استفسار او اقتراح لا تترد فى التواصل معنا
                </p>
                <p className="mt-5 text-center">
                    اترك لنا رسالة وسيتم الرد عليك فى اقرب وقت
                </p>

                <div className="mt-20 flex items-center justify-center gap-6 max-lg:flex-col">
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="name mb-4 flex gap-4 max-sm:flex-col">
                            <div className="w-full">
                                <input
                                    type="text"
                                    className={`w-full rounded-lg px-3 ${errors.firstName ? 'border-red-500' : 'border-[#e1e1e1]'}`}
                                    style={{
                                        height: '50px',
                                        border: errors.firstName
                                            ? '1px solid #f56565'
                                            : '1px solid #e1e1e1',
                                    }}
                                    placeholder="الاسم الاول"
                                    {...register('firstName', {
                                        required: 'الاسم الأول مطلوب',
                                    })}
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {String(errors?.firstName?.message)}
                                    </p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    className={`w-full rounded-lg px-3 ${errors.lastName ? 'border-red-500' : 'border-[#e1e1e1]'}`}
                                    style={{
                                        height: '50px',
                                        border: errors.lastName
                                            ? '1px solid #f56565'
                                            : '1px solid #e1e1e1',
                                    }}
                                    placeholder="الاسم الاخير"
                                    {...register('lastName', {
                                        required: 'الاسم الأخير مطلوب',
                                    })}
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {String(errors?.lastName?.message)}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="contact mb-4 flex gap-4 max-sm:flex-col">
                            <div className="w-full">
                                <input
                                    type="tel"
                                    className={`w-full rounded-lg px-3 text-end ${errors.phone ? 'border-red-500' : 'border-[#e1e1e1]'}`}
                                    style={{
                                        height: '50px',
                                        border: errors.phone
                                            ? '1px solid #f56565'
                                            : '1px solid #e1e1e1',
                                    }}
                                    placeholder="رقم الهاتف"
                                    {...register('phone', {
                                        required: 'رقم الهاتف مطلوب',
                                        pattern: {
                                            value: /^[0-9+\s-]+$/,
                                            message: 'يرجى إدخال رقم هاتف صحيح',
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {String(errors.phone.message)}
                                    </p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="email"
                                    className={`w-full rounded-lg px-3 ${errors.email ? 'border-red-500' : 'border-[#e1e1e1]'}`}
                                    style={{
                                        height: '50px',
                                        border: errors.email
                                            ? '1px solid #f56565'
                                            : '1px solid #e1e1e1',
                                    }}
                                    placeholder="البريد الالكتروني"
                                    {...register('email', {
                                        required: 'البريد الإلكتروني مطلوب',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message:
                                                'يرجى إدخال بريد إلكتروني صحيح',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {String(errors.email.message)}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="w-full">
                            <textarea
                                style={{
                                    resize: 'none',
                                    height: '127px',
                                    border: errors.message
                                        ? '1px solid #f56565'
                                        : '1px solid #e1e1e1',
                                }}
                                className={`my-3 mt-3 w-full rounded-lg px-3 ${errors.message ? 'border-red-500' : 'border-[#e1e1e1]'}`}
                                placeholder="رسالتك"
                                {...register('message', {
                                    required: 'الرسالة مطلوبة',
                                })}
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-xs text-red-500">
                                    {String(errors.message.message)}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="mt-3 flex items-center justify-center rounded-3xl bg-red-400 py-2 text-lg font-bold text-white transition-colors hover:bg-red-500 disabled:bg-gray-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
                        </button>
                    </form>
                    <div className="flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13673.489259246086!2d31.368100!3d31.030633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzEuMDMwNjMzLCAzMS4zNjgxMDA=!5e0!3m2!1sen!2seg!4v1731748215457!5m2!1sen!2seg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-[450px] w-[600px] max-xl:w-[400px] max-sm:w-[300px]"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
