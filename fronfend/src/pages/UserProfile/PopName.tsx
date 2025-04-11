import edicon from '../../assets/img/solar_pen-new-round-outline.svg';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

const Popupname = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        className="border-0 bg-transparent shadow-transparent"
                        variant="outline"
                    >
                        <img src={edicon} alt="Edit" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="mt-6">
                        <DialogTitle className="text-center text-lg font-medium">
                            تعديل اسم المستخدم
                        </DialogTitle>
                    </DialogHeader>
                    <div className="px-6 py-4">
                        <div className="flex w-full flex-row gap-4 max-sm:flex-col">
                            <div className="w-1/2 max-sm:w-full">
                                <Input
                                    className="h-12 rounded-full px-4 text-right text-gray-500"
                                    placeholder="الاسم الاول"
                                />
                            </div>
                            <div className="w-1/2 max-sm:w-full">
                                <Input
                                    className="h-12 rounded-full px-4 text-right text-gray-500"
                                    placeholder="الاسم الاخير"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="flex justify-center px-6 pb-6">
                        <Button
                            className="w-full rounded-full bg-[#F05778] py-5 text-white hover:bg-[#e04e6e]"
                            type="submit"
                        >
                            حفظ التعديل
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Popupname;
