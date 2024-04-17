"use client"
import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Image1 from "@/assets/images/hero/image1.png"
import Image2 from "@/assets/images/hero/image2.png"
import Image3 from "@/assets/images/hero/image3.png"
import Image4 from "@/assets/images/hero/image4.png"

const Hero = () => {

    return (
        <Box>
            <Container>
                <ImageList
                    variant="quilted"
                    cols={24}
                    gap={16}
                    rowHeight={300}
                >
                    <ImageListItem cols={10} rows={2}>
                        <Image
                            fill src={Image1}
                            style={{ objectFit: "cover" }}
                            alt="Breakfast" />
                        <Box position="absolute" top={20} left={20}>
                            <Typography color="secondary.main" fontWeight={700} fontSize={14}>5 Items</Typography>
                            <Typography fontWeight={700} fontSize={40}>FURNITURE</Typography>
                            <Typography fontWeight={700} fontSize={14}>Read More</Typography>
                        </Box>
                    </ImageListItem>
                    <ImageListItem cols={14} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src={Image2} alt="Coffee" />
                        <Box position="absolute" top={20} left={20}>
                            <Typography color="secondary.main" fontWeight={700} fontSize={14}>50 Items</Typography>
                            <Typography fontWeight={700} fontSize={24}>COOKWARE</Typography>
                            <Typography fontWeight={700} fontSize={14}>Read More</Typography>
                        </Box>
                    </ImageListItem>
                    <ImageListItem cols={7} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src={Image3} alt='Burger' />
                        <Box position="absolute" top={20} left={20}>
                            <Typography color="secondary.main" fontWeight={700} fontSize={14}>22 Items</Typography>
                            <Typography fontWeight={700} fontSize={24}>ELECTRONICS</Typography>
                            <Typography fontWeight={700} fontSize={14}>Read More</Typography>
                        </Box>
                    </ImageListItem>
                    <ImageListItem cols={7} rows={1}>
                        <Image fill
                            style={{ objectFit: "cover" }}
                            src={Image4} alt='Camera' />
                        <Box position="absolute" top={20} left={20}>
                            <Typography color="secondary.main" fontWeight={700} fontSize={14}>102 Items</Typography>
                            <Typography fontWeight={700} fontSize={24}>GAMING</Typography>
                            <Typography fontWeight={700} fontSize={14}>Read More</Typography>
                        </Box>
                    </ImageListItem>
                </ImageList>

            </Container>
        </Box >
    )
}

export default Hero


