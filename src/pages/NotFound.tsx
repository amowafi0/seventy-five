import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function NotFound() {
    return (
        <>
            <div
                className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-gray-600"
                dir="rtl"
            >
                <div className="max-w-md text-center">
                    {/* Sad face icon */}
                    <div className="mb-6">
                        <svg
                            className="mx-auto h-24 w-24 text-gray-500"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle cx="35" cy="40" r="5" fill="currentColor" />
                            <circle cx="65" cy="40" r="5" fill="currentColor" />
                            <path
                                d="M30 65 Q50 55 70 65"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* 404 text */}
                    <h1 className="mb-2 text-8xl font-light">404</h1>

                    {/* Page not found text */}
                    <h2 className="mb-6 text-xl font-light text-gray-500">
                        الصفحة غير موجودة
                    </h2>

                    {/* Error message */}
                    <p className="mb-2 text-sm">
                        الصفحة التي تبحث عنها غير موجودة أو حدث خطأ آخر.
                    </p>
                    <p className="text-sm">
                        عد إلى الخلف، أو انتقل إلى{' '}
                        <Link
                            onClick={scrollToTop}
                            to="/"
                            className="text-gray-600 hover:underline"
                        >
                            الصفحة الرئيسية
                        </Link>{' '}
                        لاختيار اتجاه جديد.
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;
