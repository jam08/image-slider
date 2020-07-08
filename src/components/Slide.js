import React from 'react';
import '../App.css';

function Slide(props) {
  const {data} = props;
  return (
    <li>
      <img src={data.image} alt={data.text} aria-live="polite"/>
    </li>
  );
}

export default Slide;