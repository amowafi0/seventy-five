import usericon from '../../assets/img/solar_user-linear.svg';
import ordericon from '../../assets/img/solar_archive-minimalistic-outline.svg';
import tracicon from '../../assets/img/solar_compass-big-outline.svg';
import logouticon from '../../assets/img/solar_logout-outline.svg';
import { Link } from 'react-router-dom';

import Popmane from './PopName.tsx';
import PopupPassword from './PopPassword.tsx';
import Popupphone from './PopPhone.tsx';
import { useAuth } from '@/context/Auth/AuthContext.ts';

function Userprofile() {
    const auth = useAuth();
    const fullName =
        auth?.user?.firstname && auth?.user?.lastname
            ? `${auth?.user?.firstname} ${auth?.user?.lastname}`
            : auth?.user?.firstname || '';
    return (
        <>
            <div className="flex flex-col justify-center gap-3 bg-[#F5FAFF] px-4 pt-4 text-[#2D3645] md:px-6 md:pt-8 lg:flex-row lg:px-0 lg:pt-14">
                {/* Profile sidebar - becomes full width on mobile, 40% on tablet, fixed width on desktop */}
                <div className="mb-4 h-auto w-full rounded-3xl border border-[#606B7D]/16 bg-[#FCFEFF] text-sm font-medium md:mb-6 md:w-[340px] lg:mb-0 lg:w-[383px]">
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
                        className="flex h-[55px] w-full items-center gap-4 border-t bg-[#F057780A] px-4 md:h-[65px] lg:h-[71px]"
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
                        className="flex h-[55px] w-full items-center gap-4 border-t px-4 md:h-[65px] lg:h-[71px]"
                    >
                        <img src={tracicon} alt="Track order icon" />
                        <div>تتبع الطلب</div>
                    </Link>
                    <button
                        onClick={auth?.logout}
                        className="flex h-[55px] w-full items-center gap-4 border-t px-4 md:h-[65px] lg:h-[71px]"
                    >
                        <img src={logouticon} alt="Logout icon" />
                        <div>تسجيل الخروج</div>
                    </button>
                </div>

                {/* Main content - becomes full width on mobile, 60% on tablet, fixed width on desktop */}
                <div className="flex w-full flex-col gap-4 md:w-full lg:w-auto">
                    <div className="min-h-[420px] w-full rounded-3xl border border-[#606B7D26] bg-[#FCFEFF] md:min-h-[450px] md:w-full lg:min-h-[492px] lg:w-[781px]">
                        <div className="flex h-[55px] items-center border-b pr-4 text-lg font-medium text-[#F05778] md:h-[65px] md:text-xl lg:h-[71px]">
                            الملف الشخصي
                        </div>
                        <div>
                            <div className="flex flex-col gap-3 p-4 text-base text-[#2D3645] md:gap-4 md:p-5 lg:p-6">
                                <div>البريد الاكتروني</div>
                                <div>
                                    <input
                                        placeholder={auth?.user?.email}
                                        disabled={true}
                                        className="h-[45px] w-full rounded-lg px-4 md:h-[50px] lg:h-[56px]"
                                    />
                                </div>
                                <div>الاسم</div>
                                <div className="flex items-center rounded-lg border">
                                    <input
                                        placeholder={fullName}
                                        disabled={true}
                                        className="h-[45px] w-full rounded-lg px-4 md:h-[50px] lg:h-[56px]"
                                    />
                                    <Popmane />
                                </div>
                                <div>رقم الجوال</div>
                                <div className="flex items-center rounded-lg border">
                                    <input
                                        placeholder={auth?.user?.phone}
                                        disabled={true}
                                        className="h-[45px] w-full rounded-lg px-4 md:h-[50px] lg:h-[56px]"
                                    />
                                    <Popupphone />
                                </div>
                                <div>كلمة المرور</div>
                                <div className="flex items-center rounded-lg border">
                                    <input
                                        placeholder="*********"
                                        disabled={true}
                                        className="h-[45px] w-full rounded-lg px-4 md:h-[50px] lg:h-[56px]"
                                    />
                                    <PopupPassword />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 flex justify-center md:mb-6 md:justify-center lg:mb-0 lg:justify-start">
                        <button className="h-[45px] w-[150px] rounded-[120px] bg-[#F05778] text-xs font-bold text-white md:h-[50px] md:w-[170px] lg:h-[56px] lg:w-[183px]">
                            حفظ الاعدادات
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userprofile;
