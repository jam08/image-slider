import React from 'react';
import '../App.css';

function PlayButton(props) {
  return (
    <button 
      type="button"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default PlayButton;