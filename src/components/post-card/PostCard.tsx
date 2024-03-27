import { Badge, Box, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import Post1Image from "@/assets/images/posts/post-1.png"
import { Chip } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

type Props = {
    isNew?: boolean
}
const PostCard: FC<Props> = ({ isNew }) => {
    return (
        <Paper sx={{ paddingBottom: 4 }}>
            <Box position="relative">
                {isNew ?
                    <Chip
                        variant='filled'
                        color='error'
                        label="NEW"
                        sx={{ borderRadius: 1, fontWeight: 700, position: "absolute", top: 20, left: 20, height: 24 }} />
                    : null}
                <Image src={Post1Image} alt='post1' layout='responsive' />
            </Box>
            <Box paddingX={3}>
                <Stack direction="row" gap={2}>
                    <Typography color="primary.500" fontSize={12}>Google</Typography>
                    <Typography fontSize={12}>Trending</Typography>
                    <Typography fontSize={12}>New</Typography>
                </Stack>

                <Typography mt={2} fontSize={20}>Loudest à la Madison #1
                    (L&#39;integral)</Typography>
                <Typography fontSize={14} my={2} color="grey.700">We focus on ergonomics and meeting
                    you where you work. It&#39;s only a
                    keystroke away.</Typography>

                <Box display="flex" justifyContent="space-between" mb={3}>
                    <Box>
                        <Typography fontSize={12} color="grey.700">22 April 2021</Typography>
                    </Box>
                    <Box>  <Typography fontSize={12} color="grey.700">10 comments</Typography></Box>
                </Box>

                <Box display="flex" gap={0}>
                    <Typography fontWeight={700} fontSize={14} color="grey.700">Learn More</Typography>
                    <Box color="primary.main">
                        <NavigateNext />
                    </Box>
                </Box>
            </Box>

        </Paper>
    )
}

export default PostCard