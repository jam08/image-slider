import React from 'react';
import '../App.css';

function Slide(props) {
  const {slides, current} = props;
  const slideList = slides.map((slide, index) =>  
    <li 
      key={`slide-${slide.name}`} 
      className={current === index ? "active item" : "item"}>
        <img src={slide.image} alt={slide.text} id={`slide-${index + 1}`}/>
    </li>
  );
  return (
    <ul>
      {slideList}
    </ul>
  );
}

export default Slide;