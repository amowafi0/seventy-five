import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/lib/utils';

function Checkbox({
    className,
    ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                'peer border-input dark:bg-input/30 data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#0ca678] data-[state=checked]:bg-[#0ca678]',
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                data-slot="checkbox-indicator"
                className="flex items-center justify-center text-current transition-none"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
                        fill="#0CA678"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.5945 7.53543C18.1352 8.07616 18.1352 8.95286 17.5945 9.4936L11.2483 15.8398C10.9886 16.0995 10.6365 16.2454 10.2692 16.2454C9.90201 16.2454 9.54983 16.0995 9.29016 15.8398L6.40554 12.9552C5.86482 12.4144 5.86482 11.5377 6.40554 10.997C6.94627 10.4563 7.82296 10.4563 8.36369 10.997L10.2692 12.9026L15.6363 7.53543C16.177 6.9947 17.0537 6.9947 17.5945 7.53543Z"
                        fill="white"
                    />
                </svg>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox };
