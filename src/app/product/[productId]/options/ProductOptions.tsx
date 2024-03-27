"use client"
import ImageGallery from '@/components/image-gallery/ImageGallery'
import { Box, Breadcrumbs, Button, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import ColorChooser from '@/components/color-chooser/ColorChooser';
import { StyledIconButton } from '@/components/styled-icon-button/StyledIconButton';
import { AddShoppingCartOutlined, FavoriteBorderOutlined, VisibilityOutlined } from '@mui/icons-material';
import theme from '@/theme/theme';

const productImages = [
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
]

const colors = ['#FF5733', '#23856D', '#E77C40', '#60a5fa']; // Example colors


const breadcrumbs = [
    <Link fontWeight={700} underline="hover" key="1" color="inherit" href="/">
        Home
    </Link>,
    <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
    >
        Shop
    </Link>
];

const ProductOptions = () => {
    const handleColorClick = (color: string) => {
        console.log('Selected color:', color);
        // Add logic to handle selected color
    };
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
                        <ImageGallery images={productImages} />
                    </Box>
                    <Box flex="1">
                        <Box maxHeight={450} height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                            <Box>
                                <Typography marginBottom={1} variant='h4' fontSize={20}>
                                    Floating Phone
                                </Typography>

                                <Box display="flex" alignItems="center" marginTop={2} gap={3}>
                                    <Rating
                                        name="rating"
                                        value={1.5}
                                        precision={0.5}
                                        readOnly
                                    />
                                    <Typography color="grey.700" fontWeight={700}>
                                        10 Reviews
                                    </Typography>

                                </Box>

                                <Box marginTop={3}>
                                    <Box>
                                        <Typography color="common.black" fontWeight={700} fontSize={24}>
                                            $1,139.33
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography component="h6" fontWeight={700} color="grey.700">
                                            Availability  : <Typography color="primary.main" fontWeight={700} component='span'>In Stock </Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>


                            <Box>
                                <Divider color='grey.600' sx={{ marginTop: 10 }} />

                                <Box marginTop={2}>
                                    <ColorChooser colors={colors} onColorClick={handleColorClick} />
                                </Box>
                            </Box>


                            <Box marginTop={3} display="flex" alignItems="center" gap={2}>
                                <Button variant='contained' sx={{ color: theme.palette.common.white }}>Select Options</Button>
                                <StyledIconButton>
                                    <FavoriteBorderOutlined fontSize='small' />
                                </StyledIconButton>
                                <StyledIconButton>
                                    <AddShoppingCartOutlined fontSize='small' />
                                </StyledIconButton>
                                <StyledIconButton>
                                    <VisibilityOutlined fontSize='small' />
                                </StyledIconButton>
                            </Box>
                        </Box>
                    </Box>
                </Stack>

            </Container>
        </Box>

    )
}

export default ProductOptions