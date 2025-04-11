import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Select({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
    return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
    className,
    size = 'default',
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: 'sm' | 'default';
}) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit flex-row-reverse items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.43005 8.51193C4.49418 8.43711 4.57242 8.37566 4.66031 8.33109C4.7482 8.28652 4.84401 8.25971 4.94227 8.25219C5.04052 8.24467 5.1393 8.25658 5.23295 8.28725C5.3266 8.31792 5.41328 8.36675 5.48805 8.43093L12.0001 14.0119L18.5121 8.43093C18.6639 8.30906 18.8571 8.25101 19.051 8.26904C19.2449 8.28707 19.4241 8.37977 19.5508 8.52756C19.6776 8.67534 19.7419 8.86662 19.7302 9.06095C19.7185 9.25529 19.6316 9.43745 19.4881 9.56894L12.4881 15.5689C12.3521 15.6854 12.179 15.7494 12.0001 15.7494C11.8211 15.7494 11.648 15.6854 11.5121 15.5689L4.51205 9.56894C4.36124 9.43945 4.26799 9.25539 4.2528 9.0572C4.23762 8.859 4.30173 8.66289 4.43105 8.51193"
                        fill="#606B7D"
                    />
                </svg>
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
    className,
    children,
    position = 'popper',
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                className={cn(
                    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
                    position === 'popper' &&
                        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                    className
                )}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cn(
                        'p-1',
                        position === 'popper' &&
                            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn(
                'text-muted-foreground px-2 py-1.5 text-xs',
                className
            )}
            {...props}
        />
    );
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default flex-row-reverse items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
                className
            )}
            {...props}
        >
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="size-4" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}

function SelectSeparator({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn(
                'bg-border pointer-events-none -mx-1 my-1 h-px',
                className
            )}
            {...props}
        />
    );
}

function SelectScrollUpButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    return (
        <SelectPrimitive.ScrollUpButton
            data-slot="select-scroll-up-button"
            className={cn(
                'flex cursor-default items-center justify-center py-1',
                className
            )}
            {...props}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.43005 8.51193C4.49418 8.43711 4.57242 8.37566 4.66031 8.33109C4.7482 8.28652 4.84401 8.25971 4.94227 8.25219C5.04052 8.24467 5.1393 8.25658 5.23295 8.28725C5.3266 8.31792 5.41328 8.36675 5.48805 8.43093L12.0001 14.0119L18.5121 8.43093C18.6639 8.30906 18.8571 8.25101 19.051 8.26904C19.2449 8.28707 19.4241 8.37977 19.5508 8.52756C19.6776 8.67534 19.7419 8.86662 19.7302 9.06095C19.7185 9.25529 19.6316 9.43745 19.4881 9.56894L12.4881 15.5689C12.3521 15.6854 12.179 15.7494 12.0001 15.7494C11.8211 15.7494 11.648 15.6854 11.5121 15.5689L4.51205 9.56894C4.36124 9.43945 4.26799 9.25539 4.2528 9.0572C4.23762 8.859 4.30173 8.66289 4.43105 8.51193"
                    fill="#606B7D"
                />
            </svg>
        </SelectPrimitive.ScrollUpButton>
    );
}

function SelectScrollDownButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            data-slot="select-scroll-down-button"
            className={cn(
                'flex cursor-default items-center justify-center py-1',
                className
            )}
            {...props}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.43005 8.51193C4.49418 8.43711 4.57242 8.37566 4.66031 8.33109C4.7482 8.28652 4.84401 8.25971 4.94227 8.25219C5.04052 8.24467 5.1393 8.25658 5.23295 8.28725C5.3266 8.31792 5.41328 8.36675 5.48805 8.43093L12.0001 14.0119L18.5121 8.43093C18.6639 8.30906 18.8571 8.25101 19.051 8.26904C19.2449 8.28707 19.4241 8.37977 19.5508 8.52756C19.6776 8.67534 19.7419 8.86662 19.7302 9.06095C19.7185 9.25529 19.6316 9.43745 19.4881 9.56894L12.4881 15.5689C12.3521 15.6854 12.179 15.7494 12.0001 15.7494C11.8211 15.7494 11.648 15.6854 11.5121 15.5689L4.51205 9.56894C4.36124 9.43945 4.26799 9.25539 4.2528 9.0572C4.23762 8.859 4.30173 8.66289 4.43105 8.51193"
                    fill="#606B7D"
                />
            </svg>
        </SelectPrimitive.ScrollDownButton>
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};
