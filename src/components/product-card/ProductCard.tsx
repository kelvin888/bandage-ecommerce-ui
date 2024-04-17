"use client"
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { clipText } from '@/utils/clipText';
import { Product } from '@/types/product';


interface ProductProps {
    product: Product
    currency?: string;
    onCardClick?: (productId: number) => void;
}

const ProductCard: React.FC<ProductProps> = ({
    product,
    currency = "$",
    onCardClick,
}) => {

    const handleCardClick = () => {
        onCardClick && onCardClick(product.id)
    }
    return (
        <Card elevation={0} onClick={handleCardClick}>
            <CardMedia
                component="img"
                height="280"
                image={product?.thumbnail}
                alt={product?.title}
            />
            <CardContent sx={{ padding: 2 }}>
                <Box bgcolor="white" marginBottom={1}>
                    <Typography variant="h5" fontWeight={700} fontSize={16} textOverflow="ellipsis" >{clipText(product?.title, 20)}</Typography>
                    <Typography variant="body1" color="grey.700" marginTop={2} fontSize={14} fontWeight={700}>{clipText(product?.description || "", 60)}</Typography>
                </Box>
                <Box display="flex" gap={2} bgcolor="white">
                    <Typography variant="body1" color="grey.600" fontWeight={700} fontSize={16}>
                        {currency}{product?.price}
                    </Typography>
                    <Typography variant="body1" color="secondary.main" fontSize={16} fontWeight={700}>
                        {currency}{product?.discountPercentage}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
