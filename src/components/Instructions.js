import React from 'react';
import '../App.css';

function Instructions(props) {
  const {show} = props;
  return (
    <div className="instructions">
      <p className="hover-hide">Scroll for more</p>
      <p className={show ? "focus-show" : "focus-hide"}>Use your arrow keys for more</p>
    </div>
  );
}

export default Instructions;