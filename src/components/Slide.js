import React from 'react';
import '../App.css';

function Slide(props) {
  const {slides, current} = props;
  const slideList = slides.map((slide, index) =>  
    <li 
      key={`slide-${slide.name}`} 
      className={current === index ? "active item" : "item"}
    > 
      <figure>
        <img src={slide.image} alt={slide.text} id={`slide-${index + 1}`}/> 
        <figcaption>
          <p>{slide.text}</p>
          <p>Photo by: {slide.photoBy}</p>
        </figcaption>
      </figure>
    </li>
  );
  return (
    <ul className="slides">     
      {slideList}
    </ul>
  );
}

export default Slide;