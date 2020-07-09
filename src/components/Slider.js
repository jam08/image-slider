import React from 'react';
import '../App.css';
import { imageData } from '../data/ImageData';
import Slide from './Slide';
import ArrayButton from './ArrowButton';
import PlayButton from './PlayButton';
import SlideNav from './SlideNav';

const styles = {
  isPaused: {
    color: '#495e81',
    backgroundColor: '#fff'
  },
  isPlaying: {
    color: '#fff',
    backgroundColor: '#495e81'
  }
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isRunning: true,
      paused: false,
    };
    this.playButton = React.createRef();
  }
  
  componentDidMount() {
    this.playButton.current.focus();
    this.handleStartSlides();
  }

  handleStartSlides = () => {
    this.slideInterval = setInterval(this.handleSlideChange, 4000);
  }

  handleStopSlides = () => {
    clearInterval(this.slideInterval);
  }

  changeHash = (newHash) => {
    let {location} = window;
    return location.hash = newHash;
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

  handleToNext = (e) => {
    e.preventDefault();
    let {currentIndex} = this.state;
    const length = imageData.length;
    if(currentIndex >= 0 && currentIndex < length - 1) {
      currentIndex++;
      this.setState({currentIndex});
    }
  }

  handleToPrevious = (e) => {
    e.preventDefault();
    let {currentIndex} = this.state;
    if(currentIndex > 0) {
      currentIndex--;
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
    const {currentIndex, isRunning, paused} = this.state;
    const length = imageData.length;

    let inRangePrev = currentIndex > 0 && currentIndex === length - 1;
    let inRangeNext = currentIndex === 0 && currentIndex < length - 1;

    let slideNumber = currentIndex + 1;
    this.changeHash(`slide-${slideNumber}`);

    return (
      <section>
        <h2>Images of Ireland</h2>
        <Slide slides={imageData} current={currentIndex}/>
        <SlideNav slides={imageData} />
        <div className="button-container">
          <PlayButton 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave} 
            onClick={this.handlePlayButton}
            name={paused ? "Paused" : "Playing"}
            pressed={!paused}
            refBtn={this.playButton}
            style={isRunning ? styles.isPlaying : styles.isPaused}
          />
          <ArrayButton 
            name="Previous" 
            moveTo={inRangePrev ? `slide-${slideNumber - 1}` : ""} 
            onClick={this.handleToPrevious}
            disabled={currentIndex === 0}
          />
          <ArrayButton 
            name="Next" 
            moveTo={inRangeNext ? `slide-${slideNumber + 1}` : ""} 
            onClick={this.handleToNext}
            disabled={currentIndex === length - 1}
          />
        </div>
      </section>
    );
  }
}

export default Slider;