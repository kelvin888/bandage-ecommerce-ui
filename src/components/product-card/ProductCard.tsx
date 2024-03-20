import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

interface ProductProps {
    imageUrl: string;
    productName: string;
    description: string;
    actualPrice: number;
    discountedPrice: number;
    currency?: string
}

const ProductCard: React.FC<ProductProps> = ({
    imageUrl,
    productName,
    description,
    actualPrice,
    discountedPrice,
    currency = "$"
}) => {
    return (
        <Card elevation={0}>
            <CardMedia
                component="img"
                height="280"
                image={imageUrl}
                alt={productName}
            />
            <CardContent sx={{ padding: 2 }}>
                <Box bgcolor="white" marginBottom={1}>
                    <Typography variant="h5" fontWeight={700} fontSize={16}>{productName}</Typography>
                    <Typography variant="body1" color="grey.700" marginTop={2} fontSize={14} fontWeight={700}>{description}</Typography>
                </Box>
                <Box display="flex" gap={2} bgcolor="white">
                    <Typography variant="body1" color="grey.600" fontWeight={700} fontSize={16}>
                        {currency}{actualPrice}
                    </Typography>
                    <Typography variant="body1" color="secondary.main" fontSize={16} fontWeight={700}>
                        {currency}{discountedPrice}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;