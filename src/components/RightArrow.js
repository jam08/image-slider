import React from 'react';
import '../App.css';
import { ReactComponent as ChevronRight } from '../images/chevron-circle-right-solid.svg';

function ArrowButton(props) {
  return (
    <a 
      href={props.moveTo} 
      onClick={props.onClick} 
      disabled={props.disabled}>
        <span>{props.name}</span>
        <ChevronRight />    
    </a>
  );
}

export default ArrowButton;