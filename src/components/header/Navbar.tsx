import { Box, Container, Hidden, Typography } from '@mui/material'
import React, { useState } from 'react'
import Menu from './menu/Menu'
import PersonIcon from "@/assets/images/icons/person.svg"
import CartIcon from "@/assets/images/icons/cart.svg"
import HeartIcon from "@/assets/images/icons/heart.svg"
import SearchIcon from "@/assets/images/icons/search.svg"
import Image from 'next/image'
import Logo from '../logo/Logo'
import WishListDialog from '../wishlist/WishListDialog'
import CartDialog from '../cart/CartDialog'
import { useSelector } from 'react-redux'
import { selectCartItems } from '@/features/cart/cartSlice'

const Navbar = () => {
    const cartItems = useSelector(selectCartItems)
    const [wishListOpen, setWishListOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleWishListClick = () => {
        setWishListOpen(true);
    };

    const handleCartClick = () => {
        setCartOpen(true);
    };



    return (
        <Box height={80}>
            <Container sx={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "space-between" }}>
                <Logo />

                <Hidden mdDown>
                    <Menu />
                </Hidden>

                <Box display="flex" gap={2} color="primary.main">
                    <Hidden mdDown>
                        <Box display="flex" alignItems="center" gap={1}>
                            <Image src={PersonIcon} alt="person icon" />
                            <Typography color="primary.main" fontWeight={700}>Login / Register</Typography>
                        </Box>
                    </Hidden>


                    <Box>
                        <Image src={SearchIcon} alt="search icon" />
                    </Box>

                    <Box display="flex" alignItems="center" gap={0.5} onClick={handleCartClick}>
                        <Image src={CartIcon} alt="cart icon" />
                        <Typography fontSize={12}>1</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={0.5} onClick={handleWishListClick}>
                        <Image src={HeartIcon} alt="heart icon" />
                        <Typography fontSize={12}>2</Typography>
                    </Box>
                </Box>
                {wishListOpen &&
                    <WishListDialog
                        setWishListOpen={setWishListOpen}
                        wishListOpen={wishListOpen}
                    />}

                {cartOpen &&
                    <CartDialog
                        cartOpen={cartOpen}
                        setCartOpen={setCartOpen}
                    />}
            </Container>
        </Box>
    )
}

export default Navbar