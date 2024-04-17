"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import calltoActionBg from "@/assets/images/call-to-action-bg.png"

const CallToAction = () => {

    return (
        <Box sx={{
            backgroundImage: `url(${calltoActionBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "unset"
        }}>
            <Stack direction="column" alignItems="center" gap={3} maxWidth={571} px={2}>
                <Typography color="primary.main" fontSize={14} fontWeight={700}>Designing Better Experience</Typography>
                <Typography fontSize={40} fontWeight={700} textAlign="center">Problems trying to resolve
                    the conflict between </Typography>
                <Typography textAlign="center" color="grey.700" fontSize={14}>Problems trying to resolve the conflict between the two major realms of Classical physics: </Typography>
                <Typography fontSize={24} fontWeight={700} color="secondary.main">$16.48</Typography>
                <Button variant='contained' sx={{ fontWeight: 700 }}>ADD YOUR CALL TO ACTION</Button>
            </Stack>
        </Box>
    )
}

export default CallToAction