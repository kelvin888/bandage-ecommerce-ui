"use client"
import ProductCard from '@/components/product-card/ProductCard';
import useProduct from '@/hooks/useProduct';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const BestSellers = () => {
    const { products } = useProduct(8)
    return (
        <Box bgcolor="grey.500" py={6}>
            <Container>
                <Typography fontWeight={700} fontSize={24}>BESTSELLER PRODUCTS</Typography>

                <Divider sx={{ marginTop: 3 }} />

                <Box marginTop={2}>
                    <Grid container spacing={4}>
                        {products.map((product, index) =>
                            <Grid key={`product ${index}`} item xs={12} sm={6} md={3}>
                                <ProductCard
                                    productId={product.id}
                                    actualPrice={product.price}
                                    description={product.description}
                                    discountedPrice={product.discountPercentage}
                                    imageUrl={product.thumbnail}
                                    productName={product.title}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default BestSellers