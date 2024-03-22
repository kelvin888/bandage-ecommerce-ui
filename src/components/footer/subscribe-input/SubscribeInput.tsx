import { Box, Button, TextField, styled } from '@mui/material';

const StyledSubscribeInput = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: 321,
    height: 58,
    borderRadius: theme.shape.borderRadius, // Rounded corners on the container
    overflow: 'hidden', // Hide overflow to prevent rounded corners on children
    '& .MuiTextField-root': {
        flex: 1,
        marginRight: 0,
        borderRadius: 0,
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 0,
        height: 58,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
    },
    '& .MuiButton-root': {
        backgroundColor: theme.palette.primary.main, // Use primary color from theme
        color: theme.palette.primary.contrastText, // Text color based on theme
        height: '100%',
        borderRadius: 0,
        textTransform: "capitalize",
        width: 117,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark, // Darker color on hover
        }
    }
}));

const SubscribeInput = () => {
    return (
        <StyledSubscribeInput>
            <TextField />
            <Button variant="contained">Subscribe</Button>
        </StyledSubscribeInput>
    );
};

export default SubscribeInput;
