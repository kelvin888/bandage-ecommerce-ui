"use client"
import React from 'react';
import { Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import ProductCard from '@/components/product-card/ProductCard';
import { useRouter } from 'next/navigation';
import useProduct from '@/hooks/useProduct';
import ProductSkeleton from '@/components/product-card/ProductSkeleton';
import { productKeys } from '@/constants/queryKeys';

const FeaturedProducts = () => {
    const router = useRouter()
    const { products, handleLoadMore, isFetching, isLoading } = useProduct({ limit: 30, queryKey: productKeys.FEATURED_PRODUCTS })


    const handleCardClick = (productId: number) => {
        console.log("card clicked", productId)
        router.push("/product/" + productId)
    }

    let loda = true

    return (
        <Box py={8}>
            <Container>
                <Stack textAlign="center" gap={1} mb={6}>
                    <Typography color="grey.700" letterSpacing={2} fontSize={20}>Featured Products</Typography>
                    <Typography fontWeight={700} fontSize={24} letterSpacing={1}>BESTSELLER PRODUCTS</Typography>
                    <Typography fontSize={14} color="grey.700" letterSpacing={2}>Problems trying to resolve the conflict between </Typography>
                </Stack>

                {isLoading &&
                    <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 15 }}>
                        {Array(10).fill(0).map((_item, index) =>
                            <Grid key={index} item xl={3} lg={3} md={4} sm={6} xs={12}>
                                <ProductSkeleton />
                            </Grid>
                        )}
                    </Grid>
                }

                <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 15 }}>
                    {products.map((product, index) =>
                        <Grid key={`product ${index}`} item xl={3} lg={3} md={4} sm={6} xs={12}>
                            <ProductCard
                                product={product}
                                onCardClick={handleCardClick}
                            />
                        </Grid>
                    )}
                </Grid>


                {products.length > 0 && (
                    <Box display="flex" justifyContent="center" pt={8}>
                        <Button
                            variant='outlined'
                            sx={{ height: 52, width: 250, letterSpacing: 2, fontWeight: 700, borderWidth: 2 }}
                            onClick={handleLoadMore}
                            disabled={isLoading || isFetching}
                        >
                            {isLoading || isFetching ? <CircularProgress title='Loading' />
                                : " LOAD MORE PRODUCTS"}

                        </Button>
                    </Box>
                )}


            </Container>
        </Box>
    );
};

export default FeaturedProducts;
