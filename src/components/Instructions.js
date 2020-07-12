import React from 'react';
import '../App.css';

function Instructions(props) {
  const {showInstructions, keyboardUse} = props;
  return (
    <div className="instructions">
      <p className={showInstructions ? "hover-show" : "hover-hide"}>Scroll for more</p>
      <p className={keyboardUse ? "focus-show" : "focus-hide"}>Use your arrow keys for more</p>
    </div>
  );
}

export default Instructions;