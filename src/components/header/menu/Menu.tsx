import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <List sx={{ display: "flex", color: "grey.700", fontWeight: 700 }}>
            <MenuItem label='Home' />
            <MenuItem label='Shop' />
            <MenuItem label='About' />
            <MenuItem label='Blog' />
            <MenuItem label='Contact' />
            <MenuItem label='Pages' />
        </List>
    )
}

export default Menu