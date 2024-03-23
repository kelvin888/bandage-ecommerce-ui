import { sampleProducts } from '@/app/product/[productId]/best-sellers/BestSellers'
import ProductCard from '@/components/product-card/ProductCard'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const FeaturedProducts = () => {
    return (
        <Box py={8}>
            <Container>
                <Stack textAlign="center" gap={1} mb={6}>
                    <Typography color="grey.700" letterSpacing={2} fontSize={20}>Featured Products</Typography>
                    <Typography fontWeight={700} fontSize={24} letterSpacing={1}>BESTSELLER PRODUCTS</Typography>
                    <Typography fontSize={14} color="grey.700" letterSpacing={2}>Problems trying to resolve the conflict between </Typography>
                </Stack>

                <Grid container spacing={4} columns={15}>
                    {sampleProducts.map((product, index) =>
                        <Grid key={`product ${index}`} item xs={24} sm={5} md={3}>
                            <ProductCard
                                actualPrice={product.actualPrice}
                                description={product.description}
                                discountedPrice={product.discountedPrice}
                                imageUrl={product.imageUrl}
                                productName={product.productName}
                            />
                        </Grid>
                    )}
                </Grid>

                <Box display="flex" justifyContent="center" pt={8}>
                    <Button variant='outlined' sx={{ height: 52, letterSpacing: 2, fontWeight: 700, borderWidth: 2 }}>LOAD MORE PRODUCTS</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default FeaturedProducts