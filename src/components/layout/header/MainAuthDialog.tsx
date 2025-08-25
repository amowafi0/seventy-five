// MainAuthDialog.jsx
import { Button } from "@/components/ui/button.tsx";
import { DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog.tsx";
import { X } from "lucide-react";

interface Props {
    onClose: () => void;
    onLoginClick: () => void;
    onRegisterClick: () => void;
    logo: string;
}

function MainAuthDialog({ onClose, onLoginClick, onRegisterClick, logo }: Props) {
    return (
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
            <DialogHeader className="p-6 flex justify-center relative">
                <button
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={onClose}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
                <DialogDescription className="text-center">
                    <img src={logo} className="w-[272px] h-[60px] mx-auto" alt="سفنتي فايف"/>
                </DialogDescription>
            </DialogHeader>

            <div className="p-6 flex flex-col gap-6">
                <div className="text-center text-gray-500">
                    التسجيل من خلال البريد الالكتروني
                </div>

                <Button
                    className="w-full py-6 bg-[#F15B74] hover:bg-[#d84864] text-white rounded-full text-lg"
                    onClick={onLoginClick}
                >
                    تسجيل الدخول
                </Button>

                <Button
                    variant="outline"
                    className="w-full py-6 border-[#F15B74] text-[#F15B74] hover:bg-[#F15B74]/10 rounded-full text-lg"
                    onClick={onRegisterClick}
                >
                    إنشاء حساب جديد
                </Button>
            </div>
        </DialogContent>
    );
}

export default MainAuthDialog;
