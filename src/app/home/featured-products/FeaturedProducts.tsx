"use client"
import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/product-card/ProductCard';
import { productKeys } from '@/constants/queryKeys';
import productService from '@/services/productService';
import { Product } from '@/types/product';
const FeaturedProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const defaultLimit = 30;
    const [limit, setLimit] = useState(defaultLimit);
    const [skip, setSkip] = useState(0);

    const { data: fetchedProducts, isLoading, isFetching } = useQuery({
        queryKey: [productKeys.FIND_ALL_PRODUCTS, { limit, skip }],
        queryFn: () => productService.getProducts({ limit, skip }),
        enabled: true,
    });

    useEffect(() => {
        if (fetchedProducts) {
            setProducts(prevProducts => [
                ...prevProducts,
                ...fetchedProducts.data.products
            ]);
        }
    }, [fetchedProducts])



    const handleLoadMore = () => {
        setLimit(defaultLimit)
        setSkip(skip + defaultLimit)
    };

    console.log("products", products)

    return (
        <Box py={8}>
            <Container>
                <Stack textAlign="center" gap={1} mb={6}>
                    <Typography color="grey.700" letterSpacing={2} fontSize={20}>Featured Products</Typography>
                    <Typography fontWeight={700} fontSize={24} letterSpacing={1}>BESTSELLER PRODUCTS</Typography>
                    <Typography fontSize={14} color="grey.700" letterSpacing={2}>Problems trying to resolve the conflict between </Typography>
                </Stack>

                <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 15 }}>
                    {products.map((product, index) =>
                        <Grid key={`product ${index}`} item xl={3} lg={3} md={4} sm={6} xs={12}>
                            <ProductCard
                                actualPrice={product.price}
                                description={product.description}
                                discountedPrice={product.discountPercentage}
                                imageUrl={product.thumbnail}
                                productName={product.title}
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
