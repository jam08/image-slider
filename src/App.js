import React from 'react';
import './App.css';
import Slider from './components/Slider';
import shamrock from './images/shamrock.png';
//BIld av <a href="https://pixabay.com/sv/users/DoomSlayer-15996357/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5096927">DoomSlayer</a> från <a href="https://pixabay.com/sv/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5096927">Pixabay</a>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={shamrock} alt="shamrock"/>
        <h1>Images of Ireland</h1>
      </header>
      <main>
        <Slider />
      </main>
    </div>
  );
}

export default App;
