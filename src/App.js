import React from 'react';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Images of Ireland</h1>
      </header>
      <main>
        <Slider />
      </main>
    </div>
  );
}

export default App;
