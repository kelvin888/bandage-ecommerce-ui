import useProduct from '@/hooks/useProduct'
import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductCard from '../product-card/ProductCard'
import WishListItem from './WishListItem'

const WishListItems = () => {
    const { products } = useProduct(6)
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