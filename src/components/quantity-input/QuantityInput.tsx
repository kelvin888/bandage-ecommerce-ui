import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityInput = () => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <TextField
            type="number"
            variant="outlined"
            value={quantity}
            size='small'
            InputProps={{
                sx: { padding: 0 },
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={handleDecrease} size="small">
                            <RemoveIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleIncrease} size="small">
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                inputProps: {
                    style: {
                        width: `${quantity.toString().length}ch`,
                        textAlign: "center"
                    }
                }
            }}
        />
    );
};

export default QuantityInput;
