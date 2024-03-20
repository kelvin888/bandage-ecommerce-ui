"use client"
import React from 'react';
import { Box, IconButton } from '@mui/material';

interface ColorChooserProps {
    colors: string[];
    onColorClick: (color: string) => void;
}

const ColorChooser: React.FC<ColorChooserProps> = ({ colors, onColorClick }) => {
    return (
        <Box display="flex" gap={1.3}>
            {colors.map((color, index) => (
                <IconButton
                    key={index}
                    style={{ backgroundColor: color, borderRadius: '50%' }}
                    onClick={() => onColorClick(color)}
                    size="large"
                />
            ))}
        </Box>
    );
};

export default ColorChooser;
