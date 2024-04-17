"use client"
import ProductCard from '@/components/product-card/ProductCard';
import ProductSkeleton from '@/components/product-card/ProductSkeleton';
import useProduct from '@/hooks/useProduct';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const BestSellers = () => {
    const router = useRouter()
    const { products, isLoading } = useProduct(8)

    const handleCardClick = (productId: number) => {
        console.log("card clicked", productId)
        router.push("/product/" + productId)
    }

    return (
        <Box bgcolor="grey.500" py={6}>
            <Container>
                <Typography fontWeight={700} fontSize={24}>BESTSELLER PRODUCTS</Typography>

                <Divider sx={{ marginTop: 3 }} />

                {isLoading &&
                    <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 15 }}>
                        {Array(8).fill(0).map((_item, index) =>
                            <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                                <ProductSkeleton />
                            </Grid>
                        )}
                    </Grid>
                }

                <Box marginTop={2}>
                    <Grid container spacing={4}>
                        {products.map((product, index) =>
                            <Grid key={`product ${index}`} item xs={12} sm={6} md={3}>
                                <ProductCard
                                    product={product}
                                    onCardClick={handleCardClick}
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