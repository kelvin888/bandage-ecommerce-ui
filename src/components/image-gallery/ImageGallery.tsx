"use client"
import React, { useState } from 'react';
import { ImageGalleryContainer, ImageContainer, ThumbnailContainer, ThumbnailImage, NextButton, PreviousButton } from './Styles';
import Image from 'next/image';

interface Props {
    images: string[] | undefined;
}

const ImageGallery: React.FC<Props> = ({ images = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <ImageGalleryContainer>
            <ImageContainer sx={{ width: "100%" }}>
                <Image
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    width={506}
                    height={450}
                    style={{ objectFit: "cover" }}
                    layout='responsive'
                />
                <PreviousButton
                    onClick={handlePrev}
                />
                <NextButton
                    onClick={handleNext}
                />
            </ImageContainer>
            <ThumbnailContainer>
                {images.map((image, index) => (
                    <ThumbnailImage
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={75}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </ThumbnailContainer>
        </ImageGalleryContainer>
    );
};

export default ImageGallery;
