import React from 'react';
import '../App.css';
import { ReactComponent as ChevronLeft } from '../images/chevron-circle-left-solid.svg';

function ArrowButton(props) {
  return (
    <a 
      href={props.moveTo} 
      onClick={props.onClick} 
      disabled={props.disabled}>
          <ChevronLeft />
          <span>{props.name}</span>
    </a>
  );
}

export default ArrowButton;