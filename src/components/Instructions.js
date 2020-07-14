import React from 'react';
import '../App.css';

function Instructions(props) {
  const {showInstructions, keyboardInstructions, swipeInstructions} = props;
  // console.log('event status: ',props);
  return (
    <div className="instructions">
      <p className={swipeInstructions ? "touch-show" : "touch-hide"}>Swipe for more</p>
      <p className={showInstructions ? "hover-show" : "hover-hide"}>Scroll for more</p>
      <p className={keyboardInstructions ? "focus-show" : "focus-hide"}>Use your arrow keys for more</p>
    </div>
  );
}

export default Instructions;