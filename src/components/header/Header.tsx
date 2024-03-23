"use client"
import React from 'react'
import Box from '@mui/material/Box';
import { Container, Hidden } from '@mui/material';
import PhoneIcon from "@/assets/images/icons/phone.svg"
import MailIcon from "@/assets/images/icons/mail.svg"
import InstagramIcon from "@/assets/images/icons/instagram.svg"
import YoutubeIcon from "@/assets/images/icons/youtube.svg"
import FacebookIcon from "@/assets/images/icons/facebook.svg"
import TwitterIcon from "@/assets/images/icons/twitter.svg"
import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {

    return (
        <Box>
            <Hidden mdDown>
                <Box sx={{
                    bgcolor: "secondary.main",
                    color: "common.white",
                    height: 58,
                }}>
                    <Container sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "space-between"
                    }}>

                        <Box display="flex" gap={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Image src={PhoneIcon} alt="phone icon" />
                                (225) 555-0118
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Image src={MailIcon} alt="mail icon" />

                                michelle.rivera@example.com</Box>
                        </Box>
                        <Hidden lgDown>
                            <Box fontWeight={700}>
                                Follow Us  and get a chance to win 80% off
                            </Box>
                        </Hidden>


                        <Box display="flex" gap={2} fontWeight={700}>Follow Us  :
                            <Box display="flex" alignItems="center" gap={1}>
                                <Image src={InstagramIcon} alt='instagram icon' />
                                <Image src={YoutubeIcon} alt='youtube icon' />
                                <Image src={FacebookIcon} alt='facebook icon' />
                                <Image src={TwitterIcon} alt='twitter icon' />
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Hidden>

            <Navbar />
        </Box>

    )
}

export default Header