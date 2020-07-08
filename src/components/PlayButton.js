import React from 'react';
import '../App.css';

function PlayButton(props) {
  // console.log('ref: ', props.reBtn);
  return (
    <button 
      type="button"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      aria-pressed={props.pressed}
      ref={props.refBtn}
      style={props.style}
    >
      {props.name}
    </button>
  );
}

export default PlayButton;