import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/features/cart/cartSlice';
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import QuantityInput from '../quantity-input/QuantityInput';
import { clipText } from '@/utils/clipText';

const CartItems = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <Box py={2}>
            {cartItems.length === 0 ? (
                <Typography variant="h6" align="center">Your cart is empty.</Typography>
            ) : (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>PRODUCT DETAILS</TableCell>
                                <TableCell>QUANTITY</TableCell>
                                <TableCell>PRICE</TableCell>
                                <TableCell>TOTAL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Box display="flex" gap={3}>
                                            <Image src={product.thumbnail} width={100} height={100} alt='product image' objectFit='contain' />
                                            <Stack>
                                                <Typography fontWeight={700}>{clipText(product.title, 30)}</Typography>
                                                <Button color='error' size='small' sx={{ mt: "auto", width: "fit-content" }} >Remove</Button>
                                            </Stack>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <QuantityInput />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 700 }}>{product.price}</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }}>$44</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default CartItems;
