import React,{useState} from 'react';
import {quotes} from './quotes';
// import CarouselSlide from './CarouselSlide';
import {Carousel,CarouselIndicators,CarouselControl,CarouselCaption,CarouselItem} from 'reactstrap';




const MainCarousel=() => {

    
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === quotes.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? quotes.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
       
        const slides=quotes.map(quote => ( 
            <CarouselItem
                key={quote.quote}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
              >
                <img src={quote.image} alt='image' />
                <CarouselCaption captionText={quote.quote} captionHeader={quote.quote} />
              </CarouselItem>
        ));
        
    
    
    return(
        <div className="main-carousel">
            <div className="carousel-container">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                <CarouselIndicators items={quotes} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>   
        </div>
    )     
    
}

export default MainCarousel;