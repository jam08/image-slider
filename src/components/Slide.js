import React from 'react';
import '../App.css';

function Slide(props) {
  const {data} = props;
  return (
    <li>
      <img src={data.image} alt={data.text} />
    </li>
  );
}

export default Slide;