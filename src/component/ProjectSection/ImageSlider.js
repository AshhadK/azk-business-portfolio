import React from "react";
import { Image } from "react-bootstrap";
import { useState, useEffect } from 'react';


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Autoplay functionality
    useEffect(() => {
        if (images.length > 1) {
            const intervalId = setInterval(() => {
                nextImage();
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(intervalId);
        }
    }, [nextImage, images.length]);

    return (
        <div className="image-slider-container">
            <div className="image-slider-wrapper">
                {images.map((image, index) => (
                    index === currentIndex && (
                        <Image
                            key={index}
                            src={require(`../../assets/images/resource/${image}`)}
                            alt={`Image ${index + 1}`}
                            className="slider-image"
                        />
                    )
                ))}
            </div>

            {images.length > 1 && (
                <div onClick={prevImage} className="button-base prev-button">
                    <span className="icon fa fa-angle-left"></span>
                </div>
            )}

            {images.length > 1 && (
                <div onClick={nextImage} className="button-base next-button">
                    <span className="icon fa fa-angle-right"></span>
                </div>
            )}
        </div>
    );

};

export default ImageSlider;
