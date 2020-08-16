import React from 'react';
import {CarouselCaption,CarouselItem} from 'reactstrap';

const CarouselSlide=({quote}) => (
    <CarouselItem
        className="carousel-slide"
        tag="div"
        key={quote.quote}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={quote.quote}  />
      </CarouselItem>
)

export default CarouselSlide;