// ResetPasswordPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { authService } from '@/services/auth';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/img/Logo header.png'; // Adjust path as needed

// Define validation schema
const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, 'كلمة المرور يجب أن تتكون من 8 أحرف على الأقل')
            .regex(
                /[A-Z]/,
                'يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل'
            )
            .regex(/[0-9]/, 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل'),
        passwordConfirm: z.string().min(1, 'يرجى تأكيد كلمة المرور'),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'كلمات المرور غير متطابقة',
        path: ['passwordConfirm'],
    });

function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [resetComplete, setResetComplete] = useState<boolean>(false);
    const [tokenValid, setTokenValid] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: '',
            passwordConfirm: '',
        },
    });

    useEffect(() => {
        const verifyToken = async () => {
            try {
                if (!token) {
                    toast.error(
                        'رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية'
                    );
                    return;
                }
                await authService.verifyResetToken(token);
                setTokenValid(true);
            } catch (error) {
                console.error('Invalid or expired token:', error);
                setTokenValid(false);
                toast.error(
                    'رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية'
                );
            }
        };

        if (token) {
            verifyToken();
        } else {
            setTokenValid(false);
        }
    }, [token]);

    const onSubmit = async (data: any) => {
        try {
            setIsLoading(true);

            if (!token) {
                toast.error('فشل تعيين كلمه المرور');
                return;
            }

            // Make API request to reset password
            await authService.resetPassword(token, {
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            });

            setResetComplete(true);
            toast.success('تم إعادة تعيين كلمة المرور بنجاح');

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error: any) {
            console.error('Reset password error:', error);

            const errorMessage =
                error.response?.data?.message ||
                'حدث خطأ أثناء إعادة تعيين كلمة المرور';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle redirection to login

    // Show loading state while verifying token
    if (tokenValid === null) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-[#F15B74]"></div>
                    <p className="mt-4 text-gray-600">
                        جاري التحقق من الرابط...
                    </p>
                </div>
            </div>
        );
    }

    // Show error if token is invalid
    if (tokenValid === false) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-lg bg-white p-6 shadow-md">
                    <div className="mb-6 text-center">
                        <img
                            src={logo}
                            alt="سفنتي فايف"
                            className="mx-auto h-16"
                        />
                        <h1 className="mt-4 text-xl font-bold text-gray-800">
                            رابط غير صالح
                        </h1>
                    </div>
                    <div className="mb-6 rounded-md bg-red-50 p-4 text-center">
                        <p className="text-red-700">
                            رابط إعادة تعيين كلمة المرور غير صالح أو منتهي
                            الصلاحية
                        </p>
                    </div>

                    <ToastContainer position="top-center" rtl={true} />
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md">
                <div className="border-b p-6 text-center">
                    <img src={logo} alt="سفنتي فايف" className="mx-auto h-16" />
                    <h1 className="mt-4 text-xl font-bold text-gray-800">
                        إعادة تعيين كلمة المرور
                    </h1>
                </div>

                <div className="p-6">
                    {resetComplete ? (
                        <div className="space-y-6">
                            <div className="rounded-md bg-green-50 p-4 text-center">
                                <p className="text-green-700">
                                    تم إعادة تعيين كلمة المرور بنجاح
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                    سيتم توجيهك إلى الصفحة الرئيسية يرجي تسجيل
                                    الدخول
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="mb-2 text-center text-sm text-gray-600">
                                الرجاء إدخال كلمة المرور الجديدة لحسابك
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <Input
                                        type="password"
                                        className="rounded-full p-6 text-right"
                                        placeholder="كلمة المرور الجديدة"
                                        {...register('password')}
                                        aria-invalid={
                                            errors.password ? 'true' : 'false'
                                        }
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-right text-sm text-red-500">
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
                                        aria-invalid={
                                            errors.passwordConfirm
                                                ? 'true'
                                                : 'false'
                                        }
                                    />
                                    {errors.passwordConfirm && (
                                        <p className="mt-1 text-right text-sm text-red-500">
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
                                {isLoading
                                    ? 'جاري المعالجة...'
                                    : 'إعادة تعيين كلمة المرور'}
                            </Button>

                            <div className="text-center text-sm"></div>
                        </form>
                    )}
                </div>
            </div>

            {/* Toast notifications */}
            <ToastContainer position="top-center" rtl={true} />
        </div>
    );
}

export default ResetPassword;
