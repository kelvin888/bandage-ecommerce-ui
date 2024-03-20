import { ListItem, ListItemText } from '@mui/material'
import React, { FC } from 'react'
type MenuItemProps = {
    label: string
}
const MenuItem: FC<MenuItemProps> = ({ label }) => {
    return (
        <ListItem>
            <ListItemText disableTypography sx={{ fontWeight: 700 }} primary={label} />
        </ListItem>
    )
}

export default MenuItem