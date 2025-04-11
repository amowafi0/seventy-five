import { useState } from 'react';
import { Link } from 'react-router';
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import logo from '../../../assets/img/Logo header.png';
import { useAuth } from '../../../context/Auth/AuthContext.ts';

// Import all dialog components
import MainAuthDialog from './MainAuthDialog.tsx';
import LoginDialog from './LoginDialog.tsx';
import RegisterDialog from './RegisterDialog.tsx';
import ForgotPasswordDialog from '@/components/layout/header/ForgotPasswordDialog.tsx';

function Header() {
    // Use AuthContext instead of local state
    const auth = useAuth();

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dialogView, setDialogView] = useState('main');
    const [showUserMenu, setShowUserMenu] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const resetDialog = () => setDialogView('main');

    const handleCloseDialog = () => {
        setOpen(false);
        resetDialog();
    };

    const handleLogout = () => {
        auth?.logout(); // Use the logout function from AuthContext
        setShowUserMenu(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onOpenChange={(isOpen) => {
                    setOpen(isOpen);
                    if (!isOpen) resetDialog();
                }}
            >
                <div className="items-center pb-2.5 text-sm">
                    <div className="flex items-center justify-around bg-white px-4 pt-3 max-sm:justify-between max-sm:gap-4">
                        <button className="max-md:hidden">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="flex h-[40px] w-[183px]"
                                />
                            </Link>
                        </button>
                        <button className="md:hidden">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="flex h-[40px] w-[183px]"
                                />
                            </Link>
                        </button>
                        <button className="sm:hidden" onClick={toggleDrawer}>
                            <svg
                                width="32px"
                                height="32px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="#F05778"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="#F05778"
                                        fillRule="evenodd"
                                        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                                    />
                                </g>
                            </svg>
                        </button>
                        <div className="flex items-center justify-center font-bold max-md:pt-3 max-sm:hidden">
                            <div className="flex gap-10 text-[#2D3645] max-lg:gap-4">
                                <Link to="/" className="text-[#2D3645]">
                                    الرئيسية
                                </Link>
                                <Link to="/about-us">من نحن</Link>
                                <Link to="Services">خدماتنا</Link>
                                <Link to="frequently-asked-questions">
                                    الاسئلة الشائعة
                                </Link>
                                <Link to="/contact">اتصل بنا</Link>
                            </div>
                        </div>
                        {isOpen && (
                            <div
                                className="bg-opacity-50 fixed inset-0 z-20 bg-black/25 transition-opacity"
                                onClick={toggleDrawer}
                            />
                        )}

                        {/* Conditional rendering based on authentication status from context */}
                        {auth?.isAuthenticated ? (
                            <div className="relative flex items-center justify-center gap-1">
                                <button
                                    onClick={toggleUserMenu}
                                    className="justify-items-center pl-4"
                                >
                                    <img
                                        src={auth?.user?.photo}
                                        className="h-[38px] w-[38px] rounded-full"
                                    />
                                </button>
                                <Button
                                    variant="outline"
                                    className="h-[38px] rounded-full bg-[#02CCC0] text-white"
                                >
                                    <Link to="/request-service">
                                        طلب الخدمة
                                    </Link>
                                </Button>

                                {showUserMenu && (
                                    <div className="ring-opacity-5 absolute left-0 z-50 mt-52 w-48 rounded-md border bg-white py-1">
                                        <Link
                                            to="/profile"
                                            className="flex items-center justify-end gap-2 px-4 py-2 text-sm text-[#2D3645] hover:bg-gray-100"
                                            onClick={() =>
                                                setShowUserMenu(false)
                                            }
                                        >
                                            الملف الشخصي
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                                                    fill="#F05778"
                                                />
                                                <path
                                                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                    fill="#F05778"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to="/OrderList"
                                            className="flex items-center justify-end gap-2 px-4 py-2 text-sm text-[#2D3645] hover:bg-gray-100"
                                            onClick={() =>
                                                setShowUserMenu(false)
                                            }
                                        >
                                            طلباتي
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="#F05778"
                                            >
                                                <path
                                                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                                    stroke="#F05778"
                                                    fill="none"
                                                />
                                                <path
                                                    d="M9 12L11 14L15 10"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to="/TrackOrder"
                                            className="flex items-center justify-end gap-2 px-4 py-2 text-sm text-[#2D3645] hover:bg-gray-100"
                                            onClick={() =>
                                                setShowUserMenu(false)
                                            }
                                        >
                                            تتبع الطلب
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12 5V19M5 12H19"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block flex w-full items-center justify-end gap-2 px-4 py-2 text-sm text-[#2D3645] hover:bg-gray-100"
                                        >
                                            تسجيل الخروج
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16 17L21 12L16 7"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12H9"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="h-[38px] rounded-full bg-[#F05778] text-white"
                                    onClick={() => setOpen(true)}
                                >
                                    التسجيل
                                </Button>
                            </DialogTrigger>
                        )}
                    </div>
                    <div
                        className={`fixed inset-y-0 left-0 z-30 w-64 transform border bg-white text-white ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="flex items-center p-5 font-bold">
                            <div className="flex w-full flex-col gap-6 text-[#2D3645]">
                                <Link
                                    to="/"
                                    className="text-[#2D3645]"
                                    onClick={toggleDrawer}
                                >
                                    الرئيسية
                                </Link>
                                <Link to="/about-us" onClick={toggleDrawer}>
                                    من نحن
                                </Link>
                                <Link to="Services" onClick={toggleDrawer}>
                                    خدماتنا
                                </Link>
                                <Link
                                    to="frequently-asked-questions"
                                    onClick={toggleDrawer}
                                >
                                    الاسئلة الشائعة
                                </Link>
                                <Link to="/contact" onClick={toggleDrawer}>
                                    اتصل بنا
                                </Link>

                                {/* Mobile menu authentication conditional rendering */}
                                {auth?.isAuthenticated ? (
                                    <>
                                        <Link
                                            to="/profile"
                                            onClick={toggleDrawer}
                                            className="flex items-center justify-end gap-2"
                                        >
                                            الملف الشخصي
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                                                    fill="#F05778"
                                                />
                                                <path
                                                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                    fill="#F05778"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to="/my-orders"
                                            onClick={toggleDrawer}
                                            className="flex items-center justify-end gap-2"
                                        >
                                            طلباتي
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="#F05778"
                                            >
                                                <path
                                                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                                    stroke="#F05778"
                                                    fill="none"
                                                />
                                                <path
                                                    d="M9 12L11 14L15 10"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </Link>
                                        <Link
                                            to="/new-order"
                                            onClick={toggleDrawer}
                                            className="flex items-center justify-end gap-2"
                                        >
                                            نوع الطلب
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12 5V19M5 12H19"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                toggleDrawer();
                                            }}
                                            className="flex items-center justify-end gap-2 text-[#2D3645]"
                                        >
                                            تسجيل الخروج
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16 17L21 12L16 7"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 12H9"
                                                    stroke="#F05778"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </>
                                ) : (
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="h-[38px] rounded-full bg-[#F05778] text-white"
                                            onClick={() => {
                                                setOpen(true);
                                                toggleDrawer();
                                            }}
                                        >
                                            التسجيل
                                        </Button>
                                    </DialogTrigger>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render the appropriate dialog based on state */}
                {dialogView === 'main' && (
                    <MainAuthDialog
                        logo={logo}
                        onClose={handleCloseDialog}
                        onLoginClick={() => setDialogView('login')}
                        onRegisterClick={() => setDialogView('register')}
                    />
                )}

                {dialogView === 'login' && (
                    <LoginDialog
                        logo={logo}
                        onClose={handleCloseDialog}
                        onSwitchToRegister={() => setDialogView('register')}
                        onSwitchToForgotPassword={() =>
                            setDialogView('forgotPassword')
                        }
                        // We no longer need to pass the onLoginSuccess prop since the LoginDialog
                        // should be using the AuthContext directly
                    />
                )}
                {dialogView === 'forgotPassword' && (
                    <ForgotPasswordDialog
                        logo={logo}
                        onClose={handleCloseDialog}
                        onSwitchToLogin={() => setDialogView('login')}
                    />
                )}

                {dialogView === 'register' && (
                    <RegisterDialog
                        logo={logo}
                        onClose={handleCloseDialog}
                        onSwitchToLogin={() => setDialogView('login')}
                        // We no longer need to pass the onRegisterSuccess prop since the RegisterDialog
                        // should be using the AuthContext directly
                    />
                )}
            </Dialog>
        </>
    );
}

export default Header;
