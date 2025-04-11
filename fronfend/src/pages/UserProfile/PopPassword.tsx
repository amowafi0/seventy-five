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

const PopPassword = () => {
    return (
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
                        تعديل كلمه المرور
                    </DialogTitle>
                </DialogHeader>
                <div className="px-6 py-4">
                    <div className="py-5">
                        <Input
                            className="h-12 rounded-full px-4 text-right text-gray-500"
                            placeholder="كلمه المرور الحاليه"
                        />
                    </div>
                    <div className="flex w-full flex-row gap-4 max-sm:flex-col">
                        <div className="w-1/2 max-sm:w-full">
                            <Input
                                className="h-12 rounded-full px-4 text-right text-gray-500"
                                placeholder="كلمه المرور الجديده"
                            />
                        </div>
                        <div className="w-1/2 max-sm:w-full">
                            <Input
                                className="h-12 rounded-full px-4 text-right text-gray-500"
                                placeholder="تاكيد كلمه المرور الجديده"
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

        // <div className="p-5">
        //     <button onClick={handleOpenPopup} className="">
        //
        //         <img src={edicon}/>            </button>
        //
        //     {isPopupVisible && (
        //         <div className=" w-[528px] flex  h-[253px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-50">
        //             <div>
        //                 <div className='flex items-center text-center  gap-36'>
        //                     <button onClick={handleClosePopup}
        //                             className=""><img src={colsei}/>                         </button>
        //                 </div>
        //                 <div className='flex items-center justify-between  w-[500px] pt-12'>
        //                     <input className='w-[240px] h-[56px] border flex  items-center px-3 rounded-3xl border-[#606B7D26]' placeholder='كلمه المرور الجديده' type='password'/>
        //                     <input className='w-[240px] h-[56px] border flex  items-center px-3 rounded-3xl border-[#606B7D26]' placeholder='تاكيد كلمه المرور الجديده' type='password'/>
        //                 </div>
        //                 <div className='flex items-center justify-center pt-10'>
        //                     <button className='text-white bg-[#F05778] w-[480px] h-[56px] rounded-3xl'>حفظ التعديل</button>
        //
        //                 </div>
        //             </div>
        //
        //         </div>
        //     )}
        //
        //     {isPopupVisible && (
        //         <div
        //             className="fixed top-0 left-0 w-full h-full bg-black/25 bg-opacity-50 z-40"
        //             onClick={handleClosePopup} // Close popup when clicking outside
        //         />
        //     )}
        // </div>
    );
};

export default PopPassword;
