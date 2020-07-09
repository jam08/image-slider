import React from 'react';
import '../App.css';

function ArrowButton(props) {
  return (
    <a href={props.moveTo} onClick={props.onClick} disabled={props.disabled}>{props.name}</a>
  );
}

export default ArrowButton;