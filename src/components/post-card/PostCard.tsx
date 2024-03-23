import { Badge, Box, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import Post1Image from "@/assets/images/posts/post-1.png"
import { Chip } from '@mui/material';

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
                    <Typography>one</Typography>
                    <Typography>two</Typography>
                    <Typography>three</Typography>
                </Stack>

                <Typography>Loudest à la Madison #1
                    (L&#39;integral)</Typography>
                <Typography>We focus on ergonomics and meeting
                    you where you work. It&#39;s only a
                    keystroke away.</Typography>

                <Box display="flex" justifyContent="space-between">
                    <Box>one</Box>
                    <Box>two</Box>
                </Box>

                <Box display="flex" gap={1}>
                    <Typography>one</Typography>
                    forward icon
                </Box>
            </Box>

        </Paper>
    )
}

export default PostCard