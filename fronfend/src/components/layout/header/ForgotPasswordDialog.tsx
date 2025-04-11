// ForgotPasswordDialog.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
} from '@/components/ui/dialog.tsx';
import { Input } from '@/components/ui/input.tsx';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { authService } from '@/services/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define Zod validation schema
const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, 'البريد الإلكتروني مطلوب')
        .email('الرجاء إدخال بريد إلكتروني صحيح'),
});

interface Props {
    onClose: () => void;
    onSwitchToLogin: () => void;
    logo: string;
}

function ForgotPasswordDialog({ onClose, onSwitchToLogin, logo }: Props) {
    const [isLoading, setIsLoading] = useState(false);

    // Initialize React Hook Form with Zod validation
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });

    // Handle form submission
    const onSubmit = async (data: any) => {
        try {
            setIsLoading(true);

            await authService.forgetPassword(data.email);

            // Show success notification
            toast.success('تم إرسال رمز التحقق بنجاح إلى بريدك الإلكتروني', {
                position: 'top-right',
                rtl: true,
            });

            // Reset form
            reset();

            // Optional: Redirect to login after a short delay
            setTimeout(() => {
                onSwitchToLogin();
            }, 3000);
        } catch (error: any) {
            // Handle error and show notification
            const errorMessage =
                error.response?.data?.message ||
                'حدث خطأ أثناء محاولة إرسال رمز التحقق';

            toast.error(errorMessage, {
                position: 'top-right',
                rtl: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <DialogContent className="overflow-hidden p-0 sm:max-w-[425px]">
                <DialogHeader className="relative flex justify-center p-6">
                    <button
                        className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                        onClick={onClose}
                        type="button"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
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
                        استعادة كلمة المرور
                    </div>

                    <div className="mb-2 text-center text-sm text-gray-600">
                        الرجاء إدخال البريد الإلكتروني المرتبط بحسابك لإرسال رمز
                        إعادة تعيين كلمة المرور
                    </div>

                    <div className="space-y-4">
                        <Input
                            className="rounded-full p-6 text-right"
                            placeholder="البريد الالكتروني"
                            {...register('email')}
                            aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && (
                            <p className="mt-1 text-right text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <Button
                        className="w-full rounded-full bg-[#F15B74] py-6 text-lg text-white hover:bg-[#d84864]"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'جاري الإرسال...' : 'إرسال رمز التحقق'}
                    </Button>

                    <div className="text-center text-sm">
                        <button
                            className="text-blue-500"
                            onClick={onSwitchToLogin}
                            type="button"
                        >
                            العودة إلى تسجيل الدخول
                        </button>
                    </div>
                </form>
            </DialogContent>

            {/* Toast Container for notifications - moved outside DialogContent */}
            <ToastContainer position="top-center" rtl={true} />
        </>
    );
}

export default ForgotPasswordDialog;
