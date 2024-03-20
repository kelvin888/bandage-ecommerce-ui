import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { styled } from '@mui/system';
import Image from 'next/image';

export const ImageGalleryContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingBottom: theme.spacing(5)
}));

export const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: 'fit-content',
}));

export const ThumbnailContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
}));

export const ThumbnailImage = styled(Image)(({ theme }) => ({
    cursor: 'pointer',
    borderRadius: theme.shape.borderRadius,
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
    },
}));

export const PreviousButton = styled(NavigateBefore)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: '60%',
    transform: 'translateY(-60%)',
    color: theme.palette.common.white, // Default color
    fontSize: 60,
}));

export const NextButton = styled(NavigateNext)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '60%',
    transform: 'translateY(-60%)',
    color: theme.palette.common.white, // Default color
    fontSize: 60,
}));
