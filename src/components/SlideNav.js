import React from 'react';
import '../App.css';

function SlideNav(props) {
  const {slides, slideNumber, onClick, style} = props;
  const slideList = slides.map((slide, index) => 
    <li 
      className="nav-slides" 
      key={`#slide-${index + 1}`} 
    >
      {slideNumber === index + 1 
      ? 
        <a 
          href={`#slide-${index + 1}`} 
          name={index} 
          style={style.isPlaying}
          onKeyDown={props.onKeyDown}
          onClick={onClick}
        >
          {index + 1}
        </a>
      :
      <a 
        href={`#slide-${index + 1}`} 
        name={index}
        onKeyDown={props.onKeyDown}
        onClick={onClick}
      >
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