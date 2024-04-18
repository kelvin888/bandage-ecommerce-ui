import { selectWishlistItems } from '@/features/wishlist/wishlistSlice';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import WishListItems from './WishListItems';

const WishList = () => {

    const wishListItems = [];
    const itemCount = wishListItems.length;
    const itemCountDisplay = `${itemCount} ${itemCount === 1 ? 'Item' : 'Items'}`;

    return (
        <Box padding={4} flex={4}>
            <Box
                display="flex"
                justifyContent="space-between"
                py={2}
                sx={{ borderBottomColor: "grey.400", borderBottomStyle: "solid" }}
            >
                <Typography fontSize={24} fontWeight={700}>Wish List</Typography>
                <Typography fontSize={18} fontWeight={700}>
                    {itemCountDisplay}
                </Typography>
            </Box>

            <Stack gap={10}>
                <WishListItems />
            </Stack>

        </Box>
    )
}

export default WishList