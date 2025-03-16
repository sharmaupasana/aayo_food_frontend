import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function Banner() {
    return (
        <>
            <div style={{height: 400, borderRadius: 10, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                >
                    <div>
                        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2023/05/Website-Food-Banner-Design-scaled.jpg" />
                    </div>
                    <div>
                        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Tasty-Food-Web-Banner-Design-scaled.jpg" />
                    </div>
                    <div>
                        <img src="https://i.ytimg.com/vi/njDmQetC9WA/maxresdefault.jpg" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Banner