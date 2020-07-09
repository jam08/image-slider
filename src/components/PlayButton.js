import React from 'react';
import '../App.css';
import { ReactComponent as PlayBtn } from '../images/play-circle-solid.svg';
import { ReactComponent as PauseBtn } from '../images/pause-circle-solid.svg'

function PlayButton(props) {

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
      {props.pressed ? <PauseBtn /> : <PlayBtn /> }
      <span>{props.name}</span>
    </button>
  );
}

export default PlayButton;