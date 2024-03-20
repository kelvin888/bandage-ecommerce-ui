import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[400]} !important`,
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    color: theme.palette.common.black,
    width: 40,
    height: 40
}));