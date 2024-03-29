import Logo from '@/components/logo/Logo'
import { SortSharp } from '@mui/icons-material';
import { Box, Container, IconButton, List, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomMenuItem from './MenuItem';
import Image from 'next/image';
import PersonIcon from "@/assets/images/icons/person.svg"
import CartIcon from "@/assets/images/icons/cart.svg"
import HeartIcon from "@/assets/images/icons/heart.svg"
import SearchIcon from "@/assets/images/icons/search.svg"


const MobileNavbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: { currentTarget: any; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box height={80}>
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between"
                }}
            >
                <Logo />


                <div>
                    <IconButton
                        aria-controls="hamburger-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <SortSharp />
                    </IconButton>
                    <Menu
                        id="hamburger-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                width: '100%',
                                maxWidth: 'unset',
                                right: "0 !important",
                                left: "0 !important"
                            },
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <List
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    color: "grey.700",
                                    fontWeight: 700,
                                    width: "100%"
                                }}>
                                <CustomMenuItem label='Home' />
                                <CustomMenuItem label='Shop' />
                                <CustomMenuItem label='About' />
                                <CustomMenuItem label='Blog' />
                                <CustomMenuItem label='Contact' />
                                <CustomMenuItem label='Pages' />
                            </List>
                        </MenuItem>


                        <Box display="flex" flexDirection="column" alignItems="center" gap={2} color="primary.main">
                            <Box display="flex" alignItems="center" gap={1}>
                                <Image src={PersonIcon} alt="person icon" />
                                <Typography color="primary.main" fontWeight={700}>Login / Register</Typography>
                            </Box>


                            <Box>
                                <Image src={SearchIcon} alt="search icon" />
                            </Box>

                            <Box display="flex" alignItems="center" gap={0.5}>
                                <Image src={CartIcon} alt="cart icon" />
                                <Typography fontSize={12}>1</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={0.5}>
                                <Image src={HeartIcon} alt="heart icon" />
                                <Typography fontSize={12}>2</Typography>
                            </Box>
                        </Box>
                    </Menu>
                </div>
            </Container>
        </Box>
    )
}

export default MobileNavbar