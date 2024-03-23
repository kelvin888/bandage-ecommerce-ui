import PostCard from '@/components/post-card/PostCard'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Posts = () => {
    return (
        <Box>
            <Container>
                <Box textAlign="center" mb={6}>
                    <Typography fontWeight={700} color="primary.main">Practice Advice</Typography>
                    <Typography fontWeight={700} fontSize={40}>Featured Posts</Typography>
                </Box>

                <Grid container spacing={1} columns={12}>
                    <Grid item xs={12} md={6} lg={4}>
                        <PostCard isNew />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <PostCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <PostCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Posts