"use client"
import { Box, Breakpoint, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { TrendingUp } from '@mui/icons-material';
import useBreakpoints from '@/hooks/useBreakPoints';

const Services = () => {
    const isLargeScreen = useBreakpoints('md' as Breakpoint);

    return (
        <Box>
            <Box py={10}>
                <Container>
                    <Stack textAlign="center" gap={1} mb={12}>
                        <Typography color="grey.700" letterSpacing={2} fontSize={20} fontWeight={500}>Featured Products</Typography>
                        <Typography fontWeight={700} fontSize={24} letterSpacing={1}>THE BEST SERVICES</Typography>
                        <Typography fontSize={14} color="grey.700" letterSpacing={2} fontWeight={500}>Problems trying to resolve the conflict between </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent={isLargeScreen ? "space-between" : "center"} gap={4} flexWrap="wrap">
                        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Box color="primary.main">
                                <LocalLibraryIcon sx={{ fontSize: 72 }} />
                            </Box>
                            <Typography fontSize={24} fontWeight={700}>Easy Wins</Typography>
                            <Typography fontSize={14} color="grey.700" textAlign="center" maxWidth={200}>Get your best looking smile now!</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Box color="primary.main">
                                <CalendarViewMonthIcon sx={{ fontSize: 72 }} />
                            </Box>
                            <Typography fontSize={24} fontWeight={700}>Concrete</Typography>
                            <Typography fontSize={14} color="grey.700" textAlign="center" maxWidth={250}>Defalcate is most focused in helping you discover your most beautiful smile</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Box color="primary.main">
                                <TrendingUp sx={{ fontSize: 72 }} />
                            </Box>
                            <Typography fontSize={24} fontWeight={700}>Hack Growth</Typography>
                            <Typography fontSize={14} color="grey.700" textAlign="center" maxWidth={220}>Overcame any hurdle or any other problem.</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Services