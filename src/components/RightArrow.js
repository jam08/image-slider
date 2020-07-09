import React from 'react';
import '../App.css';
import { ReactComponent as ChevronRight } from '../images/chevron-circle-right-solid.svg';

function RightButton(props) {
  return (
    <a 
      href={props.moveTo} 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown}
      name={props.name}
      disabled={props.disabled}>
        <span>{props.name}</span>
        <ChevronRight />    
    </a>
  );
}

export default RightButton;