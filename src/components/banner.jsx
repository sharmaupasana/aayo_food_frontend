import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function Banner() {
    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                <div>
                    <img src="https://www.shutterstock.com/image-photo/burger-special-discount-banner-blank-260nw-2480641111.jpg" />
                </div>
                <div>
                    <img src="https://img.pikbest.com/templates/20240602/food-burger-restaurant-special-offer-web-banner_10587321.jpg!w700wp" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX3XgjSDXmpYz4UUcGvDSHzohx-0SAW12uA&s" />
                </div>
            </Carousel>
        </>
    )
}

export default Banner