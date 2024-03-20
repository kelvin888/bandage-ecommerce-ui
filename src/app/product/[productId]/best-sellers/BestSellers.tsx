import ProductCard from '@/components/product-card/ProductCard';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const sampleProducts = [
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 1',
        description: 'English Department',
        actualPrice: 50,
        discountedPrice: 40,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 2',
        description: 'English Department',
        actualPrice: 60,
        discountedPrice: 55,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 3',
        description: 'English Department',
        actualPrice: 70,
        discountedPrice: 65,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 4',
        description: 'English Department',
        actualPrice: 70,
        discountedPrice: 65,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 1',
        description: 'English Department',
        actualPrice: 50.48,
        discountedPrice: 40.48,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 2',
        description: 'English Department',
        actualPrice: 60,
        discountedPrice: 55,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 3',
        description: 'English Department',
        actualPrice: 70,
        discountedPrice: 65,
    },
    {
        imageUrl: 'https://via.placeholder.com/300',
        productName: 'Product 4',
        description: 'English Department',
        actualPrice: 70,
        discountedPrice: 65,
    },
];

const BestSellers = () => {
    return (
        <Box bgcolor="grey.500" py={6}>
            <Container>
                <Typography fontWeight={700} fontSize={24}>BESTSELLER PRODUCTS</Typography>

                <Divider sx={{ marginTop: 3 }} />

                <Box marginTop={2}>
                    <Grid container spacing={4}>
                        {sampleProducts.map((product, index) =>
                            <Grid key={`product ${index}`} item xs={12} sm={6} md={3}>
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
                </Box>
            </Container>
        </Box>
    )
}

export default BestSellers