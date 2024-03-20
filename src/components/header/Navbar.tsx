import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import PersonIcon from "@/assets/images/icons/person.svg"
import CartIcon from "@/assets/images/icons/cart.svg"
import HeartIcon from "@/assets/images/icons/heart.svg"
import SearchIcon from "@/assets/images/icons/search.svg"
import Image from 'next/image'

const Navbar = () => {
    return (
        <Box height={80}>
            <Container sx={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "space-between" }}>
                <Typography fontWeight={700} fontSize={24}>Bandage</Typography>

                <Menu />

                <Box display="flex" gap={2} color="primary.main">
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

            </Container>
        </Box>
    )
}

export default Navbar