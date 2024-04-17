import { Box } from '@mui/material'
import React, { FC } from 'react'
import ProductCard from '../product-card/ProductCard'
import { Product } from '@/types/product'

type Props = {
    item: Product
}

const WishListItem: FC<Props> = ({ item }) => {
    return (
        <Box>
            <ProductCard product={item} />
        </Box>
    )
}

export default WishListItem