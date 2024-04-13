import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material';
import theme from '@/theme/theme';

interface Option {
    value: string | number;
    label: string;
}

interface SelectProps {
    label: string;
    options: Option[];
    value: "" | { value: string | number } | undefined;
    onChange: (event: SelectChangeEvent<{ value: unknown }>, child: React.ReactNode) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                value={value !== undefined ? value : ''}
                onChange={onChange}
                label={label}
                sx={{ backgroundColor: theme.palette.common.white }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
