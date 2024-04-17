"use "
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import ProductOptions from './options/ProductOptions'
import ProductDetails from './details/ProductDetails'
import Brands from './brands/Brands'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'

const ProuctDetails = () => {


    return (
        <Box>
            <Header />
            <ProductOptions />
            <ProductDetails />
            <BestSellers />
            <Brands />
            <Footer />
        </Box>
    )
}

export default ProuctDetails