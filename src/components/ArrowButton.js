import React from 'react';
import '../App.css';

function ArrowButton(props) {
  return (
    <button type="button" onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
  );
}

export default ArrowButton;