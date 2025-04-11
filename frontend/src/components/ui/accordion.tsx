import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn('mb-4 rounded-[20px] border px-4 py-2', className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    'focus-visible:border-ring focus-visible:ring-ring/50 group flex flex-1 cursor-pointer items-start gap-4 rounded-md py-4 text-right text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
                    className
                )}
                {...props}
            >
                {/* Minus icon - shown when open */}
                <div className="transition-transform duration-200 group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180">
                    <svg
                        className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 group-data-[state=closed]:hidden group-data-[state=open]:block"
                        width="15"
                        height="3"
                        viewBox="0 0 15 3"
                        fill="none"
                    >
                        <rect width="15" height="3" rx="1.5" fill="#F05778" />
                    </svg>

                    {/* Plus icon - shown when closed */}
                    <svg
                        className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 group-data-[state=closed]:block group-data-[state=open]:hidden"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="6"
                            width="15"
                            height="3"
                            rx="1.5"
                            fill="#0D2032"
                        />
                        <rect
                            x="9"
                            width="15"
                            height="3"
                            rx="1.5"
                            transform="rotate(90 9 0)"
                            fill="#0D2032"
                        />
                    </svg>
                </div>
                {children}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            {...props}
        >
            <div className={cn('pt-0 pb-4', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
