import { ListItem, ListItemText } from '@mui/material'
import React, { FC } from 'react'
type CustomMenuItemProps = {
    label: string
}
const CustomMenuItem: FC<CustomMenuItemProps> = ({ label }) => {
    return (
        <ListItem>
            <ListItemText disableTypography sx={{ fontWeight: 700, textAlign: "center" }} primary={label} />
        </ListItem>
    )
}

export default CustomMenuItem