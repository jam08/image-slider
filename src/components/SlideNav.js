import React from 'react';
import '../App.css';

function SlideNav(props) {
  const {slides} = props;
  const slideList = slides.map((slide, index) => 
    <li key={`nav-${slide.name}`}><a href={`#slide-${index + 1}`}>{index + 1}</a></li>
  );
  return (
    <ul className="slide-nav">
      {slideList}
    </ul>
  );
}

export default SlideNav;