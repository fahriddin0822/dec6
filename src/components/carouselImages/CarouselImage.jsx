// ExampleCarouselImage.js
import React from "react";

function ExampleCarouselImage({ image }) {
  return (
    <img
      className="d-block w-100 h-64 object-contain rounded-lg shadow-md"
      src={image}
      alt="Product Image"
    />
  );
}

export default ExampleCarouselImage;