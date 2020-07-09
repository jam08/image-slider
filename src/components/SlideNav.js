import React from 'react';
import '../App.css';

function SlideNav(props) {
  const {slides, slideNumber, style} = props;
  const slideList = slides.map((slide, index) => 
    <li 
      className="nav-slides" 
      key={`nav-${slide.name}`} 
    >
      {slideNumber === index + 1 
      ? 
        <a href={`#slide-${index + 1}`} style={style.isPlaying}>
          {index + 1}
        </a>
      :
      <a href={`#slide-${index + 1}`}>
          {index + 1}
      </a>}
    </li>
  );
  return (
    <ul className="slide-nav">
      {slideList}
    </ul>
  );
}

export default SlideNav;