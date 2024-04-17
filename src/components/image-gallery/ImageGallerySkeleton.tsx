"use client"
import React from 'react';
import { ImageGalleryContainer, ImageContainer, ThumbnailContainer } from './Styles';
import Skeleton from 'react-loading-skeleton';



const ImageGallerySkeleton = () => {

    return (
        <ImageGalleryContainer>
            <ImageContainer sx={{ width: "100%" }}>
                <Skeleton
                    width={506}
                    height={450}
                />
                <Skeleton />
                <Skeleton />
            </ImageContainer>
            <ThumbnailContainer>
                {Array(4).fill(0).map((_item, index) => (
                    <Skeleton
                        key={index}
                        width={100}
                        height={75}
                    />
                ))}
            </ThumbnailContainer>
        </ImageGalleryContainer>
    );
};

export default ImageGallerySkeleton;
