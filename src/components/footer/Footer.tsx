"use client"
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import { Instagram, FacebookRounded, Twitter } from '@mui/icons-material';
import theme from '@/theme/theme';
import SubscribeInput from './subscribe-input/SubscribeInput';


const Footer = () => {
    return (
        <Box>
            <Container>
                <Box height={142} display="flex" alignItems="center" justifyContent="space-between" >
                    <Box>
                        <Logo />
                    </Box>
                    <Box display="flex" gap={2}>
                        <FacebookRounded sx={{ color: theme.palette.primary.main }} />
                        <Instagram sx={{ color: theme.palette.primary.main }} />
                        <Twitter sx={{ color: theme.palette.primary.main }} />
                    </Box>
                </Box>
                <Divider />
            </Container>

            <Box bgcolor="common.white">
                <Container>
                    <Box display="flex" gap={6} justifyContent="space-between" py={8}>
                        <Box minWidth="fit-content">
                            <Typography fontSize={16} fontWeight={700} mb={3}>Company Info</Typography>
                            <Stack gap={2}>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>About Us</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Carrier</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>We are hiring</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Blog</Typography>
                            </Stack>

                        </Box>
                        <Box minWidth="fit-content">
                            <Typography fontSize={16} fontWeight={700} mb={3}>Legal</Typography>
                            <Stack gap={2}>
                                <Typography fontSize={14} fontWeight={700} color="grey.700">About Us</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Carrier</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>We are hiring</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Blog</Typography>
                            </Stack>
                        </Box>
                        <Box minWidth="fit-content">
                            <Typography fontSize={16} fontWeight={700} mb={3}>Features</Typography>
                            <Stack gap={2}>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Business Marketing</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>User Analytic</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Live Chat</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Unlimited Support</Typography>
                            </Stack>
                        </Box>
                        <Box minWidth="fit-content">
                            <Typography fontSize={16} fontWeight={700} mb={3}>Resources</Typography>
                            <Stack gap={2}>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>IOS & Android</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Watch a Demo</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>Customers</Typography>
                                <Typography fontWeight={700} color="grey.700" fontSize={14}>API</Typography>
                            </Stack>
                        </Box>
                        <Box minWidth="fit-content">
                            <Typography fontSize={16} fontWeight={700} mb={3}>Get In Touch</Typography>
                            <SubscribeInput />
                        </Box>
                    </Box>
                </Container>
            </Box>


            <Box bgcolor="grey.500" height={74}>
                <Container sx={{ display: "flex", height: "100%", alignItems: "center" }}>
                    <Typography>
                        Made With Love By Finland All Right Reserved
                    </Typography>
                </Container>
            </Box>
        </Box >
    )
}

export default Footer