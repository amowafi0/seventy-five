import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext, Controller } from 'react-hook-form';
import { z } from 'zod';

interface FileWithPreview extends File {
    preview: string;
}

interface StyledDropzoneProps {
    name: string;
}

const baseStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(96, 107, 125, 0.35)',
    borderStyle: 'dashed',
    backgroundColor: '#FCFEFF',
    color: '#606B7D',
    outline: 'none',
    margin: '20px 0 0 0',
    transition: 'border .24s ease-in-out',
};

const focusedStyle = {
    borderColor: '#2196f3',
};

const acceptStyle = {
    borderColor: '#00e676',
};

const rejectStyle = {
    borderColor: '#ff1744',
};

export const carImagesSchema = z.object({
    carImages: z
        .array(z.instanceof(File))
        .min(1, { message: 'يجب رفع صورة واحدة على الأقل' })
        .max(4, { message: 'الحد الأقصى للصور هو 4' }),
});

export type CarImagesFormData = z.infer<typeof carImagesSchema>;

function StyledDropzone({ name }: StyledDropzoneProps) {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors[name]?.message as string | undefined;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => {
                const updateFormValue = (newFiles: FileWithPreview[]) => {
                    setFiles(newFiles);
                    // Update the form value for validation and submission
                    onChange(newFiles);
                };

                const {
                    getRootProps,
                    getInputProps,
                    isFocused,
                    isDragAccept,
                    isDragReject,
                } = useDropzone({
                    accept: { 'image/*': [] },
                    maxFiles: 4,
                    onDropRejected(fileRejections) {
                        console.error(fileRejections);
                    },
                    onDrop: (acceptedFiles) => {
                        const newFiles = acceptedFiles.map((file) =>
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );

                        // Update both state and form value
                        const combinedFiles = [...files, ...newFiles].slice(
                            0,
                            4
                        );
                        updateFormValue(combinedFiles);
                    },
                });

                const style = useMemo(
                    () => ({
                        ...baseStyle,
                        ...(isFocused ? focusedStyle : {}),
                        ...(isDragAccept ? acceptStyle : {}),
                        ...(isDragReject ? rejectStyle : {}),
                        ...(errorMessage ? { borderColor: '#ff1744' } : {}),
                    }),
                    [isFocused, isDragAccept, isDragReject, errorMessage]
                );

                const handleDelete = (name: string) => {
                    const filteredFiles = files.filter(
                        (file) => file.name !== name
                    );
                    updateFormValue(filteredFiles);
                };

                const thumbs = files.map((file) => (
                    <div
                        className="relative mb-2 inline-flex h-[100px] w-[267px] p-1"
                        key={file.name}
                    >
                        <button
                            type="button" // Important: prevent form submission on click
                            className="absolute top-10 left-7 cursor-pointer"
                            onClick={() => handleDelete(file.name)}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.31 2.25H13.69C13.907 2.25 14.096 2.25 14.274 2.278C14.6207 2.33354 14.9496 2.46946 15.2344 2.67488C15.5192 2.8803 15.7519 3.14952 15.914 3.461C15.998 3.621 16.057 3.8 16.126 4.005L16.237 4.34L16.267 4.425C16.3575 4.67615 16.526 4.89174 16.7479 5.04019C16.9697 5.18865 17.2333 5.26217 17.5 5.25H20.5C20.6989 5.25 20.8897 5.32902 21.0303 5.46967C21.171 5.61032 21.25 5.80109 21.25 6C21.25 6.19891 21.171 6.38968 21.0303 6.53033C20.8897 6.67098 20.6989 6.75 20.5 6.75H3.5C3.30109 6.75 3.11032 6.67098 2.96967 6.53033C2.82902 6.38968 2.75 6.19891 2.75 6C2.75 5.80109 2.82902 5.61032 2.96967 5.46967C3.11032 5.32902 3.30109 5.25 3.5 5.25H6.59C6.8571 5.24359 7.11513 5.15177 7.32623 4.988C7.53733 4.82423 7.6904 4.59713 7.763 4.34L7.875 4.005C7.943 3.8 8.002 3.621 8.085 3.461C8.24719 3.1494 8.48009 2.8801 8.76505 2.67468C9.05001 2.46925 9.37911 2.3334 9.726 2.278C9.904 2.25 10.093 2.25 10.309 2.25"
                                    fill="#F05778"
                                />
                                <path
                                    d="M5.91493 8.45017C5.90167 8.25165 5.81009 8.06654 5.66034 7.93554C5.5106 7.80455 5.31494 7.73841 5.11643 7.75167C4.91791 7.76493 4.7328 7.85651 4.6018 8.00626C4.47081 8.156 4.40467 8.35166 4.41793 8.55017L4.88193 15.5022C4.96693 16.7842 5.03593 17.8202 5.19793 18.6342C5.36693 19.4792 5.65293 20.1852 6.24493 20.7382C6.83693 21.2912 7.55993 21.5312 8.41493 21.6422C9.23693 21.7502 10.2749 21.7502 11.5609 21.7502H12.4399C13.7249 21.7502 14.7639 21.7502 15.5859 21.6422C16.4399 21.5312 17.1639 21.2922 17.7559 20.7382C18.3469 20.1852 18.6329 19.4782 18.8019 18.6342C18.9639 17.8212 19.0319 16.7842 19.1179 15.5022L19.5819 8.55017C19.5952 8.35166 19.529 8.156 19.3981 8.00626C19.2671 7.85651 19.0819 7.76493 18.8834 7.75167C18.6849 7.73841 18.4893 7.80455 18.3395 7.93554C18.1898 8.06654 18.0982 8.25165 18.0849 8.45017L17.6249 15.3502C17.5349 16.6972 17.4709 17.6352 17.3309 18.3402C17.1939 19.0252 17.0039 19.3872 16.7309 19.6432C16.4569 19.8992 16.0829 20.0652 15.3909 20.1552C14.6779 20.2482 13.7379 20.2502 12.3869 20.2502H11.6129C10.2629 20.2502 9.32293 20.2482 8.60893 20.1552C7.91693 20.0652 7.54293 19.8992 7.26893 19.6432C6.99593 19.3872 6.80593 19.0252 6.66893 18.3412C6.52893 17.6352 6.46493 16.6972 6.37493 15.3492L5.91493 8.45017Z"
                                    fill="#F05778"
                                />
                                <path
                                    d="M9.42498 10.2537C9.62282 10.2339 9.82044 10.2935 9.97439 10.4193C10.1283 10.5451 10.226 10.7269 10.246 10.9247L10.746 15.9247C10.7606 16.1198 10.6985 16.3129 10.5728 16.4628C10.4471 16.6127 10.2678 16.7076 10.0731 16.7271C9.87846 16.7467 9.68387 16.6894 9.53084 16.5676C9.37781 16.4457 9.27846 16.2688 9.25398 16.0747L8.75398 11.0747C8.73416 10.8769 8.7937 10.6793 8.91953 10.5253C9.04535 10.3714 9.22716 10.2737 9.42498 10.2537ZM14.575 10.2537C14.7726 10.2737 14.9543 10.3712 15.0801 10.525C15.2059 10.6787 15.2655 10.8761 15.246 11.0737L14.746 16.0737C14.7212 16.2675 14.6218 16.4439 14.469 16.5655C14.3161 16.687 14.1219 16.7442 13.9275 16.7248C13.7332 16.7054 13.5541 16.6109 13.4283 16.4615C13.3025 16.3121 13.24 16.1195 13.254 15.9247L13.754 10.9247C13.7739 10.7271 13.8715 10.5455 14.0252 10.4197C14.179 10.2939 14.3773 10.2342 14.575 10.2537Z"
                                    fill="#F05778"
                                />
                            </svg>
                        </button>

                        <img
                            src={file.preview}
                            className="block h-[100px] w-[267px] rounded-[10px]"
                            onLoad={() => {
                                URL.revokeObjectURL(file.preview);
                            }}
                            alt="Preview"
                        />
                    </div>
                ));

                useEffect(() => {
                    // Clean up when component unmounts
                    return () =>
                        files.forEach((file) =>
                            URL.revokeObjectURL(file.preview)
                        );
                }, [files]);

                const showDropzone = files.length < 4;

                return (
                    <div className="container">
                        {isDragReject && (
                            <p className="mt-4 w-full animate-pulse rounded-lg bg-red-500 p-3 text-center text-white shadow-lg">
                                لا يمكنك تحميل اكتر من 4 صور
                            </p>
                        )}

                        {/* Show error message from form validation */}
                        {errorMessage && (
                            <p className="mt-2 text-sm text-red-500">
                                {errorMessage}
                            </p>
                        )}

                        {showDropzone && (
                            <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <svg
                                    width="64"
                                    height="64"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M30.5867 41.2529C30.9617 40.8783 31.47 40.668 32 40.668C32.53 40.668 33.0384 40.8783 33.4134 41.2529L38.7467 46.5862C38.9432 46.7693 39.1008 46.9901 39.2101 47.2354C39.3194 47.4808 39.3782 47.7456 39.383 48.0142C39.3877 48.2827 39.3383 48.5494 39.2377 48.7985C39.1371 49.0475 38.9874 49.2737 38.7975 49.4636C38.6076 49.6536 38.3813 49.8033 38.1323 49.9039C37.8833 50.0045 37.6165 50.0539 37.348 50.0491C37.0794 50.0444 36.8146 49.9856 36.5693 49.8763C36.3239 49.767 36.1031 49.6094 35.92 49.4129L34 47.4929V58.6662C34 59.1966 33.7893 59.7054 33.4143 60.0804C33.0392 60.4555 32.5305 60.6662 32 60.6662C31.4696 60.6662 30.9609 60.4555 30.5858 60.0804C30.2108 59.7054 30 59.1966 30 58.6662V47.4929L28.08 49.4129C27.8969 49.6094 27.6761 49.767 27.4308 49.8763C27.1855 49.9856 26.9206 50.0444 26.6521 50.0491C26.3836 50.0539 26.1168 50.0045 25.8678 49.9039C25.6187 49.8033 25.3925 49.6536 25.2026 49.4636C25.0127 49.2737 24.863 49.0475 24.7624 48.7985C24.6618 48.5494 24.6124 48.2827 24.6171 48.0142C24.6219 47.7456 24.6806 47.4808 24.79 47.2354C24.8993 46.9901 25.0569 46.7693 25.2534 46.5862L30.5867 41.2529Z"
                                        fill="#606B7D"
                                        fillOpacity="0.15"
                                    />
                                    <path
                                        d="M33.2694 10C25.936 10 20.032 15.8667 20.032 23.0587C20.032 24.2907 20.2054 25.4827 20.5254 26.608C21.8507 26.992 23.0934 27.568 24.2134 28.3147C24.4438 28.4542 24.6436 28.6389 24.8008 28.8575C24.9581 29.0762 25.0696 29.3244 25.1286 29.5872C25.1876 29.85 25.1929 30.122 25.1442 30.3869C25.0955 30.6519 24.9938 30.9042 24.8451 31.1288C24.6965 31.3535 24.5041 31.5458 24.2793 31.6942C24.0545 31.8426 23.8021 31.9441 23.5372 31.9926C23.2722 32.0411 23.0002 32.0356 22.7374 31.9764C22.4747 31.9171 22.2266 31.8055 22.008 31.648C20.4532 30.6177 18.6279 30.0712 16.7627 30.0773C11.5334 30.0773 7.33337 34.264 7.33337 39.3733C7.33337 44.4827 11.5334 48.6667 16.7627 48.6667C17.2931 48.6667 17.8018 48.8774 18.1769 49.2525C18.552 49.6275 18.7627 50.1362 18.7627 50.6667C18.7627 51.1971 18.552 51.7058 18.1769 52.0809C17.8018 52.456 17.2931 52.6667 16.7627 52.6667C9.36804 52.6667 3.33337 46.736 3.33337 39.3733C3.33337 32.16 9.12004 26.3253 16.304 26.0853C16.1236 25.0865 16.0325 24.0736 16.032 23.0587C16.032 13.616 23.7707 6 33.2694 6C41.6907 6 48.7254 11.984 50.216 19.9227C56.3494 22.528 60.6667 28.5573 60.6667 35.608C60.6667 43.8053 54.832 50.624 47.0854 52.2827C46.5666 52.3937 46.025 52.2941 45.5796 52.0058C45.1343 51.7175 44.8217 51.2641 44.7107 50.7453C44.5997 50.2266 44.6993 49.6849 44.9876 49.2396C45.2759 48.7943 45.7293 48.4817 46.248 48.3707C52.2214 47.0907 56.6667 41.848 56.6667 35.608C56.6667 29.9093 52.96 25.0427 47.7654 23.2667C46.3698 22.7885 44.9046 22.5451 43.4294 22.5467C41.8747 22.5467 40.3894 22.8133 39.008 23.2933C38.5104 23.4558 37.9689 23.4167 37.4998 23.1844C37.0307 22.9521 36.6714 22.5452 36.4989 22.0509C36.3265 21.5566 36.3547 21.0145 36.5775 20.5408C36.8004 20.0671 37.2 19.6997 37.6907 19.5173C40.2767 18.6128 43.0402 18.334 45.7547 18.704C44.8233 16.1441 43.1241 13.9342 40.8894 12.3763C38.6547 10.8184 35.9935 9.98849 33.2694 10Z"
                                        fill="#606B7D"
                                        fillOpacity="0.15"
                                    />
                                </svg>
                                <p className="mt-4 text-center font-medium">
                                    اختر حتى 4 صور لسيارتك <br />
                                    اسحب وأفلت أو اضغط لرفع الصور
                                </p>
                            </div>
                        )}
                        <aside className="mt-4 flex gap-2">{thumbs}</aside>
                    </div>
                );
            }}
        />
    );
}

export default StyledDropzone;
