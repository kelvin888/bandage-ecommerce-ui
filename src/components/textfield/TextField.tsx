import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

interface TextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
    return (
        <MuiTextField
            fullWidth
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            sx={{ background: 'white' }}
        />
    );
};

export default CustomTextField;
