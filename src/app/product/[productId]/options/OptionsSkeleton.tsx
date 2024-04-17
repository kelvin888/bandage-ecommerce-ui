"use client"
import { Box, Breadcrumbs, Button, Container, Link, Snackbar, Stack, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { StyledIconButton } from '@/components/styled-icon-button/StyledIconButton';
import { AddShoppingCartOutlined, FavoriteBorderOutlined, VisibilityOutlined } from '@mui/icons-material';
import theme from '@/theme/theme';
import Skeleton from 'react-loading-skeleton';
import ImageGallerySkeleton from '@/components/image-gallery/ImageGallerySkeleton';

const breadcrumbs = [
    <Skeleton key={1} />,
    <Skeleton key={2} />
];

const OptionsSkeleton = () => {

    return (
        <Box bgcolor="grey.500">
            <Container>
                <Box height={80} display="flex" alignItems="center" >
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Box>

                <Stack direction="row" gap={8} flexWrap="wrap">
                    <Box flex="1">
                        <ImageGallerySkeleton />
                    </Box>
                    <Box flex="1">
                        <Box maxHeight={450} height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                            <Box>
                                <Skeleton />

                                <Box display="flex" alignItems="center" marginTop={2} gap={3}>
                                    <Rating
                                        name="rating"
                                        value={0}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <Skeleton />
                                </Box>

                                <Box marginTop={3}>
                                    <Box>
                                        <Skeleton />
                                    </Box>

                                    <Box display="flex" gap={2}>
                                        <Skeleton height={20} width={100} />

                                        <Skeleton height={20} width={100} />
                                    </Box>
                                </Box>
                            </Box>


                            <Box>
                                <Divider color='grey.600' sx={{ marginTop: 10 }} />

                                <Box marginTop={2}>
                                </Box>
                            </Box>


                            <Box marginTop={3} display="flex" alignItems="center" gap={2}>
                                <Skeleton width={130} />
                                <Skeleton width={30} />
                                <Skeleton width={30} />
                                <Skeleton width={30} />
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>

    )
}

export default OptionsSkeleton