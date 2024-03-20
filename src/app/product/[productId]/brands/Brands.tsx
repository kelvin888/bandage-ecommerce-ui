import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Brand1 from "@/assets/images/brands/brand-1.svg";
import Brand2 from "@/assets/images/brands/brand-2.svg";
import Brand3 from "@/assets/images/brands/brand-3.svg";
import Brand4 from "@/assets/images/brands/brand-4.svg";
import Brand5 from "@/assets/images/brands/brand-5.svg";
import Brand6 from "@/assets/images/brands/brand-6.svg";
import Image from 'next/image';

const Brands = () => {
    return (
        <Box bgcolor="grey.500" py={6} overflow="auto">
            <Container>
                <Grid container alignItems="center" spacing={10}>
                    <Grid item>
                        <Image src={Brand1} alt='brand 1' />
                    </Grid>
                    <Grid item>
                        <Image src={Brand2} alt='brand 2' />
                    </Grid>
                    <Grid item>
                        <Image src={Brand3} alt='brand 3' />
                    </Grid>
                    <Grid item>
                        <Image src={Brand4} alt='brand 4' />
                    </Grid>
                    <Grid item>
                        <Image src={Brand5} alt='brand 5' />
                    </Grid>
                    <Grid item>
                        <Image src={Brand6} alt='brand 6' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Brands;
