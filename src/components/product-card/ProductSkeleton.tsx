"use client"
import React from 'react';
import { Box } from '@mui/material';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {


    return (
        <Box>
            <Box >
                <Skeleton height={200} />
            </Box>
            <Box>
                <Box bgcolor="white" gap={1} marginBottom={1} paddingY={2}>
                    <Skeleton />
                    <Skeleton />
                </Box>
                <Box display="flex" gap={2} bgcolor="white">
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                </Box>
            </Box>
        </Box>
    );
};

export default ProductSkeleton;
