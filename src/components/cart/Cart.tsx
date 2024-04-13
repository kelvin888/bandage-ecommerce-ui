import { Box, Button, Divider, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/features/cart/cartSlice';
import CartItems from './CartItems';
import CustomSelect from '../select/CustomSelect';
import CustomTextField from '../textfield/TextField';

const shippingOptions = [
    { value: 'standard', label: 'Standard Delivery - $5.00' },
    { value: 'sameday', label: 'Same Day Delivery - $10.00' },
];

const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const itemCount = cartItems.length;
    const itemCountDisplay = `${itemCount} ${itemCount === 1 ? 'Item' : 'Items'}`;

    const [shippingOption, setShippingOption] = useState<"" | { value: string | number } | undefined>('');
    const [promoCode, setPromoCode] = useState("")

    const handleShippingChange = (event: SelectChangeEvent<{ value: unknown }>) => {
        setShippingOption(event.target.value as "" | { value: string | number } | undefined);
    };

    const handlePromoCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPromoCode(event.target.value)
    }

    return (
        <Stack direction="row" width="100%">
            <Box padding={4} flex={4}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    py={2}
                    sx={{ borderBottomColor: "grey.400", borderBottomStyle: "solid" }}
                >
                    <Typography fontSize={24} fontWeight={700}>Shopping Cart</Typography>
                    <Typography fontSize={18} fontWeight={700}>
                        {itemCountDisplay}
                    </Typography>
                </Box>

                <Stack gap={10}>
                    <CartItems />
                </Stack>

                <Button variant='text' sx={{ padding: 0, textTransform: "none" }}>Continue Shopping</Button>
            </Box>

            <Box flex={2} bgcolor="grey.400" padding={5}>
                <Box
                    py={2}
                    sx={{ borderBottomColor: "grey.600", borderBottomStyle: "solid" }}
                >
                    <Typography fontSize={20} fontWeight={700}>Order Summary</Typography>
                </Box>

                <Stack py={4} direction="row" justifyContent="space-between">
                    <Typography fontWeight={700}>ITEMS {itemCount}</Typography>
                    <Typography>total price</Typography>
                </Stack>

                <Stack>
                    <Typography mb={2} fontWeight={700}>SHIPPING</Typography>
                    <CustomSelect
                        label="Select Shipping Option"
                        options={shippingOptions}
                        value={shippingOption}
                        onChange={handleShippingChange}
                    />
                </Stack>

                <Stack mt={4}>
                    <Typography mb={2} fontWeight={700}>PROMO CODE</Typography>
                    <CustomTextField
                        label="Enter your code"
                        value={promoCode}
                        onChange={handlePromoCode}
                    />
                    <Button variant='contained' color='secondary' sx={{ width: 'fit-content', mt: 2 }}>APPLY</Button>
                </Stack>

                <Stack gap={2}>

                    <Divider sx={{ my: 2 }} />

                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontWeight={700}>TOTAL COST</Typography>
                        <Typography fontWeight={700}>462</Typography>
                    </Stack>

                    <Button variant='contained' size='large'>CHECKOUT</Button>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Cart