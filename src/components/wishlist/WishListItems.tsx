import useProduct from '@/hooks/useProduct'
import { Box, Grid } from '@mui/material'
import React from 'react'
import WishListItem from './WishListItem'
import { productKeys } from '@/constants/queryKeys'

const WishListItems = () => {
    const { products } = useProduct({ limit: 6, queryKey: productKeys.FEATURED_PRODUCTS })
    return (
        <Box marginTop={2}>
            <Grid container spacing={4}>
                {products.map((product, index) =>
                    <Grid key={`product ${index}`} item xs={12} sm={6} md={3}>
                        <WishListItem item={product} />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default WishListItems