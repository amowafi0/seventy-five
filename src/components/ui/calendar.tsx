import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ar } from 'date-fns/locale';

interface CalendarProps {
    selected?: Date | null;
    onSelect?: (date: Date | null) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

function Calendar({
    selected,
    onSelect,
    disabled = false,
    placeholder = 'Select date',
    className,
}: CalendarProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ar}>
            <DatePicker
                value={selected}
                onChange={onSelect}
                disabled={disabled}
                slotProps={{
                    textField: {
                        placeholder: placeholder,
                        className: className,
                        fullWidth: true,
                        size: 'medium',
                    },
                }}
            />
        </LocalizationProvider>
    );
}

export { Calendar };
