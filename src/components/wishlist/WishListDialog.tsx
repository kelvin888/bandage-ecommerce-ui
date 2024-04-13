import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import WishList from './WishList';

interface WishListDialogProps {
    wishListOpen: boolean;
    setWishListOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const WishListDialog: React.FC<WishListDialogProps> = ({ wishListOpen, setWishListOpen }) => {
    const handleClose = () => {
        setWishListOpen(false);
    };

    return (
        <Dialog
            open={wishListOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="lg"
            PaperProps={{ sx: { minWidth: 1088 } }}
        >
            <DialogContent>
                <WishList />
            </DialogContent>

        </Dialog>
    );
}

export default WishListDialog;