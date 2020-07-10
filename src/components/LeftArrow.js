import React from 'react';
import '../App.css';
import { ReactComponent as ChevronLeft } from '../images/chevron-circle-left-solid.svg';

function LeftButton(props) {
  return (
    <a 
      href={props.moveTo} 
      onClick={props.onClick} 
      onKeyDown={props.onKeyDown}
      name={props.name}
      disabled={props.disabled}>
          <ChevronLeft />
          <span>{props.name}</span>
    </a>
  );
}

export default LeftButton;