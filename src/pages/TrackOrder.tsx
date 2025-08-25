import usericon from '../assets/img/solar_user-linear.svg';
import ordericon from '../assets/img/solar_archive-minimalistic-outline.svg';
import tracicon from '../assets/img/solar_compass-big-outline.svg';
import logouticon from '../assets/img/solar_logout-outline.svg';
import img from '../assets/img/solar_cloud-cross-bold-duotone.png';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/Auth/AuthContext.ts';

function Trackorder() {
    const auth = useAuth();

    return (
        <>
            <div className="flex flex-col justify-center gap-3 bg-[#F5FAFF] px-4 pt-4 text-[#2D3645] md:px-6 md:pt-8 lg:flex-row lg:px-0 lg:pt-14">
                {/* Profile sidebar - becomes full width on mobile, constrained width on tablet/desktop */}
                <div className="mb-4 h-auto w-full rounded-3xl border border-[#606B7D]/16 bg-[#FCFEFF] text-sm font-medium md:mb-6 md:w-[340px] lg:mb-0 lg:h-[396px] lg:w-[383px]">
                    <div className="flex h-[90px] items-center gap-4 px-4 md:h-[100px] md:gap-5 lg:h-[112px]">
                        <img
                            src={auth?.user?.photo}
                            className="w-12 rounded-full md:w-14 lg:w-16"
                            alt="User profile"
                        />
                        <div className="flex flex-col gap-1">
                            <div>أهلاً {auth?.user?.firstname}</div>
                            <div className="max-w-[160px] truncate text-xs font-normal md:max-w-[200px]">
                                {auth?.user?.email}
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/profile"
                        className="flex h-[55px] w-full items-center gap-4 border-t px-4 md:h-[65px] lg:h-[71px]"
                    >
                        <img src={usericon} alt="Profile icon" />
                        <div>الملف الشخصي</div>
                    </Link>
                    <Link
                        to="/orderlist"
                        className="flex h-[55px] w-full items-center gap-4 border-t px-4 md:h-[65px] lg:h-[71px]"
                    >
                        <img src={ordericon} alt="Orders icon" />
                        <div>طلباتى</div>
                    </Link>
                    <Link
                        to="/trackorder"
                        className="flex h-[55px] w-full items-center gap-4 border-t bg-[#F057780A] px-4 md:h-[65px] lg:h-[71px]"
                    >
                        <img src={tracicon} alt="Track order icon" />
                        <div>تتبع الطلب</div>
                    </Link>
                    <button
                        className="flex h-[55px] w-full items-center gap-4 border-t px-4 md:h-[65px] lg:h-[71px]"
                        onClick={auth?.logout}
                    >
                        <img src={logouticon} alt="Logout icon" />
                        <div>تسجيل الخروج</div>
                    </button>
                </div>

                {/* Main content - becomes full width on mobile, adjusts for tablet/desktop */}
                <div className="flex w-full flex-col gap-4 md:w-full lg:w-auto">
                    <div className="min-h-[420px] w-full rounded-3xl border border-[#606B7D26] bg-[#FCFEFF] md:min-h-[450px] md:w-full lg:min-h-[492px] lg:w-[781px]">
                        <div className="flex h-[55px] items-center border-b pr-4 text-lg font-medium text-[#F05778] md:h-[65px] md:text-xl lg:h-[71px]">
                            طلباتى
                        </div>
                        <div>
                            <div className="flex flex-col items-center justify-center gap-4 px-4 pt-5 pb-8 md:px-6 md:pb-6 lg:pb-0">
                                <img
                                    src={img}
                                    className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] lg:h-[174px] lg:w-[174px]"
                                    alt="No orders to track"
                                />
                                <div className="flex flex-col items-center justify-center gap-1 text-center text-lg font-bold md:text-xl">
                                    <div>لا يوجد اى طلبات حالية لتتبعها</div>
                                    <div className="text-sm font-normal md:text-base">
                                        يرجيى اتمام طلب حتى تتمكن من متابعه
                                        الطلب
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trackorder;
