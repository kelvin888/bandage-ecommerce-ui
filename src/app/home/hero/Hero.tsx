"use client"
import useBreakpoints from '@/hooks/useBreakPoints';
import theme from '@/theme/theme';
import { Box, Breakpoint, Container, Grid, ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const Hero = () => {
    const isLargeScreen = useBreakpoints('md' as Breakpoint);

    return (
        <Box>
            <Container>
                <ImageList
                    variant="quilted"
                    cols={isLargeScreen ? 24 : 12}
                    gap={16}
                    rowHeight={300}
                >
                    <ImageListItem cols={isLargeScreen ? 10 : 12} rows={isLargeScreen ? 2 : 1}>
                        <Image
                            fill src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                            style={{ objectFit: "cover" }}
                            alt="Breakfast" />
                    </ImageListItem>
                    <ImageListItem cols={isLargeScreen ? 14 : 12} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="Coffee" />
                    </ImageListItem>
                    <ImageListItem cols={isLargeScreen ? 7 : 12} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt='Burger' />
                    </ImageListItem>
                    <ImageListItem cols={isLargeScreen ? 7 : 12} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt='Camera' />
                    </ImageListItem>
                </ImageList>

            </Container>
        </Box>
    )
}

export default Hero


