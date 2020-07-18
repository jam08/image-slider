import React from 'react';
import '../App.css';
import {ReactComponent as Swipe} from '../images/hand-point-up-solid.svg';
import {ReactComponent as ArrowRight} from '../images/arrow-right-solid.svg';
import {ReactComponent as ArrowLeft} from '../images/arrow-left-solid.svg';

function Instructions(props) {
  const {showInstructions, keyboardInstructions, swipeInstructions} = props;
  // console.log('event status: ',props);
  return (
    <div className="instructions">
      <p className={swipeInstructions ? "touch-show" : "touch-hide"}>
        Swipe for more
        <span><Swipe /></span>
      </p>
      <p className={showInstructions ? "hover-show" : "hover-hide"}>
        <span><ArrowLeft /></span>
        Scroll for more
        <span><ArrowRight /></span>
      </p>
      <p className={keyboardInstructions ? "focus-show" : "focus-hide"}>Use your arrow keys for more</p>
    </div>
  );
}

export default Instructions;