import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = ({ update, images }) => {
  const slides = images.map((image, idx) => (
    <div className="each-slide">
      <img src={image} alt="img" key={idx} />
    </div>
  ));
  return (
    <Slide onChange={update} style={{ width: '800px', position: 'relative' }}>
      {slides}
    </Slide>
  );
};

export default Slideshow;
