import React from 'react';
import '../App.css';
// import sheeps from '../images/sheeps@2x.jpg';
// import library from '../images/Library@2x.jpg';
// import templeBar from '../images/TempleBar@2x.jpg';
import { imageData } from '../data/ImageData';
import Slide from './Slide';
import ArrayButton from './ArrowButton';

class Slider extends React.Component {
  state = {
    currentIndex: 0,
    isRunning: true,
  }

  handleSlideChange = () => {
    let {currentIndex} = this.state;
    const length = imageData.length;
    if(currentIndex >= 0 && currentIndex < length - 1) {
      currentIndex++;
      this.setState({currentIndex});
    } else if(currentIndex === length - 1) {
      currentIndex--;
      this.setState({currentIndex});
    }
  }

  handleToNext = () => {
    let {currentIndex} = this.state;
    const length = imageData.length;
    if(currentIndex >= 0 && currentIndex < length - 1) {
      currentIndex++;
      this.setState({currentIndex});
    }
  }

  handleToPrevious = () => {
    let {currentIndex} = this.state;
    if(currentIndex > 0) {
      currentIndex--;
      this.setState({currentIndex});
    }
  }

  render() {
    const {currentIndex} = this.state;
    const length = imageData.length;
    return (
      <section>
        <h2>Images of Ireland</h2>
        <ul>
          <Slide data={imageData[currentIndex]} />
        </ul>
        <ArrayButton name="Previous" onClick={this.handleToPrevious} disabled={currentIndex === 0}/>
        <ArrayButton name="Next" onClick={this.handleToNext} disabled={currentIndex === length - 1}/>
      </section>
    );
  }
}

export default Slider;