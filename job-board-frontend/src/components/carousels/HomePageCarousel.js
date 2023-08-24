import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function HomePageCarousel ()  {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>This is the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+2"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>This is the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+3"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Slide 3</h3>
                    <p>This is the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};