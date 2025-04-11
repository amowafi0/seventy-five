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
import { useAuth } from '@/context/Auth/AuthContext';

interface LoginDialogProps {
    onClose: () => void;
    onSwitchToRegister: () => void;
    onSwitchToForgotPassword: () => void;
    logo: string;
}

const LoginSchema = z.object({
    email: z
        .string()
        .email({ message: 'الرجاء إدخال عنوان بريد إلكتروني صحيح' }),
    password: z
        .string()
        .min(8, { message: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل' }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

function LoginDialog({
    onClose,
    onSwitchToRegister,
    onSwitchToForgotPassword,
    logo,
}: LoginDialogProps) {
    const [isLoading, setIsLoading] = useState(false);

    const auth = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const response = await authService.login({
                email: data.email,
                password: data.password,
            });
            console.log(response);
            if (response.token) {
                auth?.login(response.data.user, response.token);
                setTimeout(() => {
                    toast.success('تم تسجيل الدخول بنجاح!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        rtl: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }, 300);
                onClose();
            }
        } catch (error) {
            let errorMessage = 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.';
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                rtl: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.error('Login error:', error);
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
                    تسجيل الدخول من خلال البريد الإلكتروني
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

                    <div className="text-right">
                        <button
                            type="button"
                            className="cursor-pointer text-sm text-blue-500"
                            onClick={onSwitchToForgotPassword}
                        >
                            نسيت كلمة المرور؟
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full rounded-full bg-[#F15B74] py-6 text-lg text-white hover:bg-[#d84864]"
                    disabled={isLoading}
                >
                    {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </Button>

                <div className="text-center text-sm">
                    لا تمتلك حساب؟{' '}
                    <button
                        type="button"
                        className="mr-1 text-blue-500"
                        onClick={onSwitchToRegister}
                    >
                        قم بإنشاء حساب جديد
                    </button>
                </div>
            </form>
        </DialogContent>
    );
}

export default LoginDialog;
