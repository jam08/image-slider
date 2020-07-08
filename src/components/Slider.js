import React from 'react';
import '../App.css';
import { imageData } from '../data/ImageData';
import Slide from './Slide';
import ArrayButton from './ArrowButton';
import PlayButton from './PlayButton';

class Slider extends React.Component {
  state = {
    currentIndex: 0,
    isRunning: true,
    paused: false,
  }

  componentDidMount() {
    this.handleStartSlides();
  }

  handleStartSlides = () => {
    this.slideInterval = setInterval(this.handleSlideChange, 4000);
  }

  handleStopSlides = () => {
    clearInterval(this.slideInterval);
  }

  handleSlideChange = () => {
    let {currentIndex} = this.state;
    const length = imageData.length;
    if(currentIndex >= 0 && currentIndex < length - 1) {
      currentIndex++;
      this.setState({currentIndex});
    } else if(currentIndex === length - 1) {
      currentIndex = 0;
      this.setState({currentIndex});
    }
  }

  handleToNext = () => {
    let {currentIndex} = this.state;
    const length = imageData.length;
    if(currentIndex >= 0 && currentIndex < length - 1) {
      currentIndex++;
      console.log('next: ', currentIndex);
      this.setState({currentIndex});
    }
  }

  handleToPrevious = () => {
    let {currentIndex} = this.state;
    if(currentIndex > 0) {
      currentIndex--;
      console.log('previous: ', currentIndex);
      this.setState({currentIndex});
    }
  }

  handleMouseEnter = () => {
    const {isRunning, paused} = this.state;
    if(isRunning && !paused) {
      this.handleStopSlides();
      this.setState({isRunning: false});
    }
  }

  handleMouseLeave = () => {
    const {isRunning, paused} = this.state;
    if(!isRunning && !paused) {
      this.handleStartSlides();
      this.setState({isRunning: true});
    }
  }

  handlePlayButton = () => {
    const {paused} = this.state;
    if(!paused) {
      this.handleStopSlides();
      this.setState({
        isRunning: false,
        paused: true
      });
    } else {
      this.handleStartSlides();
      this.setState({
        isRunning: true,
        paused: false
      });
    }
  }

  render() {
    const {currentIndex, paused} = this.state;
    const length = imageData.length;
    return (
      <section>
        <h2>Images of Ireland</h2>
        <ul>
          <Slide data={imageData[currentIndex]} />
        </ul>
        <ArrayButton name="Previous" onClick={this.handleToPrevious} disabled={currentIndex === 0}/>
        <PlayButton 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave} 
          onClick={this.handlePlayButton}
          name={paused ? "Play" : "Stop"} />
        <ArrayButton name="Next" onClick={this.handleToNext} disabled={currentIndex === length - 1}/>
      </section>
    );
  }
}

export default Slider;