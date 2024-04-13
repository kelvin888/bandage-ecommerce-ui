import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Cart from './Cart';

interface CartDialogProps {
    cartOpen: boolean;
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CartDialog: React.FC<CartDialogProps> = ({ cartOpen, setCartOpen }) => {
    const handleClose = () => {
        setCartOpen(false);
    };

    return (
        <Dialog
            open={cartOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="lg"
            PaperProps={{ sx: { minWidth: 1088 } }}
        >
            <DialogContent sx={{ padding: 0 }}>
                <Cart />
            </DialogContent>
        </Dialog>
    );
}

export default CartDialog;