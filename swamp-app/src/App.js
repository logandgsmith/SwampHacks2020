import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Banner">
        <div className="Container">
          <h1>
            <span className="Circle"></span>
          </h1>
          <nav class="Main-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="App-header">
        <h1>SwampHacks 2020 App</h1>
        <h2>Description of What it Does</h2>
        {/*TODO: Link to autoscroll to actual app*/}
      </header>
      <p>Testing the spacing of the words in ths section so that it 
        actually looks like a block of text that someone would type. 
        Here is a shorter sentence.</p>
    </div>
  );
}

export default App;
