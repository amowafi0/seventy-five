import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
} from '@/components/ui/dialog.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { authService } from '@/services/auth';
import { toast } from 'react-toastify';

interface Props {
    onClose: () => void;
    onSwitchToLogin: () => void;
    logo: string;
}

const RegisterSchema = z
    .object({
        firstname: z
            .string()
            .min(2, { message: 'يجب أن يكون الاسم الأول حرفين على الأقل' }),
        lastname: z
            .string()
            .min(2, { message: 'يجب أن يكون الاسم الأخير حرفين على الأقل' }),
        email: z
            .string()
            .email({ message: 'الرجاء إدخال عنوان بريد إلكتروني صحيح' }),
        password: z
            .string()
            .min(8, { message: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل' }),
        passwordConfirm: z
            .string()
            .min(1, { message: 'الرجاء تأكيد كلمة المرور' }),
        phone: z
            .string()
            .min(10, { message: 'يجب أن يكون رقم الجوال 10 أرقام على الأقل' })
            .regex(/^[0-9+]+$/, {
                message: 'يجب أن يحتوي رقم الجوال على أرقام فقط',
            }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'كلمات المرور غير متطابقة',
        path: ['passwordConfirm'],
    });

type RegisterFormData = z.infer<typeof RegisterSchema>;

function RegisterDialog({ onClose, onSwitchToLogin, logo }: Props) {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);

        try {
            // Show a loading toast when registration starts
            const loadingToastId = toast.loading('جاري إنشاء الحساب...', {
                position: 'top-right',
                rtl: true,
            });

            // Use the correct endpoint
            const response = await authService.signup({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                passwordConfirm: data.passwordConfirm,
                phone: data.phone,
            });

            // Handle successful registration
            console.log('Registration successful:', response.data);

            // Update the loading toast to success
            toast.update(loadingToastId, {
                render: 'تم إنشاء الحساب بنجاح!',
                type: 'success',
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
            });

            // Store the JWT token and close the dialog
            if (response.data.token) {
                // Store the token in localStorage
                localStorage.setItem('token', response.data.token);

                // Delay closing the dialog slightly to ensure the toast is visible
                setTimeout(() => {
                    onClose();
                    // Optional: reload to update auth state
                    window.location.reload();
                }, 300);
            } else {
                // If there's no token, show success but switch to login
                setTimeout(() => {
                    onSwitchToLogin();
                }, 300);
            }
        } catch (error) {
            let errorMessage = 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.';

            // Show error toast
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                rtl: true,
                pauseOnHover: true,
            });

            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DialogContent
            className="overflow-hidden p-0 sm:max-w-[425px]"
            dir="rtl"
        >
            <DialogHeader className="relative flex justify-center p-6">
                <DialogDescription className="text-center">
                    <img
                        src={logo}
                        className="mx-auto h-[60px] w-[272px]"
                        alt="سفنتي فايف"
                    />
                </DialogDescription>
            </DialogHeader>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 p-6"
            >
                <div className="text-center text-gray-500">
                    إنشاء حساب جديد من خلال البريد الإلكتروني
                </div>

                <div className="space-y-4">
                    <div>
                        <Input
                            className="rounded-full p-6 text-right"
                            placeholder="البريد الإلكتروني"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="mt-1 pr-3 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Input
                            className="rounded-full p-6 text-right"
                            placeholder="رقم الجوال"
                            {...register('phone')}
                        />
                        {errors.phone && (
                            <p className="mt-1 pr-3 text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Input
                                className="rounded-full p-6 text-right"
                                placeholder="الاسم الاخير"
                                {...register('lastname')}
                            />
                            {errors.lastname && (
                                <p className="mt-1 pr-3 text-sm text-red-500">
                                    {errors.lastname.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Input
                                className="rounded-full p-6 text-right"
                                placeholder="الاسم الاول"
                                {...register('firstname')}
                            />
                            {errors.firstname && (
                                <p className="mt-1 pr-3 text-sm text-red-500">
                                    {errors.firstname.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Input
                            type="password"
                            className="rounded-full p-6 text-right"
                            placeholder="كلمة المرور"
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className="mt-1 pr-3 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <Input
                            type="password"
                            className="rounded-full p-6 text-right"
                            placeholder="تأكيد كلمة المرور"
                            {...register('passwordConfirm')}
                        />
                        {errors.passwordConfirm && (
                            <p className="mt-1 pr-3 text-sm text-red-500">
                                {errors.passwordConfirm.message}
                            </p>
                        )}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full rounded-full bg-[#F15B74] py-6 text-lg text-white hover:bg-[#d84864]"
                    disabled={isLoading}
                >
                    {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب جديد'}
                </Button>

                <div className="text-center text-sm">
                    تمتلك حساب بالفعل؟{' '}
                    <button
                        type="button"
                        className="mr-1 text-blue-500"
                        onClick={onSwitchToLogin}
                    >
                        تسجيل الدخول
                    </button>
                </div>
            </form>
        </DialogContent>
    );
}

export default RegisterDialog;
