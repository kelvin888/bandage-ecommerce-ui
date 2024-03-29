"use client"
import { Avatar, Box, Breakpoint, Container, Grid, ImageList, ImageListItem, Rating, Typography } from '@mui/material'
import React from 'react'
import Image from "next/image";
import User1 from "@/assets/images/testimonial/user1.png"
import User2 from "@/assets/images/testimonial/user2.png"
import User3 from "@/assets/images/testimonial/user3.png"
import User4 from "@/assets/images/testimonial/user4.png"
import User5 from "@/assets/images/testimonial/user5.png"
import User6 from "@/assets/images/testimonial/user6.png"
import User7 from "@/assets/images/testimonial/user7.png"
import User8 from "@/assets/images/testimonial/user8.png"
import User9 from "@/assets/images/testimonial/user9.png"
import User10 from "@/assets/images/testimonial/user10.png"
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
                            <Image src={User2} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User3} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User4} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User5} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User6} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User7} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User8} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User9} fill alt="testimonial image1" />
                        </ImageListItem>
                        <ImageListItem>
                            <Image src={User10} fill alt="testimonial image1" />
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Container>
        </Box>
    )
}

export default Testimonials