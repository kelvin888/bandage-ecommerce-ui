import { List } from '@mui/material'
import React from 'react'
import CustomMenuItem from './MenuItem'

const Menu = () => {
    return (
        <List sx={{ display: "flex", color: "grey.700", fontWeight: 700 }}>
            <CustomMenuItem label='Home' />
            <CustomMenuItem label='Shop' />
            <CustomMenuItem label='About' />
            <CustomMenuItem label='Blog' />
            <CustomMenuItem label='Contact' />
            <CustomMenuItem label='Pages' />
        </List>
    )
}

export default Menu