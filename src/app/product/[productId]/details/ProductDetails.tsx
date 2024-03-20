"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Container, Stack, Typography } from '@mui/material';
import ProductImage from "@/assets/images/product-details.png"
import Image from 'next/image';


const ProductDetails = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Container>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', height: 80, display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab sx={{ py: 4, textTransform: "capitalize" }} label="Description" value="1" />
                                <Tab sx={{ py: 4, textTransform: "capitalize" }} label="Additional Information" value="2" />
                                <Tab sx={{ py: 4, textTransform: "capitalize" }} label="Reviews (0)" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{ px: 0 }}>
                            <Box display="flex">
                                <Box flex={1}>
                                    <Stack gap={3} maxWidth={513}>
                                        <Typography component="h5" fontSize={24} fontWeight={700}>
                                            the quick fox jumps over
                                        </Typography>
                                        <Typography fontSize={14}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                                        <Typography fontSize={14} borderLeft="solid 2px" paddingLeft={3}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                                        <Typography fontSize={14}>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                                    </Stack>
                                </Box>

                                <Box>
                                    <Image src={ProductImage} alt='product thumbnail' />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">
                            <Box minHeight={426}>Item Two</Box>
                        </TabPanel>
                        <TabPanel value="3">
                            <Box minHeight={426}>
                                Item Three
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </Box>
    )
}

export default ProductDetails