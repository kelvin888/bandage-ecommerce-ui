import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import ProductOptions from './options/ProductOptions'
import ProductDetails from './details/ProductDetails'
import Brands from './brands/Brands'
import { Box } from '@mui/material'

const ProuctDetails = () => {
    return (
        <Box>
            <Header />
            <ProductOptions />
            <ProductDetails />
            <Brands />
            <Footer />
        </Box>
    )
}

export default ProuctDetails