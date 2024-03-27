"use client"
import { Avatar, Box, Breakpoint, Container, Grid, ImageList, ImageListItem, Rating, Typography } from '@mui/material'
import React from 'react'
import Image from "next/image";
import User1 from "@/assets/images/testimonial/user1.png"
import useBreakpoints from '@/hooks/useBreakPoints';

const Testimonials = () => {
    const isLargeScreen = useBreakpoints("md" as Breakpoint)

    return (
        <Box minHeight={682} py={12}>
            <Container sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box flex={isLargeScreen ? 1 : "100%"} display="flex" alignItems="center" justifyContent="center" flexDirection="column" py={2}>
                    <Typography fontWeight={700} fontSize={24} mb={6}>
                        What they say about us
                    </Typography>

                    <Avatar sx={{ width: 90, height: 90, marginBottom: 2 }} src={User1.src} />

                    <Rating value={2} />

                    <Typography fontSize={14} fontWeight={700} textAlign="center" my={3} color="grey.700">Slate helps you see how many more days you need to work <br /> to <br />
                        reach your financial goal.</Typography>
                    <Typography color="primary.main" fontWeight={700}>Regina Miles</Typography>
                    <Typography fontWeight={700}>Designer</Typography>
                </Box>
                <Box flex={1}>
                    <ImageList cols={3} rowHeight={142}>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src='https://via.placeholder.com/300' fill alt="testimonial image1" />
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Container>
        </Box>
    )
}

export default Testimonials