import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ScrollableCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="product-carousel-container w-full max-w-md mx-auto">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        indicators={true}
        controls={true}
        slide={true}
        touch={true}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image, idx) => (
          <Carousel.Item key={idx} className="h-96">
            <img
              className="d-block w-full h-full object-contain"
              src={image}
              alt={`Product view ${idx + 1}`}
            />
            <Carousel.Caption className="bg-black bg-opacity-50 p-2">
              <p>Image {idx + 1} of {images.length}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ScrollableCarousel;
